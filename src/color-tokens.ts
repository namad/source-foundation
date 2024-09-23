import componentTokens from './tokens/colors/components/component-tokens.json';
import paletteLightCommon from './tokens/colors/system/light-common.tokens.json';

import paletteLight2 from './tokens/colors/system/light-2.tokens.json';
import paletteLight3 from './tokens/colors/system/light-3.tokens.json';
import paletteLight4 from './tokens/colors/system/light-4.tokens.json';

import paletteDarkCommon from './tokens/colors/system/dark-common.tokens.json';

import paletteDarkElevated2 from './tokens/colors/system/dark-elevated-2.tokens.json';
import paletteDarkElevated3 from './tokens/colors/system/dark-elevated-3.tokens.json';
import paletteDarkElevated4 from './tokens/colors/system/dark-elevated-4.tokens.json';

import paletteDarkBase2 from './tokens/colors/system/dark-base-2.tokens.json';
import paletteDarkBase3 from './tokens/colors/system/dark-base-3.tokens.json';
import paletteDarkBase4 from './tokens/colors/system/dark-base-4.tokens.json';

import { flattenObject } from './utils/flatten-object';
import { ColorShadesScale, generateSystemAccentPalette, getGlobalAccent, getShadesTemplate } from './color-generators/accent-palette-generator';
import { generateNeutrals } from './color-generators/neutrals-palette-generator';
import { ImportFormData } from './import-ui';
import { SemanticAccentColors, defaultSemanticAccents } from './defaults';
import chroma from "chroma-js";
import { _clone } from './utils/clone';
import { findVariableAlias, getGlobalTokensDictionary, resolveGlobalTokenValue } from './utils/token-references';
import { parseColorValue } from './utils/figma-colors';
import { DesignToken } from './import-tokens';

let GlobalNeutrals;

export function getSemanticAccentSettings(): SemanticAccentColors {
    return defaultSemanticAccents;
}

export function getGlobalNeutrals(params?: ImportFormData) {
    if(params) {
        GlobalNeutrals = generateNeutrals({
            hue: params.hue,
            saturation: params.saturation,
            distance: params.distance
        })
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
    return flat? flattenObject(palette) : palette;
}

export function getThemeColors(theme: 'lightBase' | 'darkBase' | 'darkElevated', formData: ImportFormData) {

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
        ...paletteLightCommon,
        ...lightSemanticTokens,
    }

    const darkCommonTokens = {
        accent: darkAccentTokens,
        ...paletteDarkCommon,
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
    let output: ColorShadesScale = {};

    for (var a = 1, b = 7; a < b; a++) {
        output[`${a}00`] = {
            "$value": `{accent.${aliasName}.${a}00}`,
            "$type": "color",
            "description": accentShades[`${a}00`].description
        }
    }

    return output;
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
        'accentMinLuminance'
    ]
    
    numberTypes.forEach(p => {
        if(typeof formData[p] == 'string') {
            normalizedData[p] = parseFloat(formData[p]);
        }
    });

    return normalizedData;
}

export function resolveColorTokenValue(token: DesignToken, dictionary, output = 'gl') {
    let color = token.$value as string;

    color = resolveGlobalTokenValue(color.trim(), dictionary);
    const result = parseColorValue(color, token.adjustments);

    if (result) {
        return result[output];
    }
    else {
        debugger;
        //throw new Error("Invalid color format");
    }
}
export async function getColorTokenValue(token: DesignToken): Promise<VariableAlias | RGBA | string> {
    let valueString = (`${token.$value}`).trim()
    const rawValue = resolveColorTokenValue(token, getGlobalTokensDictionary());
    const variableAlias = await findVariableAlias(valueString);

    if(variableAlias && typeof variableAlias == 'object') {
        return variableAlias;
    }
    else {
        return rawValue;
    }
}