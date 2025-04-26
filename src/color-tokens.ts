import componentTokens from './tokens/colors/components/component-tokens.json';
import paletteLightCommon from './tokens/colors/system/light-common.tokens.json';

import paletteLight2 from './tokens/colors/system/light-2.tokens.json';
import paletteLight3 from './tokens/colors/system/light-3.tokens.json';
import paletteLight4 from './tokens/colors/system/light-4.tokens.json';
import paletteTextLight from './tokens/colors/system/light-text-base.json';

import paletteDarkCommon from './tokens/colors/system/dark-common.tokens.json';

import paletteDarkElevated2 from './tokens/colors/system/dark-elevated-2.tokens.json';
import paletteDarkElevated3 from './tokens/colors/system/dark-elevated-3.tokens.json';
import paletteDarkElevated4 from './tokens/colors/system/dark-elevated-4.tokens.json';

import paletteDarkBase2 from './tokens/colors/system/dark-base-2.tokens.json';
import paletteDarkBase3 from './tokens/colors/system/dark-base-3.tokens.json';
import paletteDarkBase4 from './tokens/colors/system/dark-base-4.tokens.json';
import paletteTextDark from './tokens/colors/system/dark-text-base.json';

import { flattenObject } from './utils/flatten-object';
import { ColorShadesScale, generateSystemAccentPalette, getGlobalAccent, getShadesTemplate } from './color-generators/accent-palette-generator';
import { generateNeutrals } from './color-generators/neutrals-palette-generator';
import { ImportFormData } from './import-ui';
import { SemanticAccentColors, collectionNames, colorThemeNames, defaultSemanticAccents } from './defaults';
import { _clone } from './utils/clone';
import { addToGlobalTokensDictionary, findTokenReferences, findVariableAlias, getGlobalTokensDictionary, resolveGlobalTokenValue } from './utils/token-references';
import { convertFigmaColorToRgb, parseColorValue } from './utils/figma-colors';
import { DesignToken, DesignTokensRaw, importVariables } from './import-tokens';

import { _mergeDeep } from './utils/merge-deep';
import { figmaAliasToDesignTokens, getDefaultVariableValue } from './utils/figma-variables';
import chroma from 'chroma-js';
import { roundTwoDigits } from './utils/round-decimals';
import { getColorTokensSortFn } from './utils/sort-tokens';

// const _merge = require('lodash.merge')

let GlobalNeutrals;

export function getSemanticAccentSettings(): SemanticAccentColors {
    return defaultSemanticAccents;
}

export function getGlobalNeutrals(params?: ImportFormData) {
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

function getTextOnAccentColors(formData: ImportFormData) {
    const primaryHUE = formData[formData.primary];
    // const systemAccentColor = chroma.hsl(primaryHUE, formData.accentSaturation, 0.5).luminance(formData.accentMidLuminance);
    // const whiteTextColor = chroma.hsl(formData.hue, formData.saturation, formData.textWhiteBrightness / 100);
    // const blackTextColor = chroma.hsl(formData.hue, formData.saturation, formData.textBlackBrightness / 100);
    // const whiteTextContrast = roundTwoDigits(chroma.contrast(whiteTextColor, systemAccentColor));
    // const blackTextContrast = roundTwoDigits(chroma.contrast(blackTextColor, systemAccentColor));
    let finalColor = formData.acentTextColor;

    if (finalColor == 'auto') {
        finalColor = formData.accentMidLuminance > 0.3 ? 'black' : 'white';
    }

    const template = {
        "text": {
            "accent": {
                "400": {
                    "$value": `rgba({text.${finalColor}}, 0.45)`,
                    "$type": "color",
                    "adjustments": finalColor == 'black' ? {
                        "h": primaryHUE,
                        "s": "0.9"
                    } : null
                },
                "500": {
                    "$value": `rgba({text.${finalColor}}, 0.7)`,
                    "$type": "color",
                    "adjustments": finalColor == 'black' ? {
                        "h": primaryHUE,
                        "s": "0.9"
                    } : null
                },
                "600": {
                    "$value": `{text.${finalColor}}`,
                    "$type": "color",
                    "adjustments": finalColor == 'black' ? {
                        "h": primaryHUE,
                        "s": "0.9"
                    } : null
                }
            }
        }
    }

    return template;
}

export function getThemeColors(theme: SourceColorTheme, formData: ImportFormData): DesignTokensRaw {
    let lightCommon = {
        ...paletteLightCommon,
        // ..._mergeDeep(paletteTextLight, getTextOnAccentColors(formData))
    }
    let darkCommon = {
        ...paletteDarkCommon,
        // ..._mergeDeep(paletteTextDark, getTextOnAccentColors(formData))
    }

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
        ...lightSemanticTokens,
    }

    const darkCommonTokens = {
        accent: darkAccentTokens,
        ...darkCommon,
        ...darkSemanticTokens
    }

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

function generateSemanticShades(aliasName, accentShades): ColorShadesScale {
    let output = {};

    for (var a = 1, b = 7; a < b; a++) {
        output[`${a}00`] = {
            "$value": `{accent.${aliasName}.${a}00}`,
            "$type": "color",
            "description": accentShades[`${a}00`].description
        }
    }

    return output as ColorShadesScale;
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

    const hasAdjustments = typeof token.adjustments == 'object';

    if (hasAdjustments && rawValue) {
        return rawValue
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

    await importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: 'Light Base',
        sortFn: getColorTokensSortFn(),
        data: flattenObject({
            ...paletteTextLight
        })
    });
    await importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: 'Dark Base',
        sortFn: getColorTokensSortFn(),
        data: flattenObject({
            ...paletteTextDark
        })
    });
    await importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: 'Dark Elevated',
        sortFn: getColorTokensSortFn(),
        data: flattenObject({
            ...paletteTextDark
        })
    });
}

export async function getColorSystemVersion(): Promise<number> {
    const variables = await figma.variables.getLocalVariablesAsync();
    const isSDS = figma.root.getPluginData('SDS') !== '';

    if (variables.length == 0) {
        return 0;
    }

    if (isSDS) {
        const textOnAccentVar = variables.find(variable => variable.name.startsWith('text/accent'));
        return textOnAccentVar ? 2 : 1
    }

    return 0;
}