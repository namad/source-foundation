import { defaultSettings } from "../defaults";
import { ImportFormData } from "../import-ui";
import { _clone } from "./clone";

type themeKey = 'light'|'dark';

let activeTheme: themeKey = 'light';
let _isCustomDarkMode = false;

const store: Map<themeKey, ImportFormData> = new Map();

function syncValues(data: ImportFormData) {
    const sharedProps = [
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
        'baseFontSize',
        'typeScale',
        'createStyles',
        'radii',
        'spacing',
        'verticalSpacing',
        'singleCollection',
        'createColorTokens',
        'createComponentTokens',
        'createTypographyTokens',
        'createSpacingTokens',
        'createElevationTokens',
        'createRadiiTokens',
        'createGlobalSizeTokens',
        'createOpacityTokens',
    ];

    store.forEach((params, themeKey) => {
        sharedProps.forEach(propName => {
            params[propName] = data[propName];
        })
    })
}

export function setTheme(data: ImportFormData) {
    const theme = _isCustomDarkMode ? data.theme : 'light';
    activeTheme = theme;


    if(_isCustomDarkMode === true && theme === 'dark') {
        data.theme = 'dark';
        store.set(theme, data);
    }
    else {
        data.theme = 'light';
        store.set('light', data);
    }

    syncValues(data);

}

export function getTheme(theme?: themeKey): ImportFormData {
    if(_isCustomDarkMode === true && theme === 'dark') {
        return store.get('dark');
    }

    return store.get('light');
}

export function serialize(): ImportFormData[] {
    let result = [store.get('light')];

    if(_isCustomDarkMode === true) {
        result.push(store.get('dark'));
    }

    return result;
}

export function save() {
    figma.root.setPluginData('SDS', JSON.stringify(serialize()));
}

export function load() {
    debugger

    const pluginDataText = figma.root.getPluginData('SDS');
    let data: ImportFormData|ImportFormData[];

    try {
        data  = JSON.parse(pluginDataText);
    }
    catch (e) {
        data = [defaultSettings];
        console.info('No plugin data found, loading default');
    }

    const isArray = Array.isArray(data);
    let formData: ImportFormData[];

    activeTheme = 'light';

    if(isArray) {
        formData = [ ...data as ImportFormData[] ];
    }
    else {
        formData = [data as ImportFormData];
    }

    _isCustomDarkMode = formData.length > 1;

    formData.forEach(params => {
        store.set(params.theme, params)
    });
}

export function getStore() {
    return store;
}

export function getSize() {
    return store.size;
}

export function resetDefaults() {
    activeTheme = 'light';
    _isCustomDarkMode = false;
    store.clear();
    store.set('light', defaultSettings);
}

export function enableCustomDarkMode() {
    _isCustomDarkMode = true;
}

export function disableCustomDarkMode() {
    _isCustomDarkMode = false;
}

export function isCustomDarkMode() {
    return _isCustomDarkMode;
}