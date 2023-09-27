import "./utils.css";
import "./styles.css";
import "../../node_modules/nouislider/dist/nouislider.css";


import { initSlider } from "./slider";
import { toTitleCase } from "../utils/text-to-title-case";
import { defaultAccentHUEs, defaultSettings, radiiSizeName, radiiSizeValues, spacingSizeName, systemAccentList, typographySizeName, typographySizeValues } from "../defaults";

import { debounce } from "../utils/debounce";
import { ImportFormData, generatePreview, getFormData, loadSettings, transformValue } from "../utils/import-utils";

/*
    UI INITIALIZATION
*/

const form = document.querySelector('form') as HTMLFormElement;
const colorPreviewCard = document.querySelector('.color-preview') as HTMLDivElement;
const accentSlidersContainer = document.getElementById('accentColorsSliders') as HTMLDivElement;
let importButton = document.getElementById('importVariablesButton') as HTMLButtonElement;
let resetDefaultsButton = document.getElementById('resetDefaultsButton') as HTMLButtonElement;

let sliders = {};

document.querySelectorAll('[data-command="renderAccents"]').forEach((el: HTMLAnchorElement) => {
    el.addEventListener('click', (e) => {
        const params = getFormData(form);

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
        const params = getFormData(form);

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


document.querySelectorAll('[data-slider]').forEach((el: HTMLDivElement) => {
    const valueMaps = {
        'semantics': systemAccentList,
        'typography': typographySizeValues,
        'radii': radiiSizeName,
        'spacing': spacingSizeName
    };

    const type = el.dataset.type;

    const sliderComponent = initSlider(el, { valueMap: valueMaps[type] || null});
    sliders[sliderComponent.params.name] = sliderComponent;
});


Object.entries(defaultAccentHUEs).forEach(([name, hue]) => {
    const options = { "label": toTitleCase(name), "name": name, "min": 0, "max": 360, "step": 1, "value": hue, syncValue: true }
    let el = document.createElement('div');
    const sliderCompoent = initSlider(el, options);
    accentSlidersContainer.appendChild(el);
    sliders[name] = sliderCompoent;
});

form.addEventListener("input", debounce(() => {
    generatePreview(form, colorPreviewCard, sliders);
}, 10));


resetDefaultsButton.addEventListener('click', (e) => {
    e.preventDefault();

    loadSettings(form, defaultSettings);
});

importButton.addEventListener('click', (e) => {
    e.preventDefault();

    let message = {
        type: "IMPORT",
        params: getFormData(form)
    };

    parent.postMessage({ pluginMessage: message }, "*");
})

parent.postMessage({
    pluginMessage: {type: 'LOADED'}
}, "*");

generatePreview(form, colorPreviewCard, sliders);


onmessage = (event) => {
    console.log("got this from the plugin code", event.data.pluginMessage)
    const data = event.data.pluginMessage as ImportFormData;

    // convert string values into numbers for sliders

    loadSettings(form, data);
}
