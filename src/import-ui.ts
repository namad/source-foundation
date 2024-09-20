import { defaultSettings, radiiSizeName, spacingSizeName, systemAccentList, typographySizeName } from "./defaults";
import * as radiiTokens from "./radii-tokens";
import * as typescaleTokens from "./typography-tokens";
import * as spacingTokens from "./spacing-tokens";
import chroma from 'chroma-js';
import { camelToTitle } from "./utils/text-to-title-case";
import { getGlobalAccent, getShadesTemplate } from "./color-generators/accent-palette-generator";
import { roundTwoDigits } from "./utils/round-two-digits";
import { getGlobalNeutrals, getThemeColors, resolveColorTokenValue } from "./color-tokens";
import { parseColorValue } from "./utils/figma-colors";
import { outputHSL } from "./color-generators/swatches-generator";
import { flattenObject } from "./utils/flatten-object";
import { getPresetContentTemplate, getPresets } from "./presets";
import { DesignToken } from "./import-tokens";

export interface ImportFormData {
    type: 'IMPORT' | 'RENDER_ACCENTS' | 'RENDER_NEUTRALS';
    theme: 'light' | 'dark';
    hue: number;
    saturation: number;
    distance: number;
    primary: "red" | "amber" | "brown" | "green" | "teal" | "blue" | "indigo" | "violet" | "purple" | "pink";
    info: "red" | "amber" | "brown" | "green" | "teal" | "blue" | "indigo" | "violet" | "purple" | "pink";
    success: "red" | "amber" | "brown" | "green" | "teal" | "blue" | "indigo" | "violet" | "purple" | "pink";
    warning: "red" | "amber" | "brown" | "green" | "teal" | "blue" | "indigo" | "violet" | "purple" | "pink";
    danger: "red" | "amber" | "brown" | "green" | "teal" | "blue" | "indigo" | "violet" | "purple" | "pink";
    red: number;
    amber: number;
    brown: number;
    green: number;
    teal: number;
    blue: number;
    indigo: number;
    violet: number;
    purple: number;
    pink: number;
    baseFontSize: "compact" | "base" | "large";
    typeScale: "majorThird" | "minorThird" | "majorSecond";
    createStyles: boolean;
    accentSaturation: number;
    accentMinLuminance: number;
    accentMidLuminance: number;
    accentMaxLuminance: number;
    radii: "compact" | "base" | "large";
    spacing: "compact" | "base" | "large" | "touch";
    verticalSpacing: "even" | "uneven";
    singleCollection: boolean;

    createColorTokens: boolean;
    createTypographyTokens: boolean;
    createSpacingTokens: boolean;
    createElevationTokens: boolean;
    createRadiiTokens: boolean;
    createGlobalSizeTokens: boolean;
    createOpacityTokens    : boolean;
}

