import componentTokens from './tokens/colors/components/component-tokens.json';

import paletteLightCommon from './tokens/colors/system/light-common.tokens.json';
import paletteLightShadows from './tokens/colors/system/light-shadow-colors.tokens.json';

import paletteLight2 from './tokens/colors/system/light-2.tokens.json';
import paletteLight3 from './tokens/colors/system/light-3.tokens.json';
import paletteLight4 from './tokens/colors/system/light-4.tokens.json';

import paletteDarkCommon from './tokens/colors/system/dark-common.tokens.json';
import paletteDarkShadows from './tokens/colors/system/dark-shadow-colors.tokens.json';

import paletteDarkElevated2 from './tokens/colors/system/dark-elevated-2.tokens.json';
import paletteDarkElevated3 from './tokens/colors/system/dark-elevated-3.tokens.json';
import paletteDarkElevated4 from './tokens/colors/system/dark-elevated-4.tokens.json';

import paletteDarkBase2 from './tokens/colors/system/dark-base-2.tokens.json';
import paletteDarkBase3 from './tokens/colors/system/dark-base-3.tokens.json';
import paletteDarkBase4 from './tokens/colors/system/dark-base-4.tokens.json';

import { flattenObject } from './utils/flatten-object';
import { generateSystemAccentPalette } from './color-generators/accent-palette-generator';
import { generateNeutrals } from './color-generators/neutrals-palette-generator';
import { ImportFormData, SemanticAccentColors } from './import-ui';
import { collectionNames, defaultSemanticAccents, defaultSettings } from './defaults';
import { _clone } from './utils/clone';
import { addToGlobalTokensDictionary, findTokenReferences, findVariableAlias, getGlobalTokensDictionary, getReferenceName, resolveGlobalTokenValue } from './utils/token-references';
import { convertFigmaColorToRgb, parseColorValue } from './utils/figma-colors';
import { ColorDesignToken, DesignToken, DesignTokensRaw, importVariables } from './import-tokens';

import { _mergeDeep } from './utils/merge-deep';
import { figmaAliasToDesignTokens, findFigmaVariableCollectionByName, getDefaultVariableValue, setFigmaVariable } from './utils/figma-variables';
import { getColorTokensSortFn } from './utils/sort-tokens';
import chroma from 'chroma-js';
import { roundTwoDigits } from './utils/round-decimals';

// const _merge = require('lodash.merge')

let GlobalNeutrals;
let ColorSystemVersion;

export interface SystemColorPalette {
    primary: ColorRamp;
    fill: BaseColorTypes;
    stroke: BaseColorTypes;
    text: TextColorTypes;
    info: ColorRamp;
    success: ColorRamp;
    warning: ColorRamp;
    danger: ColorRamp;
    alt: BaseColorTypes;
    utility: UtyilityColors;
    accent: SystemAccentList;
}

export interface TextColorTypes {
    base: TextColors;
    contrast: TextColors;
}

export interface BaseColorTypes {
    base: ColorRamp;
    contrast: ColorRamp;
}

export interface UtyilityColors {
    white: DesignToken;
    black: DesignToken;
    transparent: DesignToken;
    tint: ColorRamp;
    shade: ColorRamp;
}

export interface TextColors {
    600: DesignToken;
    500: DesignToken;
    400: DesignToken;
    action: DesignToken;
    info: DesignToken;
    success: DesignToken;
    warning: DesignToken;
    danger: DesignToken;
}

export interface SystemAccentList {
    red: ColorRamp;
    amber: ColorRamp;
    brown: ColorRamp;
    green: ColorRamp;
    teal: ColorRamp;
    blue: ColorRamp;
    indigo: ColorRamp;
    violet: ColorRamp;
    purple: ColorRamp;
    pink: ColorRamp;
}

export interface ColorRamp {
    "100": DesignToken;
    "200": DesignToken;
    "300": DesignToken;
    "400": DesignToken;
    "500": DesignToken;
    "600": DesignToken;
}

export function getSemanticAccentSettings(): SemanticAccentColors {
    return defaultSemanticAccents;
}

export function getGlobalNeutrals(params?: ImportFormData): DesignTokensRaw {
    if (params) {
        GlobalNeutrals = generateNeutrals(params)
    }
    return GlobalNeutrals;
}

export function getComponentColors() {
    return flattenObject(componentTokens);
}

export function getBrandColors(name, accentShades, flat?: boolean) {
    const palette = {
        primary: generateSemanticShades(name, accentShades)
    };
    return flat ? flattenObject(palette) : palette;
}

export type SourceColorTheme = 'lightBase' | 'darkBase' | 'darkElevated';

