import "./utils.css";
import "./styles.css";

import chroma from 'chroma-js';
import { initSlider } from "./slider";
import { toTitleCase } from "../utils/text-to-title-case";
import { generateSystemAccentPalette } from "../color-tokens/accent-palette-generator2";
import { defaultAccentHUEs, radiiSizeName, radiiSizeValues, spacingSizeName, systemAccentList, typographySizeName, typographySizeValues } from "../defaults";
import * as radii from "../radii-tokens";
import * as typescale from "../typescale-tokens";
import * as spacing from "../spacing-tokens";

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
    typeScale: string;
    createStyles: boolean;
    accentSaturation: number;
    radii: string;
    spacing: string;
    singleCollection: boolean;
}

const form = document.querySelector('form');
const card = document.querySelector('.color-preview') as HTMLDivElement;
const accentSlidersContainer = document.getElementById('accentColorsSliders') as HTMLDivElement;
let importButton = document.getElementById('importVariablesButton') as HTMLButtonElement;
let resetDefaultsButton = document.getElementById('resetDefaultsButton') as HTMLButtonElement;

let sliders = {};
let defaultData;

document.querySelectorAll('[data-command="renderAccents"]').forEach((el: HTMLAnchorElement) => {
    el.addEventListener('click', (e) => {
        const params = getFormData();

        parent.postMessage({
            pluginMessage: {
                type: 'RENDER_ACCENTS',
                params: params
            }
        }, "*");

    });
});

document.querySelectorAll('[data-command="renderNeutrals"]').forEach((el: HTMLAnchorElement) => {
    el.addEventListener('click', (e) => {
        const params = getFormData();

        parent.postMessage({
            pluginMessage: {
                type: 'RENDER_NEUTRALS',
                params: params
            }
        }, "*");

    });
});
document.querySelectorAll('[data-modal').forEach((el: HTMLAnchorElement) => {
    const modalID = el.dataset.modal;
    const modal = document.getElementById(modalID) as HTMLDialogElement;

    el.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
    });

    modal.querySelector('button.close').addEventListener('click', (e) => {
        e.preventDefault();
        modal.close();    
    })
});

function closeModal(modalID) {
    const modal = document.getElementById(modalID) as HTMLDialogElement;
    modal.close();
    return false;
}

document.querySelectorAll('[data-expander][data-role="trigger"]').forEach((el: HTMLAnchorElement) => {
    const next = el.nextElementSibling as HTMLDivElement;
    if (next.dataset.role == 'container') {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            next.style.display = next.style.display == 'none' ? 'block' : 'none';
            el.setAttribute('data-expanded', next.style.display == 'none' ? 'no' : 'yes');
        })
    }
    else {
        console.warn('Cannot find container to expand')
    }
});

function transformValue(type: string, value: any): string {
    const valueMaps = {
        'semantics': systemAccentList,
        'typography': typographySizeValues,
        'radii': radiiSizeName,
        'spacing': spacingSizeName
    };

    const values = valueMaps[type];
    const resolvedValue = values[value];

    return toTitleCase(resolvedValue || value);
}

document.querySelectorAll('[data-slider]').forEach((el: HTMLDivElement) => {
    const sliderCompoent = initSlider(el, { syncValue: el.dataset.type == null });
    sliders[sliderCompoent.params.name] = sliderCompoent;

    if (el.dataset.type != null) {
        sliderCompoent.sliderElement.setAttribute('readonly', 'true');
        sliderCompoent.sliderElement.addEventListener('input', (e) => {
            sliderCompoent.valueInput.value = transformValue(el.dataset.type, sliderCompoent.sliderElement.value);
        });
        sliderCompoent.valueInput.value = transformValue(el.dataset.type, sliderCompoent.sliderElement.value);
    }
});


Object.entries(defaultAccentHUEs).forEach(([name, hue]) => {
    const options = { "label": toTitleCase(name), "name": name, "min": 0, "max": 360, "step": 1, "value": hue, syncValue: true }
    let el = document.createElement('div');
    const sliderCompoent = initSlider(el, options);
    accentSlidersContainer.appendChild(el);
    sliders[name] = sliderCompoent;
});

form.addEventListener("input", (e) => {
    generatePreview();
});

resetDefaultsButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    generatePreview();
});

importButton.addEventListener('click', (e) => {
    e.preventDefault();

    let message = {
        type: "IMPORT",
        params: getFormData()
    };

    parent.postMessage({ pluginMessage: message }, "*");
})

generatePreview();

