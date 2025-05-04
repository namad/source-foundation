import { defaultSettings, radiiSizeName, spacingSizeName, systemAccentList, typographySizeName } from "./defaults";
import * as radiiTokens from "./radii-tokens";
import * as typescaleTokens from "./typography-tokens";
import * as spacingTokens from "./spacing-tokens";
import chroma from 'chroma-js';
import { camelToTitle } from "./utils/text-to-title-case";
import { getGlobalAccentRamp, getAccentRamp } from "./color-generators/accent-palette-generator";
import { roundOneDigit, roundTwoDigits } from "./utils/round-decimals";
import { getGlobalNeutrals, getShadowColorTokens, getThemeColors, processColorTokenCSSValue, resolveColorTokenValue } from "./color-tokens";
import { parseColorValue } from "./utils/figma-colors";
import { outputHSL } from "./color-generators/swatches-generator";
import { flattenObject } from "./utils/flatten-object";
import { getPresetContentTemplate, getPresets } from "./presets";
import { DesignToken, DesignTokensRaw } from "./import-tokens";
import nouislider, { API } from 'nouislider';
import { SliderComponent } from "./ui/slider";
import { getTokenLibrariesListMarkup } from "./ui/helpers/figma-libraries-selector";
import { sliders } from "./ui/ref/sliders-collection";
import { mainForm } from "./ui/ref/main-form";
import { getReferenceName } from "./utils/token-references";
import { activeModal } from "./ui/helpers/modal";
import { EffectTokenValue, getElevationTokens } from "./effect-tokens";

export type ConfigColors = "red" | "amber" | "brown" | "green" | "teal" | "blue" | "indigo" | "violet" | "purple" | "pink";

export interface SlidersColleciton {
    [key: string]: SliderComponent;
}
export interface SemanticAccentColors {
    primary: ConfigColors;
    info: ConfigColors;
    success: ConfigColors;
    warning: ConfigColors;
    danger: ConfigColors;
}

export interface ImportFormData {
    type: 'IMPORT' | 'RENDER_ACCENTS' | 'RENDER_NEUTRALS';
    theme: 'light' | 'dark';
    hue: number;
    saturation: number;
    distance: number;
    primary: ConfigColors;
    info: ConfigColors;
    success: ConfigColors;
    warning: ConfigColors;
    danger: ConfigColors;
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

    customAccentTextSaturation: boolean;
    accentTextSaturation: null | number;
    accentTextColor: "auto" | "black" | "white";
    textWhiteBrightness: number;
    textBlackBrightness: number;

    createComponentTokens: boolean;
    createColorTokens: boolean;
    createTypographyTokens: boolean;
    createSpacingTokens: boolean;
    createElevationTokens: boolean;
    createRadiiTokens: boolean;
    createGlobalSizeTokens: boolean;
    createOpacityTokens: boolean;

    shadowsStyle: number;
    shadowsColor: number;
}

function isFloatField(name: string): boolean {
    if (
        name === "saturation" ||
        name === "distance" ||
        name == "accentTextSaturation" ||
        name === "accentSaturation" ||
        name === "accentMaxLuminance" ||
        name === "accentMidLuminance" ||
        name === "accentMinLuminance"
    ) {
        return true;
    }

    return false;

}

function isNull(value: any): boolean {
    return value === null;
}

function getValueMap(name: string): string[] {
    switch (name) {
        case 'baseFontSize': {
            return typographySizeName;
        }
        case 'spacing': {
            return spacingSizeName;
        }
        case 'radii': {
            return radiiSizeName;
        }
        case 'primary':
        case 'info':
        case 'success':
        case 'danger':
        case 'warning': {
            return systemAccentList;
        }
    }
}
export function transformValue(name: string, value: any, direction?): string | number {
    let val = typeof value == 'string' ? parseInt(value) : value;
    let valueMap = getValueMap(name);
    
    if(isNull(value) && direction === 'IN') {
        return  "";
    }

    if (isFloatField(name)) {
        if (direction === 'IN') {
            val = parseFloat(value) * 100;
        }
        if (direction === 'OUT') {
            val = val / 100;
        }
    }

    if (isNaN(val)) {
        // this is string value we need to convert to number
        if(valueMap && direction === 'IN') {
            return valueMap.indexOf(value);
        }

        return value || val || "";
    }
    else {
        return valueMap ? valueMap[value] : val;
    }
}

