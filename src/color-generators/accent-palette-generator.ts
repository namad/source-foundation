import chroma from "chroma-js";
import * as themeStore from '../utils/themes-store';
import { resolveGlobalTokenValue } from "../utils/token-references";
import { ImportFormData } from "../import-ui";
import { defaultAccentHUEs, systemAccentList } from "../defaults";
import { DesignToken, DesignTokensRaw } from "../import-tokens";

export interface SystemAccentList {
    red: ColorShadesScale;
    amber: ColorShadesScale;
    brown: ColorShadesScale;
    green: ColorShadesScale;
    teal: ColorShadesScale;
    blue: ColorShadesScale;
    indigo: ColorShadesScale;
    violet: ColorShadesScale;
    purple: ColorShadesScale;
    pink: ColorShadesScale;
}

export interface ColorShadesScale {
    "100": DesignToken;
    "200": DesignToken;
    "300": DesignToken;
    "400": DesignToken;
    "500": DesignToken;
    "600": DesignToken;
}

interface GlobalAccentList {
    [key: string]: ColorShadesScale;
}

export function getShadesTemplate(theme: 'light' | 'dark', params: ImportFormData): ColorShadesScale {
    let textSaturationAdjustments = {};
    
    if (params.customAccentTextSaturation === true) {
        textSaturationAdjustments = {
            s: params.accentTextSaturation
        }
    }

    switch(theme) {
        default: {
            return {
                "100": {
                    "$value": "rgba({200}, 0.125)",
                    "$type": "color",
                    "description": `Subtle semitransparent accent`
                },
                "200": {
                    "$value": "rgba({200}, 0.33)",
                    "$type": "color",
                    "description": `Light semitransparent accent`
                },
                "300": {
                    "$value": "{300}",
                    "$type": "color",
                    "description": `Non textual elements`
                },
                "400": {
                    "$value": "{400}",
                    "$type": "color",
                    "description": `Base background color`
                },
                "500": {
                    "$value": "{600}",
                    "$type": "color",
                    "description": `Text on light surface`,
                    "adjustments": textSaturationAdjustments
                },
                "600": {
                    "$value": "{100}",
                    "$type": "color",
                    "description": `Text on dark surface`,
                    "adjustments": textSaturationAdjustments
                }
            }
        }
        case "dark": {
            return {
                "100": {
                    "$value": "rgba({200}, 0.20)",
                    "$type": "color",
                    "description": `Subtle semitransparent accent`
                },
                "200": {
                    "$value": "rgba({200}, 0.45)",
                    "$type": "color",
                    "description": `Light semitransparent accent`
                },
                "300": {
                    "$value": "{300}",
                    "$type": "color",
                    "description": `Non textual elements`
                },
                "400": {
                    "$value": "{400}",
                    "$type": "color",
                    "description": `Base background color`
                },
                "500": {
                    "$value": "{100}",
                    "$type": "color",
                    "description": `Text on light surface`,
                    "adjustments": textSaturationAdjustments
                },
                "600": {
                    "$value": "{100}",
                    "$type": "color",
                    "description": `Text on dark surface`,
                    "adjustments": textSaturationAdjustments
                }
            }
        }
    }
}

function getColorParams(theme: 'light' | 'dark', params: ImportFormData) {
    let colorParams = {
        saturation: params.accentSaturation, //0.9 is default value
        minLuminance: params.accentMinLuminance,
        midLuminance: params.accentMidLuminance,
        maxLuminance: params.accentMaxLuminance,    
    }
    if (theme == 'dark' && themeStore.isCustomDarkMode() === false) {
        colorParams.saturation = params.accentSaturation * 0.85;
        // colorParams.maxLuminance = params.accentMaxLuminance * 0.85;
    }
    return colorParams;
}

export function generateSystemAccentPalette(theme: 'light' | 'dark', params: ImportFormData): SystemAccentList {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);

    let accents: SystemAccentList = {
        red: getShadesTemplate(theme, params),
        amber: getShadesTemplate(theme, params),
        brown: getShadesTemplate(theme, params),
        green: getShadesTemplate(theme, params),
        teal: getShadesTemplate(theme, params),
        blue: getShadesTemplate(theme, params),
        indigo: getShadesTemplate(theme, params),
        violet: getShadesTemplate(theme, params),
        purple: getShadesTemplate(theme, params),
        pink: getShadesTemplate(theme, params)
    };

    for (const [name, scale] of Object.entries(accents)) {
        const hue = params[name];

        const shades = getGlobalAccent(hue, saturation, minLuminance, midLuminance, maxLuminance);
        accents[name] = getThemeScale(scale, shades)
    }

    return accents;
}

export function generateGlobalAccentPalette(theme: 'light'|'dark', params: ImportFormData): SystemAccentList {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {} as SystemAccentList;
    systemAccentList.forEach(name => {
        const hue = params[name];
        accents[name] = getGlobalAccent(hue, saturation, minLuminance, midLuminance, maxLuminance);
    })
    return accents;
}

export function getGlobalAccent(hue: number, saturation: number, minLuminance: number, midLiminance: number, maxLuminance: number, steps = 7) {
    const range = getRangeOfThree({
        hue,
        saturation,
        minLuminance,
        midLiminance,
        maxLuminance
    });
    const shades = getScale(range, steps);
    return shades;
}

function getThemeScale(input: ColorShadesScale, dictionary) {
    let output = {};
    Object.entries(input).forEach(([shadeNumber, token]) => {
        token.$value = resolveGlobalTokenValue(token.$value, dictionary);
        output[shadeNumber] = token;
    })

    return output as ColorShadesScale;
}

/*
    colors: getRangeOfThree()
*/
function getScale(colors: chroma.Color[], count = 9): ColorShadesScale {
    let tokens = {};
    // chroma scale returns array of hex values
    const scale = chroma.scale(colors).colors(count, 'hex');
    scale.forEach((color, index) => {
        tokens[`${index + 1}00`] = {
            $value: color,
            $type: 'color',
            private: true
        }
    });
    return tokens as ColorShadesScale;
}

function getRangeOfThree({ hue, saturation, minLuminance = 0.1, midLiminance = 0.18, maxLuminance = 0.29 }): chroma.Color[] {

    let color1 = chroma.hsl(hue * 0.96, saturation * 1, 0.5)
        .luminance(maxLuminance)

    // this one always 4.5 : 1 contrast ratio
    let color2 = chroma.hsl(hue, saturation * 1, 0.5)
        .luminance(midLiminance)

    let color3 = chroma.hsl(hue * 1.04, saturation * 1, 0.5)
        .luminance(minLuminance)

    return [color1, color2, color3];
}
export { defaultAccentHUEs as defaultAccentColors };

