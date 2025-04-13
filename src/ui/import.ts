import "./styles/source-vars.css";
import "./styles/utils.css";
import "./styles/styles.css";
import "./styles/icons.css";
import "./styles/dialog.css";
import "./styles/color-box.css";
import "../../node_modules/nouislider/dist/nouislider.css";


import noUiSlider, { API } from 'nouislider';
import { initSlider } from "./slider";
import { toTitleCase } from "../utils/text-to-title-case";
import { defaultAccentHUEs, defaultSettings, radiiSizeName, radiiSizeValues, spacingSizeName, systemAccentList, typographySizeName, typographySizeValues } from "../defaults";

import { debounce } from "../utils/debounce";
import { ImportFormData, SlidersColleciton, collectValues, generateMiniPreview, generatePreview, getFormData, loadSettings, transformValue } from "../import-ui";
import { getPresets } from "../presets";

import { delayAsync } from "../utils/delay-async";
import { CollectionExportRecord } from "../import-export-json";

import "./helpers/modal";
import "./helpers/tabs";
import "./helpers/paste-button";
import "./helpers/intersection-observer";
import { getTokenLibrariesListMarkup } from "./helpers/figma-libraries-selector";
import { ImportEventParameters } from "../main";
import { initiateAccentLuminanceSliders } from "./helpers/accent-luminance-slider";
import { initiateAccentHUESliders } from "./helpers/accent-hue-sliders";
import { initiateTextBrightnessSlider } from "./helpers/text-brightness-slider";

/*
    UI INITIALIZATION
*/

const mainForm = document.querySelector('form') as HTMLFormElement;

let importButton = document.getElementById('importVariablesButton') as HTMLButtonElement;
let exportThemeButton = document.getElementById('exportThemeButton') as HTMLButtonElement;
let resetDefaultsButton = document.getElementById('resetDefaultsButton') as HTMLButtonElement;

let sliders: SlidersColleciton = {};


// document.querySelector('#setCustomBrandColor').addEventListener('click', (e) => {
//     e.stopPropagation();
//     e.preventDefault();

//     const el = document.querySelector('dialog input[name=customPrimaryColor') as HTMLFormElement;
//     const value = el.value;

//     let data = getFormData(form);

//     debugger;


//     const customPrimaryValue = value.replace('#', '');

//     if (customPrimaryValue.length) {
//         const customPrimaryColor = chroma(`#${customPrimaryValue}`);
//         const customAccentLuminanceMid = customPrimaryColor.luminance();
//         const customAccentHUE = customPrimaryColor.get('hsl.h');
        
//         const updatedData = {
//             primary: 'custom',
//             accentMinLuminance: customAccentLuminanceMid * 0.55,
//             accentMidLuminance: customAccentLuminanceMid,
//             accentMaxLuminance: Math.max(1, customAccentLuminanceMid * 3.33),
//         }

//         loadSettings(form, {
//             ...getFormData(form),
//             ...updatedData
//         });
//     }

//     return false
// })

document.querySelectorAll('#copyExportedCodeButton').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById('exportModal') as HTMLDialogElement;
        const radioValue = modal.querySelector('[data-tab]:checked') as HTMLInputElement;
        const tabID = radioValue.dataset.tab;

        const textarea = document.querySelector(`#${tabID} textarea`) as HTMLTextAreaElement;
        textarea.select();
        document.execCommand("copy");

        parent.postMessage({
            pluginMessage: { type: 'ALERT', data: "Copied to clipboard" }
        }, "*");

        // modal.close();
    })
})

const selectAllNoneLinks = document.querySelectorAll('a[data-import-options]') as NodeListOf<HTMLAnchorElement>;

selectAllNoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const checkboxes = document.querySelectorAll('#importOptionsCheckboxes input[type=checkbox') as NodeListOf<HTMLInputElement>;
        checkboxes.forEach(checkbox => {
            checkbox.checked = link.dataset.importOptions == 'all';
        })
    })
});

document.getElementById('applyPresetButton').addEventListener('click', (e) => {
    e.preventDefault();

    const modal = document.getElementById('importModal') as HTMLDialogElement;
    const tabID = "#importPresetTab";
    const tab = modal.querySelector(tabID) as HTMLDivElement;
    const textarea = modal.querySelector(`${tabID} textarea`) as HTMLTextAreaElement;
    const code = textarea.value;
    const settings = collectValues(tab) as ImportFormData;

    let data;
    let isValid = false;

    try {
        data = JSON.parse(code);
        isValid = true;
    }
    catch (e) {
        // parent.postMessage({ pluginMessage: { type: "ALERT", data: e.message, alertParams: {error: true} } }, "*");  
        // throw (e);
    }

    if(settings.theme == null && code.length == 0) {
        parent.postMessage({ pluginMessage: { type: "ALERT", data: "Paste a preset code or select a preset to import", alertParams: {error: true} } }, "*");  
        return false;
    }

    if(settings.theme == null && !isValid) {
        parent.postMessage({ pluginMessage: { type: "ALERT", data: "Cannot import, seems like your code is not a valid JSON", alertParams: {error: true} } }, "*");  
        return false;
    }


    if (code.length == 0) {
        const themeNumber = settings.theme;
        data = getPresets()[themeNumber];
    }

    loadSettings(mainForm, data);

    modal.close();
})

