import "./styles/source-vars.css";
import "./styles/utils.css";
import "./styles/styles.css";
import "./styles/icons.css";
import "./styles/dialog.css";
import "./styles/color-box.css";
import "../../node_modules/nouislider/dist/nouislider.css";
import "./styles/noui-slider.css";


import { defaultSettings } from "../defaults";

import { debounce } from "../utils/debounce";
import { ImportFormData, SlidersColleciton, collectValues, refreshUI, getFormData, loadData } from "../import-ui";
import { getPresets } from "../presets";

import { delayAsync } from "../utils/delay-async";
import { CollectionExportRecord } from "../import-export-json";

import { ImportEventParameters } from "../main";

import "./helpers/modal";
import "./helpers/tabs";
import "./helpers/paste-button";
import "./helpers/intersection-observer";
import "./helpers/command-actions";
import "./helpers/expander";
import "./helpers/noui-slider";
import "./helpers/accent-hue-sliders";
import "./helpers/accent-luminance-slider";
import "./helpers/text-brightness-slider";
import { mainForm } from "./ref/main-form";


/*
    UI INITIALIZATION
*/


let importButton = document.getElementById('importVariablesButton') as HTMLButtonElement;
let exportThemeButton = document.getElementById('exportThemeButton') as HTMLButtonElement;
let resetDefaultsButton = document.getElementById('resetDefaultsButton') as HTMLButtonElement;


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

    loadData({
        params: {
            ...defaultSettings,
            ...data
        },
        customDarkMode: false
    });

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

// document.querySelectorAll('[data-radio-toggle]').forEach((el: HTMLFormElement) => {
//     el.addEventListener('input', (e) => {
//         const name = el.name;
//         document.querySelectorAll(`input[type=radio][name=${name}]`).forEach((radiobutton: HTMLFormElement) => {
//             const containerId = radiobutton.dataset.radioToggle;
//             const isChecked = radiobutton.checked;
//             const container = document.getElementById(containerId) as HTMLDivElement;
//             container.style.display = isChecked ? '' : 'none';
//         });
//     });
// });

// const customAccentTextSaturation = document.querySelector('[name=customAccentTextSaturation]') as HTMLInputElement;

// customAccentTextSaturation && customAccentTextSaturation.addEventListener('click', () => {
//     let data = getFormData(mainForm);
//     refreshUI(mainForm, data);
// });

mainForm.addEventListener("input", debounce((e) => {
    const targetName = e.target.name;
    const params = getFormData(mainForm)

    console.log(targetName);

    if(targetName == "theme") {
        return parent.postMessage({ pluginMessage: {
            type: "UPDATE_ACTIVE_THEME",
            params: params
        } }, "*");
    }
    
    refreshUI(params);

    parent.postMessage({
        pluginMessage: { type: 'UPDATE', params }
    }, "*");

}, 2));


resetDefaultsButton.addEventListener('click', (e) => {
    e.preventDefault();
    parent.postMessage({ pluginMessage: {
        type: "RESET"
    } }, "*");
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


interface LoadEventData {
    customDarkMode?: boolean;
    params?: ImportFormData;
    tokenLibraries: {
        [key: string]: LibraryVariable[]
    };
    colorSystemVersion?: number;
}

window.onmessage = ({ data: { pluginMessage } }) => {
    if(pluginMessage == 'IMPORT_COMPLETED') {
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
    else if (pluginMessage.type == "REFRESH_UI") {
        const data = pluginMessage.data as LoadEventData;
        const {
            params,
            tokenLibraries,
            customDarkMode,
            colorSystemVersion        
        } = data;

        loadData({
            params,
            tokenLibraries,
            customDarkMode,
            colorSystemVersion       
        });
        // colorSystemVersion == 1 && enableUpgradeTextColorsLink();
    }
}

function enableUpgradeTextColorsLink() {
    const upgradeLink = document.getElementById('upgradeTextPaletteLink').classList.remove('hidden');
}

parent.postMessage({
    pluginMessage: { type: 'UI_READY' }
}, "*");