function getTextOnAccentColors(formData: ImportFormData): DesignTokensRaw {
    const primaryHUE = formData[formData.primary];
    const systemAccentColor = chroma.hsl(primaryHUE, formData.accentSaturation, 0.5).luminance(formData.accentMidLuminance);
    const whiteTextColor = chroma.hsl(formData.hue, formData.saturation, formData.textWhiteBrightness / 100);
    const blackTextColor = chroma.hsl(formData.hue, formData.saturation, formData.textBlackBrightness / 100);
    const whiteTextContrast = roundTwoDigits(chroma.contrast(whiteTextColor, systemAccentColor));
    const blackTextContrast = roundTwoDigits(chroma.contrast(blackTextColor, systemAccentColor));

    let finalColor = formData.accentTextColor;

    if (finalColor == 'auto') {
        finalColor = whiteTextContrast < 3 ? 'black' : 'white';
    }
    return {
        "text": {
            "accent": {
                "400": {
                    "$value": `{text.${finalColor}.400}`,
                    "$type": "color"
                },
                "500": {
                    "$value": `{text.${finalColor}.500}`,
                    "$type": "color"
                },
                "600": {
                    "$value": `{text.${finalColor}.600}`,
                    "$type": "color"
                }
            }
        }
    }   
    return {
        "text": {
            "accent": {
                "400": {
                    "$value": `{text.${finalColor}.400}`,
                    "$type": "color",
                    "adjustments": {
                        "h": primaryHUE,
                        "s": "0.9"
                    }
                },
                "500": {
                    "$value": `{text.${finalColor}.500}`,
                    "$type": "color",
                    "adjustments": {
                        "h": primaryHUE,
                        "s": "0.9"
                    }
                },
                "600": {
                    "$value": `{text.${finalColor}.600}`,
                    "$type": "color",
                    "adjustments": {
                        "h": primaryHUE,
                        "s": "0.9"
                    }
                }
            }
        }
    }
}

function processCommonColors(formData: ImportFormData, tokens) {
    let textSaturationAdjustments = {};
    let textColors = getTextOnAccentColors(formData)

    if(ColorSystemVersion == 1) {
        textColors = null
    }

    if (formData.customAccentTextSaturation === true) {
        textSaturationAdjustments = {
            s: formData.accentTextSaturation
        }
    }
    const extension = {
        "text": {
            "base": {
                "primary": {
                    "adjustments": textSaturationAdjustments
                },
                "info": {
                    "adjustments": textSaturationAdjustments
                },
                "success": {
                    "adjustments": textSaturationAdjustments
                },
                "warning": {
                    "adjustments": textSaturationAdjustments
                },
                "danger": {
                    "adjustments": textSaturationAdjustments
                }
            },
            "contrast": {
                "primary": {
                    "adjustments": textSaturationAdjustments
                },
                "info": {
                    "adjustments": textSaturationAdjustments
                },
                "success": {
                    "adjustments": textSaturationAdjustments
                },
                "warning": {
                    "adjustments": textSaturationAdjustments
                },
                "danger": {
                    "adjustments": textSaturationAdjustments
                }
            }
        }
    }

    tokens = _mergeDeep(_clone(tokens), textColors)
    return _mergeDeep(tokens, extension);
}

export function getThemeColors(theme: SourceColorTheme, formData: ImportFormData): DesignTokensRaw {

    let lightCommon = processCommonColors(formData, paletteLightCommon) as SystemColorPalette;
    let darkCommon = processCommonColors(formData, paletteDarkCommon) as SystemColorPalette;

    let params = {
        ...normalizeFormData(formData)
    }

    getGlobalNeutrals(formData);

    const semanticAccents: SemanticAccentColors = {
        primary: params.primary,
        info: params.info,
        success: params.success,
        warning: params.warning,
        danger: params.danger,
    };

    let lightAccentTokens = generateSystemAccentPalette('light', params);
    let darkAccentTokens = generateSystemAccentPalette('dark', params);

    const lightSemanticTokens = generateSemanticPalette(semanticAccents, lightAccentTokens);
    const darkSemanticTokens = generateSemanticPalette(semanticAccents, darkAccentTokens);

    const lightCommonTokens = {
        accent: lightAccentTokens,
        ...lightCommon,
        ...getShadowColorTokens('light', formData),
        ...lightSemanticTokens,
    } as SystemColorPalette;

    const darkCommonTokens = {
        accent: darkAccentTokens,
        ...darkCommon,
        ...getShadowColorTokens('dark', formData),
        ...darkSemanticTokens
    } as SystemColorPalette;

    let commonColors = {};
    let themeColors = {};

    if (theme === "lightBase") {
        commonColors = flattenObject(lightCommonTokens);

        if (params.distance === 0.02) {
            themeColors = flattenObject(paletteLight2)
        }
        if (params.distance === 0.03) {
            themeColors = flattenObject(paletteLight3)
        }
        if (params.distance === 0.04) {
            themeColors = flattenObject(paletteLight4)
        }
    }
    if (theme === "darkElevated") {
        commonColors = flattenObject(darkCommonTokens);
        if (params.distance === 0.02) {
            themeColors = flattenObject(paletteDarkElevated2)
        }
        if (params.distance === 0.03) {
            themeColors = flattenObject(paletteDarkElevated3)
        }
        if (params.distance === 0.04) {
            themeColors = flattenObject(paletteDarkElevated4)
        }
    }
    if (theme === "darkBase") {
        commonColors = flattenObject(darkCommonTokens);
        if (params.distance === 0.02) {
            themeColors = flattenObject(paletteDarkBase2);
        }
        if (params.distance === 0.03) {
            themeColors = flattenObject(paletteDarkBase3);
        }
        if (params.distance === 0.04) {
            themeColors = flattenObject(paletteDarkBase4);
        }
    }

    return {
        ...commonColors,
        ...themeColors
    }
}

