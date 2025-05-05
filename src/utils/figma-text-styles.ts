import { DesignTokensRaw, TypographyTokenValue } from "../import-tokens";
import { _clone } from "./clone";
import { getAliasName, getDefaultVariableValue } from "./figma-variables";
import { findVariableByReferences, getGlobalTokensDictionary, resolveGlobalTokenValue } from "./token-references";

let fontLoadStatus = [];
async function preLoadFont(fontName: FontName) {
    const fontNameAndStyle = `${fontName.family} ${fontName.style}`;

    if(fontLoadStatus.indexOf(fontNameAndStyle) == -1) {
        console.log(`loading ${fontNameAndStyle}`);
        await figma.loadFontAsync(fontName).catch((reason) => {
            debugger;
        });
        fontLoadStatus.push(fontNameAndStyle);
        return true;
    }

    console.log(`already done with ${fontNameAndStyle}`);
    return false;
}

export async function importTextStyles(tokens: DesignTokensRaw) {
    fontLoadStatus = [];

    for (const [name, token] of Object.entries(tokens)) {

        if (token.$type != 'typography') {
            continue;
        }

        const resolved = await parseValues(token.$value, tokens);
        const normalized = convertTextStyleToFigma(name, resolved);
        let fontName: FontName = normalized.fontName;

        await preLoadFont(fontName);

        let textStyle = await getStyleByName(name);
        let newStyle = false;

        if (!textStyle) {
            textStyle = figma.createTextStyle();
            newStyle = true;
        }

        // reset
        textStyle.setBoundVariable('fontStyle', null);
        textStyle.setBoundVariable('lineHeight', null);
        textStyle.setBoundVariable('fontSize', null);
        textStyle.setBoundVariable('paragraphSpacing', null);
        textStyle.setBoundVariable('fontFamily', null);
        textStyle.setBoundVariable('fontStyle', null);

        if (!newStyle) {
            fontName = _clone(textStyle.fontName);
            await preLoadFont(fontName);
            normalized.fontName = fontName;
        }
        try {

            Object.keys(normalized).forEach(key => {
                textStyle[key] = normalized[key];
            })

            const lineHeightValue = token.$value.lineHeight;
            const lineHeightVariable = typeof lineHeightValue == 'string' ? await findVariableByReferences(lineHeightValue) : null;          
            const fontSizeValue = token.$value.fontSize;
            const fontSizeVariable = typeof fontSizeValue == 'string' ? await findVariableByReferences(fontSizeValue) : null;
            const paragraphSpacingValue = token.$value.paragraphSpacing;
            const paragraphSpacingVariable = typeof paragraphSpacingValue == 'string' ? await findVariableByReferences(paragraphSpacingValue) : null;
            const fontFamilyValue = token.$value.fontFamily;
            const fontFamilyVariable = typeof fontFamilyValue == 'string' ? await findVariableByReferences(fontFamilyValue) : null;
            const fontStyleValue = token.$value.fontStyle;
            const fontStyleVariable = typeof fontStyleValue == 'string' ? await findVariableByReferences(fontStyleValue) : null;

            lineHeightVariable && textStyle.setBoundVariable('lineHeight', lineHeightVariable);
            fontSizeVariable && textStyle.setBoundVariable('fontSize', fontSizeVariable);
            paragraphSpacingVariable && textStyle.setBoundVariable('paragraphSpacing', paragraphSpacingVariable);
            fontFamilyVariable && textStyle.setBoundVariable('fontFamily', fontFamilyVariable);
            fontStyleVariable && textStyle.setBoundVariable('fontStyle', fontStyleVariable);
        }
        catch (e) {
            debugger;
        }
    }
}

async function parseValues(value: TypographyTokenValue, dictionary?): Promise<TypographyTokenValue> {
    let output = {};
    for (const [key, tokenReference] of Object.entries(value)) {
        const resolvedVariable = await findVariableByReferences(tokenReference as string)

        if(resolvedVariable) {
            output[key] = await getDefaultVariableValue(resolvedVariable);
        }
        else {
            const resolvedValue = resolveGlobalTokenValue(tokenReference, dictionary || getGlobalTokensDictionary());
            output[key] = resolvedValue;
        }
    }
    return output as TypographyTokenValue;
}

