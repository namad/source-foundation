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
                    "$value": "rgba({200}, 0.20)",
                    "$type": "color",
                    "description": `Subtle semitransparent accent`
                },
                "200": {
                    "$value": "rgba({200}, 0.50)",
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
                    "$value": "rgba({200}, 0.30)",
                    "$type": "color",
                    "description": `Subtle semitransparent accent`
                },
                "200": {
                    "$value": "rgba({200}, 0.60)",
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
        accentMinLuminance: params.accentMinLuminance,
        accentMidLuminance: params.accentMidLuminance,
        accentMaxLuminance: params.accentMaxLuminance,    
    }
    if (theme == 'dark' && themeStore.isCustomDarkMode() === false) {
        colorParams.saturation = params.accentSaturation * 0.85;
        // colorParams.accentMaxLuminance = params.accentMaxLuminance * 0.85;
    }
    return colorParams;
}

export function generateSystemAccentPalette(theme: 'light' | 'dark', themeParams: ImportFormData): SystemAccentList {
    const { saturation, accentMinLuminance, accentMidLuminance, accentMaxLuminance } = getColorParams(theme, themeParams);

    let accents: SystemAccentList = {
        red: getAccentRamp(theme, themeParams),
        amber: getAccentRamp(theme, themeParams),
        brown: getAccentRamp(theme, themeParams),
        green: getAccentRamp(theme, themeParams),
        teal: getAccentRamp(theme, themeParams),
        blue: getAccentRamp(theme, themeParams),
        indigo: getAccentRamp(theme, themeParams),
        violet: getAccentRamp(theme, themeParams),
        purple: getAccentRamp(theme, themeParams),
        pink: getAccentRamp(theme, themeParams)
    };

    for (const [name, scale] of Object.entries(accents)) {
        const hue = themeParams[name];

        const shades = getGlobalAccentRamp(hue, themeParams);
        accents[name] = resolveRampValues(scale, shades)
    }

    return accents;
}

export function generateGlobalAccentPalette(theme: 'light'|'dark', themeParams: ImportFormData): SystemAccentList {
    const { saturation, accentMinLuminance, accentMidLuminance, accentMaxLuminance } = getColorParams(theme, themeParams);
    let accents = {} as SystemAccentList;
    systemAccentList.forEach(name => {
        const hue = themeParams[name];
        accents[name] = getGlobalAccentRamp(hue, themeParams);
    })
    return accents;
}

export function getGlobalAccentRamp(hue: number, themeParams: ImportFormData, steps = 7): ColorRamp {
    const keyShades = getRangeOfThree(hue, themeParams);
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


function getRangeOfThree(hue: number, params: ImportFormData): chroma.Color[] {
    const saturation = params.accentSaturation;
    const {
        accentMinLuminance,
        accentMidLuminance,
        accentMaxLuminance,
        accentHueSpin
    } = params

    const spinPercent = 1 + accentHueSpin / 100;
    const adjustedHUE = 20 / (hue / 360)
    return [
        chroma.hsl(hue + accentHueSpin, saturation * 1.2, 0.5).luminance(accentMaxLuminance),
        chroma.hsl(hue, saturation, 0.5).luminance(accentMidLuminance),
        chroma.hsl(hue + accentHueSpin, saturation * 1.2, 0.5).luminance(accentMinLuminance)
    ];
}

export { defaultAccentHUEs as defaultAccentColors };