function generateSemanticShades(aliasName, accentShades): ColorRamp {
    let output = {};

    for (var a = 1, b = 7; a < b; a++) {
        output[`${a}00`] = {
            "$value": `{accent.${aliasName}.${a}00}`,
            "$type": "color",
            "description": accentShades[`${a}00`].description
        }
    }

    return output as ColorRamp;
}

function generateSemanticPalette(accents: SemanticAccentColors, palette) {
    let result = {};
    Object.entries(accents).forEach(([name, alias]) => {
        result[name] = generateSemanticShades(alias, palette[alias]);
    });

    return result;
}

function normalizeFormData(formData: ImportFormData): ImportFormData {
    let normalizedData: ImportFormData = _clone(formData);
    const numberTypes = [
        'hue',
        'saturation',
        'distance',
        'red',
        'amber',
        'brown',
        'green',
        'teal',
        'blue',
        'indigo',
        'violet',
        'purple',
        'pink',
        'accentSaturation',
        'accentMaxLuminance',
        'accentMidLuminance',
        'accentMinLuminance',
        'accentTextSaturation',
        'textWhiteBrightness',
        'textBlackBrightness',
    ]

    numberTypes.forEach(p => {
        if (typeof formData[p] == 'string') {
            normalizedData[p] = parseFloat(formData[p]);
        }
    });

    return normalizedData;
}

async function getColorVariableAliasValue(tokenValue: string, variableId: string, modeId: string) {
    const figmaVariable = await figma.variables.getVariableByIdAsync(variableId);
    let result;

    if (figmaVariable.resolvedType != "COLOR") {
        throw (`Variable ${figmaVariable.name} is not a color, it is ${figmaVariable.resolvedType}`)
    }

    const defaultValueRGBA: VariableValue = await getDefaultVariableValue(figmaVariable, modeId);
    result = convertFigmaColorToRgb(defaultValueRGBA as RGBA, 'hex');


    if (typeof tokenValue == 'string' && tokenValue.indexOf('rgb') >= 0) {
        const references = findTokenReferences(tokenValue).length;
        const alias = `{${figmaAliasToDesignTokens(figmaVariable.name)}}`;
        const newValue = tokenValue.replace(alias, result);
        result = parseColorValue(newValue).gl;

        return result;
    }

    return result;
}

export function resolveColorTokenValue(token: DesignToken, dictionary, output = 'gl') {
    const color = token.$value as string;

    const colorValue = resolveGlobalTokenValue(color.trim(), dictionary);

    const result = colorValue ? parseColorValue(colorValue, token.adjustments) : null;

    if (result) {
        return result[output];
    }
    else {
        console.warn(`Cannot resolve value for ${token.name}`);
        //throw new Error("Invalid color format");
    }
}

export async function getColorTokenValue(token: DesignToken, modeId: string): Promise<VariableAlias | RGBA | string> {
    let valueString = (`${token.$value}`).trim()
    const variableAlias = await findVariableAlias(valueString);
    const rawValue = resolveColorTokenValue(token, getGlobalTokensDictionary());

    if (token.$type != "color") {
        return
    }

    const hasAdjustments = typeof token.adjustments == 'object' && Object.keys(token.adjustments).length > 0;

    if (hasAdjustments && rawValue) {
        return rawValue
    }

    if (variableAlias && typeof variableAlias == 'object') {

        if (typeof token.$value == 'string' && token.$value.indexOf('rgb') >= 0) {
            let parsedValue = await getColorVariableAliasValue(token.$value, variableAlias.id, modeId);
            const references = findTokenReferences(token.$value).length;
            if (!rawValue && parsedValue && references) {
                return parsedValue;
            }
        }
        return variableAlias;

    }

    if (rawValue) {
        return rawValue;
    }
}