async function getLocalStyles() {
    return await figma.getLocalTextStylesAsync();
};

async function getStyleByName(name) {
    const stylesByType = await getLocalStyles();
    const match = stylesByType.find((style) => style.name === name);

    if (match) {
        return match;
    } else {
        return null;
    }
};

function convertTextCaseToFigma(value: string): "UPPER" | "LOWER" | "TITLE" | "SMALL_CAPS" | "SMALL_CAPS_FORCED" | "ORIGINAL" {
    switch (value.toLowerCase()) {
        case 'uppercase':
        case 'upper':
            return 'UPPER';
        case 'lowercase':
        case 'lower':
            return 'LOWER';
        case 'capitalize':
        case 'title':
            return 'TITLE';
        case 'small-caps':
        case 'small_caps':
            return 'SMALL_CAPS';
        case 'all-small-caps':
        case 'small_caps_forced':
            return 'SMALL_CAPS_FORCED';
        default:
            return 'ORIGINAL';
    }
}

function convertTextDecorationToFigma(value: string) {
    switch (value.toLowerCase()) {
        case 'underline':
            return 'UNDERLINE';
        case 'line-through':
        case 'strikethrough':
            return 'STRIKETHROUGH';
        default:
            return 'NONE';
    }
}

interface UnitValue {
    unit: "PERCENT" | "PIXELS" | "AUTO";
    value?: string|number;
}

function getLetterSpacing(value: string|number): LetterSpacing {
    return getValueUnit(value) as LetterSpacing;
}

function getValueUnit(value: string|number): LetterSpacing | LineHeight {
    const stringValue = `${value}`;

    if(value === 'AUTO') {
        return {
            unit: "AUTO"
        };
    }

    if(stringValue.includes('%')) {
        return {
            unit: "PERCENT",
            value: parseFloat(stringValue)
        }
    }
    else {
        return {
            unit: "PIXELS",
            value: parseFloat(stringValue)
        }
    }
}

export function convertTextStyleToFigma(name, values: TypographyTokenValue): TextStyle {
    let textStyle = {
        'name': name,
        'fontSize': parseFloat(`${values.fontSize}`),
        'textDecoration': convertTextDecorationToFigma(values.textDecoration),
        'fontName': {
            family: values.fontFamily,
            style: values.fontStyle
        },
        'letterSpacing': getLetterSpacing(values.letterSpacing),
        'lineHeight': getValueUnit(values.lineHeight),
        'leadingTrim': "NONE",
        'paragraphIndent': 0,
        'paragraphSpacing': parseInt(`${values.paragraphSpacing}`) || 0,
        'listSpacing': parseFloat(`${values.listSpacing}`) || 0,
        'hangingPunctuation': false,
        'hangingList': false,
        'textCase': convertTextCaseToFigma(values.textCase)
    }

    return textStyle as TextStyle;
}

function getUnitValue(unitValue: UnitValue) {
    if(unitValue.unit == "AUTO") {
        return "AUTO"
    }

    if(unitValue.unit == "PERCENT") {
        return `${unitValue.value}%`
    }

    return unitValue.value
}

export async function convertFigmaTextStyleToToken(style: TextStyle): Promise<TypographyTokenValue> {
    let typographyTokenValue: TypographyTokenValue = {
        "fontFamily": style.fontName.family,
        "lineHeight": getUnitValue(style.lineHeight),
        "fontSize": style.fontSize,
        "letterSpacing": getUnitValue(style.letterSpacing),
        "listSpacing": style.listSpacing,
        "paragraphSpacing": style.paragraphSpacing,
        "fontStyle": style.fontName.style,
        "textCase": style.textCase,
        "textDecoration": style.textDecoration,   
    }

    for(const prop in style.boundVariables) {
        const boundVariable = style.boundVariables[prop];
        typographyTokenValue[prop] = await getAliasName(boundVariable.id);
    }

    return typographyTokenValue;
}