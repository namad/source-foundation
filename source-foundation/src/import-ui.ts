import { defaultSettings, radiiSizeName, spacingSizeName, systemAccentList, typographySizeName } from "./defaults";
import * as radiiTokens from "./radii-tokens";
import * as typescaleTokens from "./typography-tokens";
import * as spacingTokens from "./spacing-tokens";
import chroma from 'chroma-js';
import { camelToTitle } from "./utils/text-to-title-case";
import { getGlobalAccentRamp, getAccentRamp, generateSystemAccentPalette, generateGlobalAccentPalette } from "./color-generators/accent-palette-generator";
import { roundOneDigit, roundTwoDigits } from "./utils/round-decimals";
import { ColorRamp, getGlobalNeutrals, getShadowColorTokens, getThemeColors, processColorTokenCSSValue, resolveColorTokenValue } from "./color-tokens";
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
import { findTokenReferences, getReferenceName } from "./utils/token-references";
import { activeModal } from "./ui/helpers/modal";
import { getElevationTokens } from "./effect-tokens";
import * as themeStore from './utils/themes-store';
import { delayAsync } from "./utils/delay-async";

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

    accentSaturation: number;
    accentMinLuminance: number;
    accentMidLuminance: number;
    accentMaxLuminance: number;
    accentHueSpin: number;

    radii: "compact" | "base" | "large" | "x-large";
    spacing: "compact" | "base" | "large" | "touch";
    verticalSpacing: "even" | "uneven";
    singleCollection: boolean;

    customAccentTextSaturation: boolean;
    accentTextSaturation: null | number;
    accentTextColor: "auto" | "black" | "white";
    textWhiteBrightness: number;
    textBlackBrightness: number;

    createStyles: boolean;
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
    shadowsSpread: number;
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

    if (isNull(value) && direction === 'IN') {
        return "";
    }

    if (isFloatField(name)) {
        if (direction === 'IN') {
            val = roundTwoDigits(parseFloat(value) * 100);
        }
        if (direction === 'OUT') {
            val = roundTwoDigits(val / 100);
        }
    }

    if (isNaN(val)) {
        // this is string value we need to convert to number
        if (valueMap && direction === 'IN') {
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
    if (_presetsReady === true) {
        return
    }

    const presetsListElement = document.getElementById('presetsList');
    const presets = getPresets();

    presetsListElement.innerHTML = '';

    presets.forEach((data, index) => {
        data = { ...defaultSettings, ...data };
        const themeColors = getThemeColors(masterData.theme == 'dark' ? 'darkElevated' : 'lightBase', data);
        const globalNeutrals = getGlobalNeutrals(data);
        const label = getPresetContentTemplate(index, presetsListElement) as HTMLElement;

        generateCSSVars({ ...themeColors, ...globalNeutrals }, label);
        updateValuesDisplay(data, label);
    })

    _presetsReady = true;
}

interface UIDataOptions {
    customDarkMode?: boolean;
}

let _previousData;

const fieldsToIgnore = [
    'createComponentTokens',
    'createColorTokens',
    'createTypographyTokens',
    'createSpacingTokens',
    'createElevationTokens',
    'createRadiiTokens',
    'createGlobalSizeTokens',
    'createOpacityTokens'
]

const fieldsAccent = [
    'primary',
    'info',
    'success',
    'warning',
    'danger',
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
    'accentMinLuminance',
    'accentMidLuminance',
    'accentMaxLuminance',
    'accentHueSpin',
    'customAccentTextSaturation'
]

const fieldsNeutral = [
    'theme',
    'hue',
    'saturation',
    'distance',
    'accentTextSaturation',
    'accentTextColor',
    'textWhiteBrightness',
    'textBlackBrightness',
]

const fieldsSpacing = [
    'spacing',
    'verticalSpacing'
]
const fieldsRadii = [
    'radii'
]
const fieldsTypeScale = [
    'baseFontSize',
    'typeScale',
]

const fieldsShadow = [
    'shadowsStyle',
    'shadowsColor',
    'shadowsSpread',
]

function getDiff(dataNew: ImportFormData, dataOld: ImportFormData) {
    if (dataOld == undefined) {
        return [
            ...fieldsAccent,
            ...fieldsNeutral,
            ...fieldsSpacing,
            ...fieldsRadii,
            ...fieldsTypeScale,
            ...fieldsShadow,
        ];
    }
    return Object.keys(dataNew).filter(paramName => dataNew[paramName] !== dataOld[paramName]);
}

function getIntersection(source: string[], destination: string[]): string[] {
    return source.filter(value => destination.includes(value))
}
function isUpdatePrimary(diff) {
    return diff.filter(value => 'primary')
}
function isUpdateAccents(diff) {
    return getIntersection(fieldsAccent, diff).length > 0;
}
function isUpdateNeutrals(diff) {
    return getIntersection(fieldsNeutral, diff).length > 0;
}
function isUpdateSpacing(diff) {

    return getIntersection(fieldsSpacing, diff).length > 0;
}
function isUpdateRadii(diff) {
    return getIntersection(fieldsRadii, diff).length > 0;
}
function isUpdateTypescale(diff) {
    return getIntersection(fieldsTypeScale, diff).length > 0;
}
function isUpdateShadows(diff) {
    return getIntersection(fieldsShadow, diff).length > 0;
}

export function refreshUI(options: LoadDataOptions) {

    const data = options.params;
    const diff = getDiff(data, _previousData);

    console.log('refreshUI', diff)

    _previousData = options.params;

    if (data === null) throw new Error(`Cannot refresh UI, data is missing`);

    // set colours on neutrals hue & sdaturation sliders
    if (isUpdateNeutrals(diff)) {
        document.querySelectorAll('[data-slider-component=hue]').forEach((el: HTMLElement) => {
            el.style.setProperty('--slider-thumb-color', chroma.hsl(data.hue, data.accentSaturation, 0.5).hex());
        })
        document.querySelectorAll('[data-slider-component=saturation]').forEach((el: HTMLElement) => {
            el.style.setProperty('--slider-thumb-color', chroma.hsl(data.hue, data.saturation, 0.5).hex());
        })
    }

    const primaryColorHUE = data.primary
    const globalAccentRamp = getGlobalAccentRamp(data[primaryColorHUE], data);
    const globalAccent = flattenObject({
        'global-accent': globalAccentRamp
    })

    const themeColors = getThemeColors(data.theme == 'dark' ? 'darkElevated' : 'lightBase', data);
    const globalNeutrals = getGlobalNeutrals(data);

    // THEME MODES
    document.body.dataset.theme = data.theme;
    document.body.dataset.primary = data.primary;

    if (options.customDarkMode != undefined) {
        document.body.dataset.customDark = options.customDarkMode === true ? 'true' : 'false';
    }

    if (options.colorSystemVersion) {
        document.body.dataset.colorSystemVersion = `version-${options.colorSystemVersion}`;
    }

    if (isUpdateNeutrals(diff) || isUpdateAccents(diff)) {
        generateCSSVars({ ...themeColors, ...globalAccent, ...globalNeutrals });

        const globalAccents = flattenObject({
            'global-accent' : generateGlobalAccentPalette(data)
        })
        generateCSSVars(globalAccents, document.getElementById('globalAccentsModal'));
    }

    if (isUpdateAccents(diff)) {
        generateAccentsPreview(themeColors, data);
    }

    isUpdateRadii(diff) && generateCSSVars(radiiTokens[data.radii]);
    isUpdateTypescale(diff) && generateCSSVars(typescaleTokens.getTypographyTokens(data.baseFontSize, data.typeScale));
    isUpdateSpacing(diff) && generateCSSVars(spacingTokens.getSpacingTokens(data.verticalSpacing, data.spacing));
    isUpdateShadows(diff) && generateBoxShadowsCSS(data, globalNeutrals);

    const extension = {
        ...calcContrastRatios({ data, themeColors, globalNeutrals, globalAccent }),
        ...calcGlobalAccentContrastRatios(data, globalNeutrals, globalAccentRamp),
        primaryHUE: data[data.primary],
        fillBase100: getReferenceName(themeColors['fill/base/100']['$value'] as string).replace('grey-', ''),
        fillBase200: getReferenceName(themeColors['fill/base/200']['$value'] as string).replace('grey-', ''),
        fillBase300: getReferenceName(themeColors['fill/base/300']['$value'] as string).replace('grey-', ''),
        fillBase400: getReferenceName(themeColors['fill/base/400']['$value'] as string).replace('grey-', ''),
        fillBase500: getReferenceName(themeColors['fill/base/500']['$value'] as string).replace('grey-', ''),
        fillBase600: getReferenceName(themeColors['fill/base/600']['$value'] as string).replace('grey-', ''),
    }

    updateValuesDisplay({ ...data, ...extension });

    setCustomAccentTextSaturationSlider(data);

    if (activeModal) {
        activeModal.close()
    }
}

function calcGlobalAccentContrastRatios(data: ImportFormData, globalNeutrals: DesignTokensRaw, globalAccentRamp: ColorRamp) {
    let result = {};
    const whiteTextColor = chroma.hsl(data.hue, data.saturation, data.textWhiteBrightness / 100);
    const blackTextColor = chroma.hsl(data.hue, data.saturation, data.textBlackBrightness / 100);

    Object.entries(globalAccentRamp).forEach(([index, token]) => {
        const accentColor = chroma(token.$value);
        result[`whiteOn${index}`] = roundOneDigit(chroma.contrast(accentColor, whiteTextColor));
        result[`blackOn${index}`] = roundOneDigit(chroma.contrast(accentColor, blackTextColor));

    })
    return result
}

function calcContrastRatios({ data, themeColors, globalNeutrals, globalAccent }) {
    const darkSurfaceColorRaw = globalNeutrals[`grey-20`].$value as string;
    const darkSurfaceColor = chroma(darkSurfaceColorRaw);
    const textWhiteColor = chroma.hsl(data.hue, data.accentSaturation, data.textWhiteBrightness / 100);
    const textBlackColor = chroma.hsl(data.hue, data.accentSaturation, data.textBlackBrightness / 100);
    const textAccentColorOnLightRaw = themeColors[`accent/${data.primary}/500`]['$value'] as string;
    const textAccentColorOnLight = chroma(textAccentColorOnLightRaw);
    const textAccentColorOnDarkRaw = themeColors[`accent/${data.primary}/600`]['$value'] as string;
    const textAccentColorOnDark = chroma(textAccentColorOnDarkRaw);

    const baseAccentColorRaw = themeColors[`accent/${data.primary}/400`]['$value'] as string;
    const baseAccentColor = chroma(baseAccentColorRaw);
    const textOnAccentColorRaw = resolveColorTokenValue(themeColors[`text/accent/600`] as DesignToken, { ...themeColors, ...globalAccent, ...globalNeutrals }, 'hsl');
    const textOnAccentColor = chroma(textOnAccentColorRaw);
    const textOnAccentContrast = roundOneDigit(chroma.contrast(baseAccentColor, textOnAccentColor));

    const aliases = themeColors[`text/accent/600`]['$value'];
    const accentTextColor = findTokenReferences(aliases).map(ref => getReferenceName(ref)).pop().match(/white|black/g).pop();

    return {
        accentTextColor,
        textOnAccentContrast,
        textAccentContrastOnLight: roundOneDigit(chroma.contrast(textAccentColorOnLight, textWhiteColor)),
        textAccentContrastOnDark: roundOneDigit(chroma.contrast(textAccentColorOnDark, darkSurfaceColor)),
        textBlackContrast: roundOneDigit(chroma.contrast(chroma(textBlackColor), chroma('#FFFFFF'))),
        textWhiteContrast: roundOneDigit(chroma.contrast(textWhiteColor, darkSurfaceColor)),
    }
}
function setCustomAccentTextSaturationSlider(data: ImportFormData) {
    const accentTextSaturation = transformValue("accentTextSaturation", data.accentTextSaturation, "IN") as number;
    const accentSaturation = transformValue("accentSaturation", data.accentSaturation, "IN") as number;
    const primaryColorName = data.primary
    const saturation = accentTextSaturation <= 0 ? accentSaturation : accentTextSaturation;

    document.querySelectorAll('[data-slider-component=accentTextSaturation] .noui-slider').forEach((el: HTMLElement) => {
        el.style.setProperty('--slider-thumb-color', chroma.hsl(data[primaryColorName], saturation / 100, 0.5).hex());

        const slider = el["noUiSlider"];

        if (data.customAccentTextSaturation == true) {
            slider.set(saturation);
            slider.enable();
        }
        else {
            slider.disable();
        }
    })

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

            if (!colorBoxDiv) {
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

function updateValuesDisplay(data, context = document.documentElement) {
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
            context.style.setProperty(varName, `${token.$value}px`);
        }

        if (type == 'color') {
            let value = processColorTokenCSSValue(token, tokens);
            context.style.setProperty(varName, value);
        }
    })
}

