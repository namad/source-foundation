import componentTokens from './tokens/colors/components/component-tokens-base.json';
import paletteLightCommon from './tokens/colors/system/light-common.json';

import paletteLight2 from './tokens/colors/system/light-2.json';
import paletteLight3 from './tokens/colors/system/light-3.json';
import paletteLight4 from './tokens/colors/system/light-4.json';

import paletteDarkCommon from './tokens/colors/system/dark-common.json';

import paletteDarkElevated2 from './tokens/colors/system/dark-elevated-2.json';
import paletteDarkElevated3 from './tokens/colors/system/dark-elevated-3.json';
import paletteDarkElevated4 from './tokens/colors/system/dark-elevated-4.json';

import paletteDarkBase2 from './tokens/colors/system/dark-base-2.json';
import paletteDarkBase3 from './tokens/colors/system/dark-base-3.json';
import paletteDarkBase4 from './tokens/colors/system/dark-base-4.json';

import { flattenObject } from './utils/flatten-object';
import { generateSystemAccentPalette } from './color-tokens/accent-palette-generator';
import { generateNeutrals } from './color-tokens/neutrals-palette-generator';
import { ImportFormData } from './utils/import-utils';
import { SemanticAccentColors, defaultSemanticAccents } from './defaults';

let GlobalNeutrals;

export function getSemanticAccentSettings(): SemanticAccentColors {
    return defaultSemanticAccents;
}

export function getGlobalNeutrals() {
    return GlobalNeutrals;
}

export function getComponentColors() {
    return flattenObject(componentTokens);
}

export function getThemeColors(theme, params: ImportFormData) {

    GlobalNeutrals = generateNeutrals({
        hue: params.hue,
        saturation: params.saturation,
        distance: params.distance
    });

    const semanticAccents: SemanticAccentColors = {
        primary: params.primary,
        info: params.info,
        success: params.success,
        warning: params.warning,
        danger: params.danger,
    };
    

    const lightAccentTokens = generateSystemAccentPalette('light', params);
    const darkAccentTokens = generateSystemAccentPalette('dark', params);
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

function generateSemanticShades(aliasName) {
    let output = {};

    for (var a = 1, b = 7; a < b; a++) {
        output[`${a}00`] = {
            "$value": `{accent.${aliasName}.${a}00}`,
            "$type": "color"
        }
    }

    return output;
}

function generateSemanticPalette(accents: SemanticAccentColors, palette) {
    let result = {};

    Object.entries(accents).forEach(([name, alias]) => {
        result[name] = generateSemanticShades(alias);
    });

    return result;
}