import { defaultAccentHUEs, radiiSizeName, spacingSizeName, systemAccentList, typographySizeName } from "../defaults";
import * as radii from "../radii-tokens";
import * as typescale from "../typescale-tokens";
import * as spacing from "../spacing-tokens";
import chroma from 'chroma-js';
import { camelToTitle, toTitleCase } from "./text-to-title-case";
import { getGlobalAccent } from "../color-tokens/accent-palette-generator";
import { roundTwoDigits } from "./round-two-digits";
import { getThemeColors } from "../color-tokens";
import { convertToFigmaColor, parseColor } from "./figma-colors";
import { outputHSL } from "../color-tokens/swatches-generator";
import { DesignToken } from "../main";

export interface ImportFormData {
    type: 'IMPORT' | 'RENDER_ACCENTS' | 'RENDER_NEUTRALS';
    hue: number;
    saturation: number;
    distance: number;
    primary: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
    red: number;
    amber: number;
    brown: number;
    green: number;
    teal: number;
    cyan: number;
    blue: number;
    indigo: number;
    violet: number;
    purple: number;
    pink: number;
    baseFontSize: string;
    typeScale: string;
    createStyles: boolean;
    accentSaturation: number;
    accentMinLuminance: number;
    accentMidLuminance: number;
    accentMaxLuminance: number;
    radii: string;
    spacing: string;
    singleCollection: boolean;
}

export function transformValue(name: string, value: any, direction?: 'IN' | 'OUT'): string | number {
    let val = parseInt(value);
    let valueMap;

    switch(name) {
        case 'baseFontSize': {
            valueMap = typographySizeName;
            break;
        }
        case 'spacing': {
            valueMap = spacingSizeName;
            break;
        }
        case 'radii': {
            valueMap = radiiSizeName;
            break;
        }
        case 'primary':
        case 'info':
        case 'success':
        case 'danger':
        case 'warning': {
            valueMap = systemAccentList;
            break;        
        }
        case 'saturation':
        case 'distance':
        case 'accentSaturation': 
        case 'accentMaxLuminance':
        case 'accentMidLuminance':
        case 'accentMinLuminance': {
            if (direction === 'IN') {
                val = parseFloat(value) * 100;
            }
            if (direction === 'OUT') {
                val = val / 100;
            }
            break;        
        }
    }

    if(isNaN(val)) {
        // this is string value we need to convert to number
        return valueMap ? valueMap.indexOf(value) : value;
    }
    else {
        return valueMap ? valueMap[value] : val;
    }
}

function collectValues(form): ImportFormData {
    const formElements = form.querySelectorAll('input[name]');

    let rawValues = {};

    formElements.forEach((formEl: HTMLFormElement) => {
        const fieldName = formEl.name;

        if (formEl.type == 'radio') {
            if(formEl.checked) {
                rawValues[fieldName] = transformValue(formEl.name, formEl.value, "OUT");
            }
            return;
        }

        if (formEl.type == 'checkbox') {
            rawValues[fieldName] = formEl.checked;
            return;
        }

        rawValues[fieldName] = transformValue(formEl.name, formEl.value, "OUT");
    })

    return rawValues as ImportFormData;
}

export function getFormData(form): ImportFormData {
    return {
        type: 'IMPORT',
        ...collectValues(form)
    };
}


