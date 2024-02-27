import { _clone } from "./clone";
import { parseReferenceGlobal } from "./token-references";


export function importTextStyles(tokens: any[]) {
    Object.entries(tokens).forEach(([name, token]) => {
        if(token.$type == 'typography') {
            let textStyle = getStyleByName(name);
            let newStyle = false;

            if(!textStyle) {
                textStyle = figma.createTextStyle();
                newStyle = true;
            }

            const resolved = parseValues(token.$value, tokens);
            const normalized = convertTextStyleToFigma(name, resolved);

            if(!newStyle) {
                normalized.fontName = _clone(textStyle.fontName);
            }

            Object.keys(normalized).forEach(key => {
                textStyle[key] = normalized[key];
            })
        }
    })
}

function parseValues(value, dictionary) {
    let output = {};
    Object.entries(value).forEach(([key, value]) => {
        const resolvedValue = parseReferenceGlobal(value, dictionary);
        output[key] = resolvedValue;
    });

    return output;
}

function getLocalStyles() {
  return figma.getLocalTextStyles();
};

function getStyleByName(name) {
  const stylesByType = getLocalStyles();
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

export function convertTextStyleToFigma(name, values): TextStyle {
    let textStyle = {
        'name': name,
        'fontSize': parseFloat(values.fontSize),
        'textDecoration': convertTextDecorationToFigma(values.textDecoration),
        'fontName': {
            family: values.fontFamily,
            style: values.fontWeight
        },
        'letterSpacing': {
            unit: values.letterSpacing.includes('%') ? "PERCENT" : "PIXELS",
            value: parseInt(values.letterSpacing)
        },
        'lineHeight': {
            unit: values.lineHeight.includes('%') ? "PERCENT" : "PIXELS",
            value: parseFloat(values.lineHeight)
        },
        leadingTrim: "NONE",
        paragraphIndent: 0,
        'paragraphSpacing': parseInt(values.paragraphSpacing),
        listSpacing: 0,
        hangingPunctuation: false,
        hangingList: false,
        'textCase': convertTextCaseToFigma(values.textCase)
    }

    return textStyle as TextStyle;
}