export function transformValue(name: string, value: any, direction?): string | number {
    let val = parseInt(value);
    let valueMap;

    switch (name) {
        case 'customPrimaryColor': {
            val = value;
            break;
        }
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

    if (isNaN(val)) {
        // this is string value we need to convert to number
        return valueMap && direction === 'IN' ? valueMap.indexOf(value) : value;
    }
    else {
        return valueMap ? valueMap[value] : val;
    }
}

export function collectValues(form): ImportFormData {
    const formElements = form.querySelectorAll('input[name]');

    let rawValues = {};

    formElements.forEach((formEl: HTMLFormElement) => {
        const fieldName = formEl.name;

        if (formEl.type == 'radio') {
            if (formEl.checked) {
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

function inputCustomPrimary(element) {
    debugger;
}

export function getFormData(form): ImportFormData {
    let data = collectValues(form);

    // if (data.preferedPrimaryColor === 'custom') {
    //     const customPrimaryValue = data.customPrimaryColor.replace('#', '');

    //     if (customPrimaryValue.length) {
    //         const customPrimaryColor = chroma(`#${customPrimaryValue}`);
    //         const customAccentLuminanceMid = customPrimaryColor.luminance();
    //         const customAccentHUE = customPrimaryColor.get('hsl.h');

    //         data.primary = data.preferedPrimaryColor; // set to custom

    //         data.custom = customAccentHUE;
    //         data.accentMinLuminance = customAccentLuminanceMid * 0.55;
    //         data.accentMidLuminance = customAccentLuminanceMid;
    //         data.accentMaxLuminance = customAccentLuminanceMid * 3.33;

    //         loadSettings(form, data);

    //         return null;

    //     }

    // }

    return {
        type: 'IMPORT',
        ...data
    };
}

export function generateMiniPreview(masterData: ImportFormData) {
    const presetsListElement = document.getElementById('presetsList');
    const presets = getPresets();

    presetsListElement.innerHTML = '';

    presets.forEach((data, index) => {
        const themeColors = getThemeColors(masterData.theme == 'dark' ? 'darkElevated' : 'lightBase', data);

        const label = document.createElement('label');
        label.classList.add('theme-item');
        label.innerHTML = getPresetContentTemplate(index);
        presetsListElement.appendChild(label);

        generateCSSVars({ ...themeColors }, label);
        updateValuesDisplay(data, label);
    })
}

export function generatePreview(form: HTMLFormElement, sliders) {
    let data = getFormData(form);

    if (data === null) return;

    // set colours on neutrals hue & sdaturation sliders
    sliders['hue'].rootElement.style.setProperty('--thumb-color', chroma.hsl(data.hue, data.accentSaturation, 0.5).hex());
    sliders['saturation'].rootElement.style.setProperty('--thumb-color', chroma.hsl(data.hue, data.saturation, 0.5).hex());

    const exportCodeTextarea = document.querySelector('[name=exportCodeTextarea') as HTMLInputElement;
    exportCodeTextarea.value = JSON.stringify(data, null, 2);

    const primaryColorHUE = data.primary
    const shades = getGlobalAccent(
        data[primaryColorHUE],
        data.accentSaturation,
        data.accentMinLuminance,
        data.accentMidLuminance,
        data.accentMaxLuminance
    );
    const globalAccent = flattenObject({
        'global-accent': shades
    })

    const themeColors = getThemeColors(data.theme == 'dark' ? 'darkElevated' : 'lightBase', data);

    generateCSSVars({ ...themeColors, ...globalAccent });

    generateAccentsPreview(themeColors, data);

    generateCSSVars(radiiTokens[data.radii]);
    generateCSSVars(typescaleTokens.getTypographyTokens(data.baseFontSize, data.typeScale));
    generateCSSVars(spacingTokens.getSpacingTokens(data.verticalSpacing, data.spacing));

    updateValuesDisplay(data, form);

    generateMiniPreview(data);

    parent.postMessage({
        pluginMessage: { type: 'RESIZE', params: data }
    }, "*");
}

function generateAccentsPreview(themeColors: {}, data: ImportFormData, context = document.documentElement) {
    const systemAccentShades = getShadesTemplate(data.theme, data.primary);

    Object.entries(themeColors).forEach(([name, token]) => {
        if (name.includes(data.primary)) {

            const index = name.split('/')[2];
            const { rgb } = parseColorValue(token['$value']);
            let chromaColor = chroma(rgb);

            const systemToken = systemAccentShades[index]['$value'];
            const resolvedTo = typeof systemToken == "string" ? systemToken.replace(/{/g, "{global.") : 'N/A';

            const toolTip = context.querySelector(`.color-box.primary-${index} .toolip-body`) as HTMLDivElement;
            const valueEl = context.querySelector(`.color-box.primary-${index} .token-value`) as HTMLDivElement;
            const alpha = chromaColor.alpha();

            if (alpha < 1) {
                chromaColor = chroma.mix(chromaColor, 'white', 1 - alpha, 'hsl');
            }

            const contrast1 = roundTwoDigits(chroma.contrast(chroma.hsl([0, 0, 1]), chromaColor));
            const contrast2 = roundTwoDigits(chroma.contrast(chroma.hsl([0, 0, 0.22]), chromaColor));
            const hsl = outputHSL(chromaColor).join(", ");
            let contrastWarn = 'none';

            if (index == '400' || index == '500') {
                contrastWarn = contrast1 < 4.5 ? 'color-negative-contrast' : 'color-positive-contrast';
            }

            if (index == '300') {
                contrastWarn = contrast1 < 3 ? 'color-negative-contrast' : 'color-positive-contrast';
            }

            if (valueEl) {
                valueEl.innerHTML = `${contrast1}`;
            }
            if (toolTip) {
                toolTip.innerHTML = `
                    <div class="row flex flex-row justify-between gap-3">
                        <span class="text-size-xs opacity-70">alias</span>
                        <span class="text-size-xs whitespace-nowrap">${resolvedTo}</span>
                    </div>
                    <div class="row flex flex-row justify-between gap-3">
                        <span class="text-size-xs opacity-70">vs white</span>
                        <span class="text-size-xs whitespace-nowrap ${contrastWarn}">${contrast1} : 1</span>
                    </div>
                    <div class="row flex flex-row justify-between gap-3">
                        <span class="text-size-xs opacity-70">vs black</span>
                        <span class="text-size-xs whitespace-nowrap">${contrast2} : 1</span>
                    </div>
                    <div class="row flex flex-row justify-between gap-3">
                        <span class="text-size-xs opacity-70">hsl</span>
                        <span class="text-size-xs whitespace-nowrap">${hsl}</span>
                    </div>`;
            }
        }
    });
}

function updateValuesDisplay(data: ImportFormData, context = document.documentElement) {
    context.querySelectorAll(`[data-value]`).forEach((el: HTMLElement) => {
        const name = el.dataset.value;
        const value = data[name];
        const displayValue = transformValue(name, value, el.dataset.transform || 'OUT');
        el.innerHTML = camelToTitle(`${displayValue}`);
    })
}

function generateCSSVars(tokens = {}, context = document.documentElement) {
    Object.entries(tokens).forEach(([name, token]) => {
        const varName = `--${name.replace(/\//g, "-")}`;
        const type = token['$type'];

        if (type == 'number') {
            const varValue = parseInt(token["$value"]);
            context.style.setProperty(varName, `${varValue}px`);
        }

        if (type == 'color') {
            const rgb = resolveColorTokenValue(token as DesignToken, { ...tokens, ...getGlobalNeutrals() }, 'rgb');
            context.style.setProperty(varName, `${rgb}`);
        }
    })
}


export function loadSettings(form: HTMLFormElement, data: ImportFormData, silent = false) {

    data = Object.assign({}, defaultSettings, data);

    const formElements = form.querySelectorAll(`input[name]`);

    formElements.forEach((formEl: HTMLFormElement) => {
        const name = formEl.name;
        const value = data[name]
        const val = transformValue(name, value, "IN");
        if (formEl.type == 'radio') {
            if (formEl.value === value) {
                formEl.checked = true;
            }
        }
        else if (formEl.type == 'checkbox') {
            formEl.checked == value;
        }
        else {
            formEl.value = val;
        }

        if (silent !== true) {
            formEl.dispatchEvent(new Event('input', { 'bubbles': true }));
        }
    });
}