export function generatePreview(form: HTMLFormElement, colorPreviewCard: HTMLDivElement, sliders) {
    let data = getFormData(form);

    // render neutral colours preview
    // for (var a = 1, b = 7; a < b; a++) {
    //     const colorLight = chroma.hsl(data.hue, data.saturation, 1 - data.distance * a);
    //     const colorDark = chroma.hsl(data.hue, data.saturation, 0.2 + data.distance * a);

    //     colorPreviewCard.style.setProperty(`--light-${a}`, colorLight.hex());
    //     colorPreviewCard.style.setProperty(`--dark-${a}`, colorDark.hex());
    // }

    // set colours on neutrals hue & sdaturation sliders
    sliders['hue'].rootElement.style.setProperty('--thumb-color', chroma.hsl(data.hue, data.accentSaturation, 0.5).hex());
    sliders['saturation'].rootElement.style.setProperty('--thumb-color', chroma.hsl(data.hue, data.saturation, 0.5).hex());

    // const semanticSlidersUpdateMap = [
    //     ["primary", data.primary],
    //     ["info", data.info],
    //     ["success", data.success],
    //     ["warning", data.warning],
    //     ["danger", data.danger],
    // ]

    // Object.entries(defaultAccentHUEs).forEach(([name, hue]) => {
    //     // const sliderValue = data[name];
    //     // const accentColor = chroma.hsl(sliderValue, data.accentSaturation, 0.5).luminance(0.18);
    //     // sliders[name].rootElement.style.setProperty('--thumb-color', accentColor.hex());
    // });

    // semanticSlidersUpdateMap.forEach(([colorName, accentReference]) => {
    //     const sliderAccentColorHUE = data[accentReference];
    //     const sliderAccentColor = chroma.hsl(sliderAccentColorHUE, data.accentSaturation, 0.5).luminance(0.18);

    //     sliders[colorName].rootElement.style.setProperty('--thumb-color', sliderAccentColor);
    //     document.documentElement.style.setProperty(`--${colorName}`, sliderAccentColor);
    //     document.documentElement.style.setProperty(`--${colorName}-text`, sliderAccentColor.luminance(0.3));

    //     // update text node to display selected value
    //     const valueEl = document.querySelector(`.color-box.a-${colorName} > .token-value`) as HTMLDivElement;
    //     if (valueEl) {
    //         valueEl.innerHTML = accentReference;
    //     }
    // });



    const primaryColorHUE = data.primary
    const shades = getGlobalAccent(
                        data[primaryColorHUE],
                        data.accentSaturation,
                        data.accentMinLuminance,
                        data.accentMidLuminance,
                        data.accentMaxLuminance
                    )

    const darkThemeMq = false; //window.matchMedia("(prefers-color-scheme: dark)");
    const themeColors = getThemeColors(darkThemeMq ? 'darkBase' : 'lightBase', data);

    debugger;

    generateCSSVars(themeColors);

    Object.entries(themeColors).forEach(([name, token]) => {
        if (name.includes(data.primary)) {

            console.log(`input color: ${name}, value: ${token['$value']}`);

            const index = name.split('/')[2];
            const { gl, rgb } = convertToFigmaColor(token['$value']);
            const chromaColor = chroma.gl(gl.r, gl.g, gl.b, gl.a);

            console.log(`converted ${chromaColor.css()}`);

            document.documentElement.style.setProperty(`--lum-${index}`, rgb);

            const toolTip = document.querySelector(`.color-box.lum-${index} .toolip-body`) as HTMLDivElement;
            const valueEl = document.querySelector(`.color-box.lum-${index} .token-value`) as HTMLDivElement;
            const contrast1 = roundTwoDigits(chroma.contrast("white", chromaColor.css()));
            const contrast2 = roundTwoDigits(chroma.contrast(chroma.hsl([0, 0, 0.22]), chromaColor.css()));
            const hsl = outputHSL(chromaColor).join(", ");
            if (valueEl) {
                valueEl.innerHTML = `${contrast1}`;
            }
            if (toolTip) {
                toolTip.innerHTML = `
                    <div class="row flex flex-row justify-between">
                        <span class="text-size-xs opacity-70">vs white</span>
                        <span class="text-size-xs">${contrast1}</span>
                    </div>
                    <div class="row flex flex-row justify-between">
                        <span class="text-size-xs opacity-70">vs black</span>
                        <span class="text-size-xs">${contrast2}</span>
                    </div>
                    <div class="row flex flex-row justify-between">
                        <span class="text-size-xs opacity-70">hsl</span>
                        <span class="text-size-xs">${hsl}</span>
                    </div>`
            }
        }
    });

    // Object.entries(shades).forEach(([name, token], index) => {
    //     document.documentElement.style.setProperty(`--lum-${name}`, token.$value);
    //     const colorBox = document.querySelector(`.color-box.lum-${name}`) as HTMLDivElement;
    //     const valueEl = document.querySelector(`.color-box.lum-${name} .token-value`) as HTMLDivElement;
    //     const contrast = roundTwoDigits(chroma.contrast("white", token.$value))
    //     if (valueEl) {
    //         valueEl.innerHTML = `${contrast}`;
    //     }        
    // })

    generateCSSVars(radii[data.radii]);
    generateCSSVars(typescale.getTypograohyTokens(data.baseFontSize, data.typeScale));
    generateCSSVars(spacing[data.spacing]);

    updateValuesDisplay(data);

}

function updateValuesDisplay(data: ImportFormData) {
    Object.entries(data).forEach(([key, value]) => {
        document.querySelectorAll(`[data-value=${key}]`).forEach((el: HTMLElement) => {
            el.innerHTML = camelToTitle(`${value}`);
        });
    })
}

function generateCSSVars(tokens = {}) {
    Object.entries(tokens).forEach(([name, token]) => {
        const varName = `--${name.replace(/\//g, "-")}`;
        const type = token['$type'];

        if (type == 'number') {
            const varValue = parseInt(token["$value"]);
            document.documentElement.style.setProperty(varName, `${varValue}px`);
        }

        if (type == 'color') {
            const rgb = parseColor(token as DesignToken, tokens, 'rgb');
            debugger;
            document.documentElement.style.setProperty(varName, `${rgb}`);
        }
    })
}


export function loadSettings(form: HTMLFormElement, data: ImportFormData, silent = false) {
    Object.entries(data).forEach(([key, value]) => {
        const formElements = form.querySelectorAll(`[name=${key}]`);
        const val = transformValue(key, value, "IN");

        formElements.forEach((formEl: HTMLFormElement) => {
            if (formEl.type == 'radio') {
                if (formEl.value === value) {
                    formEl.checked = true;
                }
            }
            else {
                formEl.value = val;
            }

            if (silent !== true) {
                formEl.dispatchEvent(new Event('input', { 'bubbles': true }));
            }
        });
    });
}