document.getElementById('importCustomThemeButton').addEventListener('click', (e) => {
    e.preventDefault();

    debugger;

    const modal = document.getElementById('importModal') as HTMLDialogElement;
    const tabID = "#importTokensTab";
    const tab = modal.querySelector(tabID) as HTMLDivElement;
    const settings = collectValues(tab) as ImportEventParameters;

    let data;
    let isValid = false;

    try {
        data = JSON.parse(settings.code);
        isValid = true;
    }
    catch (e) {
        // parent.postMessage({ pluginMessage: { type: "ALERT", data: e.message, alertParams: {error: true} } }, "*");  
        // throw (e);
    }

    if(!isValid) {
        parent.postMessage({ pluginMessage: { type: "ALERT", data: "Cannot import, seems like your code is not a valid JSON", alertParams: {error: true} } }, "*");  
        return false;
    }

    if(settings.code.length == 0) {
        parent.postMessage({ pluginMessage: { type: "ALERT", data: "Paste a code to import", alertParams: {error: true} } }, "*");  
        return false;
    }

    const params = getFormData(mainForm);
    importButton.classList.add('loading');
    parent.postMessage({ 
        pluginMessage: { 
            type: "IMPORT_JSON", 
            params,
            importJSONParams: settings,
            data 
        }
    }, "*");   

    modal.close();
})

document.querySelectorAll('#openExportModalButton').forEach(btn => {
    btn.addEventListener('click', (e) => {
        fireTokenExportEvent();    
    })
})

document.querySelectorAll('#exportTokensTab input, #exportBrandVariantTab input').forEach((radio: HTMLInputElement) => {
    radio.addEventListener('click', (e) => {
        fireTokenExportEvent();     
    })
})

function fireTokenExportEvent() {
    const params = getFormData(mainForm);
    const exportJSONParamsForm = document.querySelector("#exportTokensTab");
    const exportJSONParams = collectValues(exportJSONParamsForm)
    const brandParamsForm = document.querySelector("#exportBrandVariantTab")
    const exportBrandParams = collectValues(brandParamsForm);
    parent.postMessage({ 
        pluginMessage: { 
            type: "EXPORT",
            params,
            exportJSONParams,
            exportBrandParams
        } 
    }, "*");
}


document.querySelectorAll('[data-command]').forEach((el: HTMLAnchorElement) => {
    el.addEventListener('click', (e) => {
        const params = getFormData(mainForm);
        const command = el.dataset.command;

        parent.postMessage({
            pluginMessage: {
                type: command,
                params: params
            }
        }, "*");

    });
});

document.querySelectorAll('[data-radio-toggle]').forEach((el: HTMLFormElement) => {
    el.addEventListener('input', (e) => {
        const name = el.name;
        document.querySelectorAll(`input[type=radio][name=${name}]`).forEach((radiobutton: HTMLFormElement) => {
            const containerId = radiobutton.dataset.radioToggle;
            const isChecked = radiobutton.checked;
            const container = document.getElementById(containerId) as HTMLDivElement;
            container.style.display = isChecked ? '' : 'none';
        });
    });
});


document.querySelectorAll('[data-expander][data-role="trigger"]').forEach((el: HTMLAnchorElement) => {
    const next = el.nextElementSibling as HTMLDivElement;
    if (next.dataset.role == 'container') {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            next.classList.toggle('collapsed');
            el.setAttribute('data-expanded', `${!next.classList.contains('collapsed')}`);
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

    const sliderComponent = initSlider(el, { valueMap: valueMaps[type] || null });
    sliders[sliderComponent.params.name] = sliderComponent;
});



const customAccentTextSaturation = document.querySelector('[name=customAccentTextSaturation]') as HTMLInputElement;

customAccentTextSaturation && customAccentTextSaturation.addEventListener('click', () => {
    let data = getFormData(mainForm);
    loadSettings(mainForm, data);
});



mainForm.addEventListener("input", debounce((e) => {
    console.log(e.target.name);
    generatePreview(mainForm, sliders);
}, 1));


resetDefaultsButton.addEventListener('click', (e) => {
    e.preventDefault();

    loadSettings(mainForm, defaultSettings);
});

importButton.addEventListener('click', async (e) => {
    e.preventDefault();

    importButton.classList.add('loading');
    
    await delayAsync(50);

    let message = {
        type: "IMPORT",
        params: getFormData(mainForm)
    };

    parent.postMessage({ pluginMessage: message }, "*");
})

parent.postMessage({
    pluginMessage: { type: 'LOADED' }
}, "*");

initiateAccentHUESliders(mainForm, defaultAccentHUEs, sliders);
initiateAccentLuminanceSliders(mainForm);
initiateTextBrightnessSlider(mainForm);
loadSettings(mainForm, defaultSettings);


window.onmessage = ({ data: { pluginMessage } }) => {
    if(pluginMessage == 'importCompleted') {
        importButton.classList.remove('loading');
    }
    else if (pluginMessage.type === "EXPORT_RESULT_JSON") {
        const data = pluginMessage.files as CollectionExportRecord[];
        document.querySelector('#exportTokensTextarea').innerHTML = JSON.stringify(data, null, 2);
    }    
    else if (pluginMessage.type === "EXPORT_RESULT_BRAND") {
        const data = pluginMessage.files as CollectionExportRecord[];
        document.querySelector('#exportBrandTokensTextarea').innerHTML = JSON.stringify(data, null, 2);
    }    
    else if (pluginMessage.type == "LOAD") {
        const savedPreset = pluginMessage.data.savedPreset as ImportFormData;
        const tokenLibraries = pluginMessage.data.tokenLibraries;
        const colorSystemVersion = pluginMessage.data.colorSystemVersion;

        const tokenLibrariesListMarkup = getTokenLibrariesListMarkup(tokenLibraries);

        document.getElementById('sourceLibrariesList').innerHTML = tokenLibrariesListMarkup;

        savedPreset && loadSettings(mainForm, savedPreset);
        // colorSystemVersion == 1 && enableUpgradeTextColorsLink();
    }
}


function enableUpgradeTextColorsLink() {
    const upgradeLink = document.getElementById('upgradeTextPaletteLink').classList.remove('hidden');
}