export async function upgradeTextPalette(params: ImportFormData) {
    const baseTextColorTokens = [
        "text/contrast/600",
        "text/contrast/500",
        "text/contrast/400"
    ]

    const brandTextColorTokens = [
        "text/base/action",
        "text/contrast/action"
    ]

    const targetTokens = [
        "text/accent/600",
        "text/accent/500",
        "text/accent/400"
    ]

    const figmaVariables = await figma.variables.getLocalVariablesAsync();

    const accentColorVariable = figmaVariables.find((variable) => {
        return targetTokens.indexOf(variable.name) >= 0
    });
    const baseColorVariables = figmaVariables.filter((variable) => {
        return baseTextColorTokens.indexOf(variable.name) >= 0
    });
    const brandColorVariables = figmaVariables.filter((variable) => {
        return brandTextColorTokens.indexOf(variable.name) >= 0
    });

    if (!accentColorVariable) {
        baseColorVariables.forEach(variable => {
            variable.name = variable.name.replace('contrast', 'accent');
        });
    }

    brandColorVariables.forEach(variable => {
        variable.name = variable.name.replace('action', 'primary');
    });

    addToGlobalTokensDictionary({
        ...getGlobalNeutrals(params)
    });

    const paletteTextDark = flattenObject({
        text: _clone(paletteDarkCommon.text)
    });
    const paletteTextLight = flattenObject({
        text: _clone(paletteLightCommon.text)
    });

    /*
        Extend existing collection with new variables 
        Otherwise it wont be able to resolve variable aliases
    */
    const collectionName = collectionNames.get('themeColors');
    const collection = await findFigmaVariableCollectionByName(collectionName);
    const mode = collection.modes[0];
    
        for (const tokenName in paletteTextLight){
        await setFigmaVariable(collection, mode.modeId, 'COLOR', tokenName)
    }
    /* */
    
    await importVariables({
        collectionName: collectionName,
        modeName: 'Light Base',
        sortFn: getColorTokensSortFn(),
        data: paletteTextLight
    });
    await importVariables({
        collectionName: collectionName,
        modeName: 'Dark Base',
        sortFn: getColorTokensSortFn(),
        data: paletteTextDark
    });
    await importVariables({
        collectionName: collectionName,
        modeName: 'Dark Elevated',
        sortFn: getColorTokensSortFn(),
        data: paletteTextDark
    });

    ColorSystemVersion = 2;
}



export async function getColorSystemVersion(refresh=false): Promise<number> {
    if(ColorSystemVersion != undefined && !refresh) {
        return ColorSystemVersion;
    }

    const variables = await figma.variables.getLocalVariablesAsync();
    const isSDS = figma.root.getPluginData('SDS') !== '';

    if (variables.length == 0) {
        ColorSystemVersion = 0;
    }

    if (isSDS) {
        const textOnAccentVar = variables.find(variable => variable.name.startsWith('text/accent'));
        ColorSystemVersion = textOnAccentVar ? 2 : 1
    }

    return ColorSystemVersion;
}

function isAlias(value) {
    try {
        return value.toString().trim().charAt(0) === "{";
    }
    catch (e) {
        debugger
    }
}
export function processColorTokenCSSValue(token: ColorDesignToken, globalNeutrals: DesignTokensRaw) {
    let value = token.$value as string;

    value = resolveColorTokenValue(token as DesignToken, globalNeutrals, 'hsl');

    const hasAdjustments = typeof token.adjustments == 'object' && Object.keys(token.adjustments).length > 0;

    if (hasAdjustments) {
        return value
    }

    if (isAlias(token.$value) && !token.$value.includes('rgb') && !token.$value.includes('hsl')) {
        const aliasName = getReferenceName(token.$value as string);
        value = `var(--${aliasName.replace(/\./g, "-")})`;
    }

    return value
}

const shadowColours = {
    light: paletteLightShadows,
    dark: paletteDarkShadows,
}
export function getShadowColorTokens(theme: 'light' | 'dark', params: ImportFormData): DesignTokensRaw {
    const tokenOptions = shadowColours[theme || 'light'];
    if (params.shadowsColor == undefined) {
        params.shadowsColor = defaultSettings.shadowsColor;
    }
    return flattenObject(tokenOptions[params.shadowsColor]);
}