function getCheckboxValue(propName, formData) {
    let radii = [];

    formData.forEach((value) => {
        if (value[propName]) {
            radii.push(value.radii)
        }
    })

    return radii;
}

function getFormData(): ImportFormData {
    const formEntries = new FormData(form).entries();
    const entries = Array.from(formEntries, ([x, y]) => ({ [x]: y }));
    const accentList = systemAccentList;

    let rawValues;

    entries.forEach(val => {
        rawValues = Object.assign(rawValues || {}, val);
    })

    return {
        type: 'IMPORT',
        singleCollection: rawValues.singleCollection && rawValues.singleCollection === 'true',
        hue: parseInt(rawValues.hue),
        saturation: parseInt(rawValues.saturation) / 100,
        distance: parseInt(rawValues.distance) / 100,
        primary: accentList[rawValues.primary],
        info: accentList[rawValues.info],
        success: accentList[rawValues.success],
        warning: accentList[rawValues.warning],
        danger: accentList[rawValues.danger],
        red: parseInt(rawValues.red),
        amber: parseInt(rawValues.amber),
        brown: parseInt(rawValues.brown),
        green: parseInt(rawValues.green),
        teal: parseInt(rawValues.teal),
        cyan: parseInt(rawValues.cyan),
        blue: parseInt(rawValues.blue),
        indigo: parseInt(rawValues.indigo),
        violet: parseInt(rawValues.violet),
        purple: parseInt(rawValues.purple),
        pink: parseInt(rawValues.pink),
        typeScale: typographySizeName[rawValues.fontSize],
        createStyles: false,
        accentSaturation: parseInt(rawValues.accentSaturation) / 100,
        radii: radiiSizeName[rawValues.radii],
        spacing: spacingSizeName[rawValues.spacing]
    };
}

function generatePreview() {
    let data = getFormData();

    for (var a = 1, b = 7; a < b; a++) {
        const colorLight = chroma.hsl(data.hue, data.saturation, 1 - data.distance * a);
        const colorDark = chroma.hsl(data.hue, data.saturation, 0.2 + data.distance * a);

        card.style.setProperty(`--light-${a}`, colorLight.hex());
        card.style.setProperty(`--dark-${a}`, colorDark.hex());
    }

    sliders['hue'].sliderElement.style.setProperty('--thumb-color', chroma.hsl(data.hue, data.accentSaturation, 0.5).hex());
    sliders['saturation'].sliderElement.style.setProperty('--thumb-color', chroma.hsl(data.hue, data.saturation, 0.5).hex());

    const semanticSlidersUpdateMap = [
        ["primary", data.primary],
        ["info", data.info],
        ["success", data.success],
        ["warning", data.warning],
        ["danger", data.danger],
    ]

    Object.entries(defaultAccentHUEs).forEach(([name, hue]) => {
        const sliderValue = data[name];
        const accentColor = chroma.hsl([sliderValue, data.accentSaturation, 0.5]).luminance(0.18);
        sliders[name].sliderElement.style.setProperty('--thumb-color', accentColor.hex());
    });

    semanticSlidersUpdateMap.forEach(([sliderName, sliderValue]) => {
        const sliderAccentColor = sliders[sliderValue].sliderElement.style.getPropertyValue('--thumb-color');
        sliders[sliderName].sliderElement.style.setProperty('--thumb-color', sliderAccentColor);
        document.documentElement.style.setProperty(`--${sliderName}`, sliderAccentColor);
        const valueEl = document.querySelector(`.color-box.a-${sliderName} > .token-value`) as HTMLDivElement;
        if (valueEl) {
            valueEl.innerHTML = sliderValue;
        }
    });

    generateCSSVars(radii[data.radii]);
    generateCSSVars(typescale[data.typeScale]);
    generateCSSVars(spacing[data.spacing]);

    updateValuesDisplay(data);

}

function updateValuesDisplay(data: ImportFormData) {
    Object.entries(data).forEach(([key, value]) => {
        document.querySelectorAll(`[data-value=${key}]`).forEach((el: HTMLElement) => {
            el.innerHTML = transformValue(el.dataset.type, value);
        });
    })
}

function generateCSSVars(tokens = {}) {
    Object.entries(tokens).forEach(([name, value]) => {
        const varName = `--${name.replace(/\//g, "-")}`;
        const varValue = parseInt(value["$value"]);
        if (varValue != null) {
            document.documentElement.style.setProperty(varName, `${varValue}px`);
        }
        else {
            console.error(`Variable ${varName} value is not an integer`);
        }
    })
}