function generateBoxShadowsCSS(params: ImportFormData, dictionary: DesignTokensRaw) {
    const shadowColors = getShadowColorTokens(params.theme, params);
    const shadowTokens = getElevationTokens(params);

    generateCSSVars({ ...shadowColors, ...dictionary });

    Object.entries(shadowTokens).forEach(([name, token]) => {
        if (token.$type == 'effect') {
            const shadows = token.$value;
            const varName = `--${name.replace(/\//g, "-")}`;

            const cssString = shadows.map((shadowSettings) => {
                const aliasName = getReferenceName(shadowSettings.color);
                const value = `var(--${aliasName.replace(/\./g, "-")})`;
                return `${shadowSettings.offsetX}px ${shadowSettings.offsetY}px ${shadowSettings.radius}px ${shadowSettings.spread}px ${value}`
            })
            document.documentElement.style.setProperty(varName, cssString.join(', '));
        }
    });

}
export interface LoadDataOptions {
    params: ImportFormData,
    tokenLibraries?: any,
    customDarkMode?: boolean,
    colorSystemVersion?: number,
    silent?: boolean,
    preset?: ImportFormData[]
}

export function loadData(options: LoadDataOptions) {
    if (options.tokenLibraries) {
        const tokenLibrariesListMarkup = getTokenLibrariesListMarkup(options.tokenLibraries);
        document.getElementById('sourceLibrariesList').innerHTML = tokenLibrariesListMarkup;
    }

    if (options.customDarkMode === true) {
    }

    applyData(options.params);
    refreshUI(options);
    generatePresetsPreview(options.params);

    window.setTimeout(() => {
        mainForm.classList.remove('loading');
    }, 200)
}

function applyData(params: ImportFormData, silent = false) {
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
            formEl.dispatchEvent(new Event('update', { 'bubbles': true }));
        }
    });

}