export function collectValues(form) {
    const formElements = form.querySelectorAll('input[name], textarea');

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

    return rawValues;
}

function inputCustomPrimary(element) {
    debugger;
}

export function getFormData(form: HTMLFormElement): ImportFormData {
    let data = collectValues(form) as ImportFormData;

    return {
        type: 'IMPORT',
        ...data
    };
}
let _presetsReady = false;

export function generatePresetsPreview(masterData: ImportFormData) {
    if(_presetsReady === true) {
        return
    }

    const presetsListElement = document.getElementById('presetsList');
    const presets = getPresets();

    presetsListElement.innerHTML = '';

    presets.forEach((data, index) => {
        data = {...defaultSettings, ...data};
        const themeColors = getThemeColors(masterData.theme == 'dark' ? 'darkElevated' : 'lightBase', data);
        const globalNeutrals = getGlobalNeutrals(data);

        const label = document.createElement('label');
        label.classList.add('theme-item');
        label.innerHTML = getPresetContentTemplate(index);
        presetsListElement.appendChild(label);

        generateCSSVars({ ...themeColors, ...globalNeutrals }, label);
        updateValuesDisplay(data, label);
    })

    _presetsReady = true;
}

interface UIDataOptions {
    customDarkMode?: boolean;
}

export function refreshUI(options: LoadDataOptions) {

    const data = options.params;
    if (data === null) throw new Error(`Cannot refresh UI, data is missing`);

    // set colours on neutrals hue & sdaturation sliders
    sliders['hue'].rootElement.style.setProperty('--slider-thumb-color', chroma.hsl(data.hue, data.accentSaturation, 0.5).hex());
    sliders['saturation'].rootElement.style.setProperty('--slider-thumb-color', chroma.hsl(data.hue, data.saturation, 0.5).hex());

    const exportCodeTextarea = document.querySelector('[name=exportCodeTextarea') as HTMLInputElement;
    exportCodeTextarea.value = JSON.stringify(data, null, 4);

    const primaryColorHUE = data.primary
    const shades = getGlobalAccentRamp(
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
    const globalNeutrals = getGlobalNeutrals(data);

    // THEME MODES
    document.body.dataset.theme = data.theme;

    if(options.customDarkMode != undefined) {
        document.body.dataset.customDark = options.customDarkMode === true ? 'true' : 'false';
    }


    generateCSSVars({ ...themeColors, ...globalAccent, ...globalNeutrals });

    generateAccentsPreview(themeColors, data);

    generateCSSVars(radiiTokens[data.radii]);
    generateCSSVars(typescaleTokens.getTypographyTokens(data.baseFontSize, data.typeScale));
    generateCSSVars(spacingTokens.getSpacingTokens(data.verticalSpacing, data.spacing));

    generateBoxShadowsCSS(data, globalNeutrals);

    const darkSurfaceColorRaw = globalNeutrals[`grey-20`].$value as string;
    const darkSurfaceColor = chroma(darkSurfaceColorRaw);
    const textWhiteColor = chroma.hsl(data.hue, data.accentSaturation, data.textWhiteBrightness/100);
    const textBlackColor = chroma.hsl(data.hue, data.accentSaturation, data.textBlackBrightness/100);
    const textAcentColorOnLightRaw = themeColors[`accent/${data.primary}/500`]['$value'] as string;
    const textAcentColorOnLight = chroma(textAcentColorOnLightRaw);
    const textAcentColorOnDarkRaw = themeColors[`accent/${data.primary}/600`]['$value'] as string;
    const textAcentColorOnDark = chroma(textAcentColorOnDarkRaw);

    const extension = {
        textAcentContrastOnLight: roundOneDigit(chroma.contrast(textAcentColorOnLight, textWhiteColor)),
        textAcentContrastOnDark: roundOneDigit(chroma.contrast(textAcentColorOnDark, darkSurfaceColor)),
        textBlackContrast: roundOneDigit(chroma.contrast(chroma(textBlackColor), chroma('#FFFFFF'))),
        textWhiteContrast: roundOneDigit(chroma.contrast(textWhiteColor, darkSurfaceColor)),
        fillBase100: getReferenceName(themeColors['fill/base/100']['$value'] as string).replace('grey-', ''),
        fillBase200: getReferenceName(themeColors['fill/base/200']['$value'] as string).replace('grey-', ''),
        fillBase300: getReferenceName(themeColors['fill/base/300']['$value'] as string).replace('grey-', ''),
        fillBase400: getReferenceName(themeColors['fill/base/400']['$value'] as string).replace('grey-', ''),
        fillBase500: getReferenceName(themeColors['fill/base/500']['$value'] as string).replace('grey-', ''),
        fillBase600: getReferenceName(themeColors['fill/base/600']['$value'] as string).replace('grey-', ''),
    }

    updateValuesDisplay({...data, ...extension});

    generatePresetsPreview(data);

    setCustomAccentTextSaturationSlider(data);

    if(activeModal) {
        activeModal.close()
    }
}

function setCustomAccentTextSaturationSlider(data: ImportFormData) {
    const sliderComponent = sliders["accentTextSaturation"]
    const slider = sliderComponent.slider;

    const accentTextSaturation = transformValue("accentTextSaturation", data.accentTextSaturation, "IN") as number;
    const accentSaturation = transformValue("accentSaturation", data.accentSaturation, "IN") as number;
    const primaryColorName = data.primary
    const saturation = accentTextSaturation <= 0 ? accentSaturation : accentTextSaturation;

    sliders['accentTextSaturation'].rootElement.style.setProperty('--slider-thumb-color', chroma.hsl(data[primaryColorName], saturation/100, 0.5).hex());

    if (data.customAccentTextSaturation == true) {
        slider.set(saturation);
        slider.enable();
    }
    else {
        slider.disable();
    }
}

function generateAccentsPreview(themeColors: {}, data: ImportFormData, context = document.documentElement) {
    const systemAccentShades = getAccentRamp(data.theme, data);

    Object.entries(themeColors).forEach(([name, token]) => {
        if (name.includes(data.primary)) {

            const index = name.split('/')[2];
            const { rgb } = parseColorValue(token['$value']);
            let chromaColor = chroma(rgb);

            const systemToken = systemAccentShades[index]['$value'];
            const resolvedTo = typeof systemToken == "string" ? systemToken.replace(/{/g, "{global.") : 'N/A';

            const colorBoxDiv = context.querySelector(`.color-box.primary-${index}`);

            if(!colorBoxDiv) {
                return
            }

            const popoverTarget = colorBoxDiv.getAttribute('popovertarget');
            const popover = document.getElementById(popoverTarget);
            
            const toolTip = popover.querySelector(`.toolip-body`) as HTMLDivElement;
            const valueEl = colorBoxDiv.querySelector(`.token-value`) as HTMLDivElement;

            const alpha = chromaColor.alpha();

            if (alpha < 1) {
                chromaColor = chroma.mix(chromaColor, 'white', 1 - alpha, 'hsl');
            }

            const contrastWhite = roundOneDigit(
                                            chroma.contrast(
                                                chroma.hsl(data.hue, data.saturation, data.textWhiteBrightness / 100), chromaColor
                                            )
                                        );
            const contrastBlack = roundOneDigit(
                                            chroma.contrast(
                                                chroma.hsl(data.hue, data.saturation, data.textBlackBrightness / 100), chromaColor
                                            )
                                        );
            const hsl = outputHSL(chromaColor).join(" ");
            let contrastWarnLightBg = 'none';
            let contrastWarnDarkBg = 'none';

            if (index == '400' || index == '500') {
                contrastWarnLightBg = contrastWhite < 4.5 ? 'font-bold color-negative' : 'font-bold color-positive';
            }
            if (index == '600') {
                contrastWarnDarkBg = contrastBlack < 4.5 ? 'font-bold color-negative' : 'font-bold color-positive';
            }

            if (index == '300') {
                contrastWarnLightBg = contrastWhite < 3 ? 'font-bold color-negative' : 'font-bold color-positive';
            }

            if (valueEl) {
                valueEl.innerHTML = `${contrastWhite}`;
            }
            if (toolTip) {
                toolTip.innerHTML = `
                    <div class="row hidden flex-row justify-between gap-3">
                        <span class="text-size-xs opacity-70">alias</span>
                        <span class="text-size-xs whitespace-nowrap">${resolvedTo}</span>
                    </div>
                    <div class="row flex flex-row justify-between gap-3">
                        <span class="text-size-xs opacity-70">vs white</span>
                        <span class="text-size-xs whitespace-nowrap ${contrastWarnLightBg}">${contrastWhite} : 1</span>
                    </div>
                    <div class="row flex flex-row justify-between gap-3">
                        <span class="text-size-xs opacity-70">vs black</span>
                        <span class="text-size-xs whitespace-nowrap ${contrastWarnDarkBg}">${contrastBlack} : 1</span>
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

function generateCSSVars(tokens: DesignTokensRaw, context = document.documentElement) {
    Object.entries(tokens).forEach(([name, token]) => {
        const varName = `--${name.replace(/\//g, "-")}`;
        const type = token['$type'];

        if (type == 'number') {
            const varValue = parseInt(token.$value as string);
            context.style.setProperty(varName, `${varValue}px`);
        }

        if (type == 'color') {
            let value = processColorTokenCSSValue(token, tokens);
            context.style.setProperty(varName, value);
        }
    })
}

function generateBoxShadowsCSS(params: ImportFormData, dictionary: DesignTokensRaw) {
    const shadowColors = getShadowColorTokens(params.theme, params);
    const shadowTokens = getElevationTokens(params.shadowsStyle) as DesignTokensRaw;

    generateCSSVars({...shadowColors, ...dictionary});

    Object.entries(shadowTokens).forEach(([name, token]) => {
        const shadows = token.$value as EffectTokenValue[];
        const varName = `--${name.replace(/\//g, "-")}`;

        const cssString = shadows.map((shadowSettings) => {
            const aliasName = getReferenceName(shadowSettings.color);
            const value = `var(--${aliasName.replace(/\./g, "-")})`;            
            return `${shadowSettings.offsetX}px ${shadowSettings.offsetY}px ${shadowSettings.radius}px ${shadowSettings.spread}px ${value}`
        })
        document.documentElement.style.setProperty(varName, cssString.join(', '));
    });

}
interface LoadDataOptions {
    params: ImportFormData,
    tokenLibraries?: any,
    customDarkMode?: boolean,
    colorSystemVersion?: number,
    silent?: boolean
}

export function loadData(options: LoadDataOptions) {
    if(options.tokenLibraries) {
        const tokenLibrariesListMarkup = getTokenLibrariesListMarkup(options.tokenLibraries);
        document.getElementById('sourceLibrariesList').innerHTML = tokenLibrariesListMarkup;
    }

    if(options.customDarkMode === true) {
    }
        
    applyData(options.params)
    refreshUI(options)
}

function applyData(params: ImportFormData, silent = false) {
    params = Object.assign({}, defaultSettings, params);

    const formElements = mainForm.querySelectorAll(`input[name]`);

    formElements.forEach((formEl: HTMLFormElement) => {
        const name = formEl.name;
        const value = params[name]
        const val = transformValue(name, value, "IN");
        if (formEl.type == 'radio') {
            if (formEl.value === value) {
                formEl.checked = true;
            }
        }
        else if (formEl.type == 'checkbox') {
            formEl.checked = value;
        }
        else {
            formEl.value = val;
        }

        if (silent !== true) {
            formEl.dispatchEvent(new Event('input', { 'bubbles': true }));
        }
    });

}
