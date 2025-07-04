import "./styles/main.css";

import { defaultSettings, systemAccentList } from "../defaults";
import { debounce } from "../utils/debounce";
import { ImportFormData, collectValues, refreshUI, getFormData, loadData, LoadDataOptions } from "../import-ui";
import { getPresets } from "../presets";
import { delayAsync } from "../utils/delay-async";
import { CollectionExportRecord } from "../import-export-json";
import { ImportEventParameters } from "../main";
import { mainForm } from "./ref/main-form";

import "./helpers/modal";
import "./helpers/tabs";
import "./helpers/paste-button";
import "./helpers/intersection-observer";
import "./helpers/command-actions";
import "./helpers/expander";
import "./helpers/noui-slider";
import "./helpers/accent-hue-sliders";
import "./helpers/accent-luminance-slider";
import "./helpers/neutral-greys-render";
// import "./helpers/text-brightness-slider";
import "./helpers/card-carousel-scroller";
import "./helpers/global-accent-preview-carousel-scroller";
import "./helpers/create-update-elevation-components-button";
import "./helpers/tooltips";



/*
    UI INITIALIZATION
*/



let importButton = document.getElementById('importVariablesButton') as HTMLButtonElement;

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
            type: "GET_EXPORT_DATA",
            params,
            exportJSONParams,
            exportBrandParams
        } 
    }, "*");
}

let updateTime;

mainForm.addEventListener("input", debounce((e) => {
    const targetName = e.target.name;
    const params = getFormData(mainForm)
    
    
    console.log(targetName, new Date().getTime() - updateTime);
    updateTime = new Date().getTime();

    if(targetName == "theme") {
        return parent.postMessage({ pluginMessage: {
            type: "UPDATE_ACTIVE_THEME",
            params: params
        } }, "*");
    }
    
    refreshUI({params});

    parent.postMessage({
        pluginMessage: { type: 'UPDATE', params }
    }, "*");

}, 100));


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



// nouislider.create(document.getElementById('gloabalNeutralsModal'), {
//     start: defaultValues,
//     connect: [false, true, true, false],
//     step: 0.5,
//     direction: 'rtl',
//     range: {
//         'min': 5,
//         '85%': 60,
//         'max': 90
//     }
// }).on('update', debounce((values, handle) => {
//     luminanceSliderVals[handle].value = values[handle] as string;
//     mainForm.dispatchEvent(new Event('input', { 'bubbles': true }));
// }, 1))

window.onmessage = ({ data: { pluginMessage } }) => {
    if(pluginMessage == 'IMPORT_COMPLETED') {
        importButton.classList.remove('loading');
    }
    else if (pluginMessage.type === "EXPORT_RESULT_JSON") {
        const data = pluginMessage.exportRecords as CollectionExportRecord[];
        document.querySelector('#exportTokensTextarea').innerHTML = JSON.stringify(data, null, 2);
    }    
    else if (pluginMessage.type === "EXPORT_RESULT_PRESET") {
        const data = pluginMessage.exportRecords as CollectionExportRecord[];
        const exportCodeTextarea = document.querySelector('[name=exportCodeTextarea') as HTMLInputElement;
        exportCodeTextarea.value = JSON.stringify(data, null, 2);        
    }    
    else if (pluginMessage.type === "EXPORT_RESULT_BRAND") {
        const data = pluginMessage.exportRecords as CollectionExportRecord[];
        document.querySelector('#exportBrandTokensTextarea').innerHTML = JSON.stringify(data, null, 2);
    }    
    else if (pluginMessage.type === "START_ELEVATION_COMPONENTS") {
        const data =  pluginMessage.data;
        const pages = data.pages as string[];
        const currentPage = data.currentPage as string;

        document.querySelector('#pagesList').innerHTML = pages.map(pageName => {
            return `<label class="flex flex-row gap-2"><input type="radio" name="componentPage" value="${pageName}" ${pageName == currentPage ? 'checked' : ''}/><span>${pageName}</span></label> `
        }).join('')
    }    
    else if (pluginMessage.type == "REFRESH_UI") {
        const data = pluginMessage.data as LoadDataOptions;
        const {
            params,
            tokenLibraries,
            customDarkMode,
            colorSystemVersion,
            preset
        } = data;

        loadData({
            params,
            tokenLibraries,
            customDarkMode,
            colorSystemVersion,
            preset   
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