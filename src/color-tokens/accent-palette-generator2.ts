import chroma from "chroma-js";
import { roundTwoDigits } from "../utils/round-two-digits";
import { findTokenReferences, parseReferenceGlobal } from "../utils/token-references";
import { ImportFormData } from "../ui/import";
import { defaultAccentHUEs, systemAccentList } from "../defaults";

interface DesignTokenValue {
    $value: string;
    $type: 'color' | 'number' | 'string' | 'boolean';
}

interface SystemAccentList {
    red: ColorShadesScale;
    amber: ColorShadesScale;
    brown: ColorShadesScale;
    green: ColorShadesScale;
    teal: ColorShadesScale;
    cyan: ColorShadesScale;
    blue: ColorShadesScale;
    indigo: ColorShadesScale;
    violet: ColorShadesScale;
    purple: ColorShadesScale;
    pink: ColorShadesScale;
}

interface ColorShadesScale {
    [key: string]: DesignTokenValue;
}

interface GlobalAccentList {
    [key: string]: ColorShadesScale;
}

function getShadesTemplate(theme): ColorShadesScale {
    if (theme == 'light') {
        return {
            "100": {
                "$value": "rgba({200}, 0.10)",
                "$type": "color"
            },
            "200": {
                "$value": "rgba({200}, 0.20)",
                "$type": "color"
            },
            "300": {
                "$value": "{200}",
                "$type": "color"
            },
            "400": {
                "$value": "{400}",
                "$type": "color"
            },
            "500": {
                "$value": "{500}",
                "$type": "color"
            },
            "600": {
                "$value": "{100}",
                "$type": "color"
            }
        }
    }

    if (theme == 'dark') {
        return {
            "100": {
                "$value": "rgba({200}, 0.20)",
                "$type": "color"
            },
            "200": {
                "$value": "rgba({200}, 0.33)",
                "$type": "color"
            },
            "300": {
                "$value": "{300}",
                "$type": "color"
            },
            "400": {
                "$value": "{400}",
                "$type": "color"
            },
            "500": {
                "$value": "{100}",
                "$type": "color"
            },
            "600": {
                "$value": "{100}",
                "$type": "color"
            }
        }
    }

    debugger;
    throw new Error(`Theme: ${theme} is invalid`);
}

function parseReference(value, dictionary) {
    let references = findTokenReferences(value);
    let result = value;

    references?.forEach(refrence => {
        let name = refrence.replace(/{/g, "");
        name = name.replace(/}/g, "");

        const globalToken = dictionary[name];

        if (globalToken) {
            result = result.replace(references, globalToken.$value);
        }
        else {
            debugger;
            console.warn(`parseReferences() call failed -> cannot find reference for ${value}`);
        }
    })

    return result;
}

function getColorParams(theme, params: ImportFormData) {
    switch (theme) {
        case 'light': {
            return {
                saturation: params.accentSaturation, //0.9 is default value
                minLuminance: 0.1,
                maxLuminance: 0.29
            }
        }
        case 'dark': {
            return {
                saturation: params.accentSaturation * 0.85,
                minLuminance: 0.1,
                maxLuminance: 0.45,
            }
        }
    }
}

export function generateSystemAccentPalette(theme, params: ImportFormData): SystemAccentList {
    const  {  saturation, minLuminance, maxLuminance } = getColorParams(theme, params);

    let accents: SystemAccentList = {
        red: getShadesTemplate(theme),
        amber: getShadesTemplate(theme),
        brown: getShadesTemplate(theme),
        green: getShadesTemplate(theme),
        teal: getShadesTemplate(theme),
        cyan: getShadesTemplate(theme),
        blue: getShadesTemplate(theme),
        indigo: getShadesTemplate(theme),
        violet: getShadesTemplate(theme),
        purple: getShadesTemplate(theme),
        pink: getShadesTemplate(theme)
    };

    for (const [name, scale] of Object.entries(accents)) {
        const hue = params[name];
        const shades = getGlobalAccent(hue, saturation, minLuminance, maxLuminance);
        accents[name] = getThemeScale(scale, shades)
    }

    return accents;
}

export function generateGlobalAccentPalette(theme: string, params: ImportFormData): SystemAccentList {
    const  {  saturation, minLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {} as SystemAccentList;
    systemAccentList.forEach(name => {
        const hue = params[name];
        accents[name] = getGlobalAccent(hue, saturation, minLuminance, 0.9, 15);
    })
    return accents;
}

function getGlobalAccent(hue: number, saturation: number, minLuminance: number, maxLuminance: number, steps = 7) {
    const range = getRangeOfThree({
        hue,
        saturation,
        minLuminance,
        maxLuminance
    });
    const shades = getScale(range, steps);
    return shades;
}

function getThemeScale(input: ColorShadesScale, dictionary: ColorShadesScale) {
    let output: ColorShadesScale = {};
    Object.entries(input).forEach(([shadeNumber, token]) => {
        token.$value = parseReferenceGlobal(token.$value, dictionary);
        output[shadeNumber] = token;
    })

    return output;
}

function getScale(colors, count = 9): ColorShadesScale {
    let tokens: ColorShadesScale = {};
    // chroma scale returns array of hex values
    const scale = chroma.scale(colors).colors(count, 'hex');
    scale.forEach((color, index) => {
        tokens[`${index + 1}00`] = {
            $value: color,
            $type: 'color'
        }
    });
    return tokens;
}

function getRangeOfThree({ hue, saturation, minLuminance = 0.1, maxLuminance = 0.29 }) {

    let color1 = chroma.hsl([hue * 0.96, saturation * 0.95, 0.5])
        .luminance(maxLuminance)

    // this one always 4.5 : 1 contrast ratio
    let color2 = chroma.hsl([hue, saturation * 1, 0.5])
        .luminance(0.18)

    let color3 = chroma.hsl([hue * 1.04, saturation * 0.95, 0.5])
        .luminance(minLuminance)

    return [color1, color2, color3];
}
export { defaultAccentHUEs as defaultAccentColors };

