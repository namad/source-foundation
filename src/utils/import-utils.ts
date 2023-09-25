import { defaultAccentHUEs, radiiSizeName, spacingSizeName, systemAccentList, typographySizeName } from "../defaults";
import * as radii from "../radii-tokens";
import * as typescale from "../typescale-tokens";
import * as spacing from "../spacing-tokens";
import chroma from 'chroma-js';
import { camelToTitle, toTitleCase } from "./text-to-title-case";

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
    radii: string;
    spacing: string;
    singleCollection: boolean;
}

export function transformValue(name: string, value: any): string | number {
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
        case 'accentSaturation': {
            if (val > 1) {
                val = val / 100;
            }
            else if (val === 0) {
                val = parseFloat(value) * 100;
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
                rawValues[fieldName] = transformValue(formEl.name, formEl.value);
            }
            return;
        }

        if (formEl.type == 'checkbox') {
            rawValues[fieldName] = formEl.checked;
            return;
        }

        rawValues[fieldName] = transformValue(formEl.name, formEl.value);
    })

    return rawValues as ImportFormData;
}

export function getFormData(form): ImportFormData {
    const rawValues = collectValues(form);
    return {
        type: 'IMPORT',
        ...rawValues
    };
}


export function generatePreview(form: HTMLFormElement, colorPreviewCard: HTMLDivElement, sliders) {
    let data = getFormData(form);

    for (var a = 1, b = 7; a < b; a++) {
        const colorLight = chroma.hsl(data.hue, data.saturation, 1 - data.distance * a);
        const colorDark = chroma.hsl(data.hue, data.saturation, 0.2 + data.distance * a);

        colorPreviewCard.style.setProperty(`--light-${a}`, colorLight.hex());
        colorPreviewCard.style.setProperty(`--dark-${a}`, colorDark.hex());
    }

    sliders['hue'].rootElement.style.setProperty('--thumb-color', chroma.hsl(data.hue, data.accentSaturation, 0.5).hex());
    sliders['saturation'].rootElement.style.setProperty('--thumb-color', chroma.hsl(data.hue, data.saturation, 0.5).hex());

    const semanticSlidersUpdateMap = [
        ["primary", data.primary],
        ["info", data.info],
        ["success", data.success],
        ["warning", data.warning],
        ["danger", data.danger],
    ]

    Object.entries(defaultAccentHUEs).forEach(([name, hue]) => {
        const sliderValue = data[name];
        const accentColor = chroma.hsl(sliderValue, data.accentSaturation, 0.5).luminance(0.18);
        sliders[name].rootElement.style.setProperty('--thumb-color', accentColor.hex());
    });

    semanticSlidersUpdateMap.forEach(([colorName, accentReference]) => {
        const sliderAccentColorHUE = data[accentReference];
        const sliderAccentColor = chroma.hsl(sliderAccentColorHUE, data.accentSaturation, 0.5).luminance(0.18);

        sliders[colorName].rootElement.style.setProperty('--thumb-color', sliderAccentColor);
        document.documentElement.style.setProperty(`--${colorName}`, sliderAccentColor);

        // update text node to display selected value
        const valueEl = document.querySelector(`.color-box.a-${colorName} > .token-value`) as HTMLDivElement;
        if (valueEl) {
            valueEl.innerHTML = accentReference;
        }
    });

    generateCSSVars(radii[data.radii]);
    generateCSSVars(typescale.getTypograohyTokens(data.baseFontSize, data.typeScale));
    generateCSSVars(spacing[data.spacing]);

    updateValuesDisplay(data);

}

function updateValuesDisplay(data: ImportFormData) {
    Object.entries(data).forEach(([key, value]) => {
        document.querySelectorAll(`[data-value=${key}]`).forEach((el: HTMLElement) => {
            el.innerHTML = camelToTitle(value);
        });
    })
}

function generateCSSVars(tokens = {}) {
    Object.entries(tokens).forEach(([name, value]) => {
        const varName = `--${name.replace(/\//g, "-")}`;
        const type = value['$type'];

        if (type == 'number') {
            const varValue = parseInt(value["$value"]);
            document.documentElement.style.setProperty(varName, `${varValue}px`);
        }
    })
}


export function loadSettings(form: HTMLFormElement, data: ImportFormData) {
    Object.entries(data).forEach(([key, value]) => {
        const formElements = form.querySelectorAll(`[name=${key}]`);
        const val = transformValue(key, value);

        formElements.forEach((formEl: HTMLFormElement) => {
            if (formEl.type == 'radio') {
                if (formEl.value === value) {
                    formEl.checked = true;
                    formEl.dispatchEvent(new Event('input', { 'bubbles': true }));
                }
            }
            else {
                formEl.value = val;
                formEl.dispatchEvent(new Event('input', { 'bubbles': true }));
            }
        });
    });
}

