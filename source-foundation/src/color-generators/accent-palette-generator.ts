import chroma from "chroma-js";
import * as themeStore from '../utils/themes-store';
import { resolveGlobalTokenValue } from "../utils/token-references";
import { ImportFormData } from "../import-ui";
import { defaultAccentHUEs, systemAccentList } from "../defaults";
import { ColorRamp, SystemAccentList } from "../color-tokens";

export function getAccentRamp(theme: 'light' | 'dark', params: ImportFormData): ColorRamp {
    let textSaturationAdjustments = {};
    
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
        red: getAccentRamp(theme, params),
        amber: getAccentRamp(theme, params),
        brown: getAccentRamp(theme, params),
        green: getAccentRamp(theme, params),
        teal: getAccentRamp(theme, params),
        blue: getAccentRamp(theme, params),
        indigo: getAccentRamp(theme, params),
        violet: getAccentRamp(theme, params),
        purple: getAccentRamp(theme, params),
        pink: getAccentRamp(theme, params)
    };

    for (const [name, scale] of Object.entries(accents)) {
        const hue = params[name];

        const shades = getGlobalAccentRamp(hue, saturation, minLuminance, midLuminance, maxLuminance);
        accents[name] = resolveRampValues(scale, shades)
    }

    return accents;
}

export function generateGlobalAccentPalette(theme: 'light'|'dark', params: ImportFormData): SystemAccentList {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {} as SystemAccentList;
    systemAccentList.forEach(name => {
        const hue = params[name];
        accents[name] = getGlobalAccentRamp(hue, saturation, minLuminance, midLuminance, maxLuminance);
    })
    return accents;
}

export function getGlobalAccentRamp(hue: number, saturation: number, minLuminance: number, midLiminance: number, maxLuminance: number, steps = 7): ColorRamp {
    const keyShades = getRangeOfThree({
        hue,
        saturation,
        minLuminance,
        midLiminance,
        maxLuminance
    });
    let colorRamp = {};
    const scale = chroma.scale(keyShades).colors(steps, 'hex');

    scale.forEach((color, index) => {
        colorRamp[`${index + 1}00`] = {
            $value: color,
            $type: 'color',
            private: true
        }
    });

    return colorRamp as ColorRamp;
}

function resolveRampValues(templateRamp: ColorRamp, dictionary) {
    let output = {};
    Object.entries(templateRamp).forEach(([shadeNumber, token]) => {
        token.$value = resolveGlobalTokenValue(token.$value, dictionary);
        output[shadeNumber] = token;
    })

    return output as ColorRamp;
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

