import { getColorSystemVersion, getGlobalNeutrals, upgradeTextPalette } from './color-tokens';
import * as typographyTokens from './typography-tokens';
import * as figlib from './utils/figma-library-variables';
import * as themeStore from './utils/themes-store';

import { renderAccents } from "./color-generators/render-accents";
import { generateNeutrals, renderNeutrals } from './color-generators/neutrals-palette-generator';
import { addToGlobalTokensDictionary } from './utils/token-references';
import { ConfigColors, ImportFormData } from './import-ui';
import { CollectionExportRecord, exportBrandVariantToJSON, exportToJSON, importFromJSON } from './import-export-json';
import { importAllTokens, importVariables, initiateImport } from './import-tokens';
import { createUpdateElevationComponents } from './effect-tokens';
import { delayAsync } from './utils/delay-async';
import { generateGlobalAccentPalette } from './color-generators/accent-palette-generator';
import { flattenObject } from './utils/flatten-object';

console.clear();




interface MessagePayload {
    type: string;
    params?: ImportFormData;
    exportJSONParams?: ExportEventParameters;
    exportBrandParams?: ExportEventParameters;
    importJSONParams?: ImportEventParameters;
    options?: any;
    data?: CollectionExportRecord[];
    colorFormat?: 'hex' | 'hsl' | 'rgba';
    colorName?: ConfigColors;
    alertParams?: any,
    fileName?: string;
    tokenLibraryName?: string;
}

export interface ImportEventParameters {
    code?: 'string';
    tokenLibraryName?: 'string';
}

export interface ExportEventParameters {
    jsonColorFormat?: 'hex' | 'hsl' | 'rgba';
    brandColorFormat?: 'hex' | 'hsl' | 'rgba';
    createColorTokens?: boolean;
    createComponentTokens?: boolean;
    createTypographyTokens?: boolean;
    createSpacingTokens?: boolean;
    createRadiiTokens?: boolean;
}

function checkImportOptions(params: ImportFormData): boolean {
    return  params.createComponentTokens
            || params.createColorTokens
            || params.createElevationTokens
            || params.createSpacingTokens
            || params.createRadiiTokens
            || params.createTypographyTokens
            || params.createOpacityTokens
            || params.createGlobalSizeTokens;
}
const handlers = {
    params: {},
    message: {},
    process: async function(message: MessagePayload) {
        await this[message.type](message.params, message);
    },

    refreshUI: async function(params: ImportFormData) {
        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: await getColorSystemVersion(),
                customDarkMode: themeStore.isCustomDarkMode(),
                params: params
            }
        })    
    },
    IMPORT: async function (params: ImportFormData, message: MessagePayload) {
        themeStore.setTheme(params);
        themeStore.save();

        if(checkImportOptions(params) === false) {
            figma.ui.postMessage("IMPORT_COMPLETED");
            return figma.notify('Psst, you may want to check your import options, seems like you turned everything OFF');
        }

        const colorSystemVersion = await getColorSystemVersion(true);
        if(colorSystemVersion == 1) {
            await this.UPGRADE_TEXT_COLORS(params, message);
        }

        await delayAsync(10);

        await initiateImport();
        await importAllTokens();

    },

    GET_EXPORT_DATA: async function (params: ImportFormData, message: MessagePayload) {
        figma.ui.postMessage({ type: "EXPORT_RESULT_PRESET", exportRecords: themeStore.serialize() });
        await exportToJSON(message.exportJSONParams, params).then(exportRecords => {
            figma.ui.postMessage({ type: "EXPORT_RESULT_JSON", exportRecords });
        });
        await exportBrandVariantToJSON(message.exportBrandParams, params).then(exportRecords => {
            figma.ui.postMessage({ type: "EXPORT_RESULT_BRAND", exportRecords });
        });
    },

    IMPORT_JSON: async function (params: ImportFormData, message: MessagePayload) {
        addToGlobalTokensDictionary({
            ...getGlobalNeutrals(params),
            ...typographyTokens.getTypographyTokens(params.baseFontSize, params.typeScale)
        });

        figlib.setSelectedLibrary(message.importJSONParams.tokenLibraryName);

        await importFromJSON(message.data, params).catch((error: Error) => {
            console.error(error);
            figma.ui.postMessage("IMPORT_COMPLETED");
            figma.notify(error.message, { error: true });
        });

        figma.notify(`Figma variables has been imported`);
        figma.ui.postMessage("IMPORT_COMPLETED");
    },

    ALERT: async function (params: ImportFormData, message: MessagePayload) {
        figma.notify(`${message.data}`, message.alertParams || {});
    },

    RENDER_ACCENTS: async function (params: ImportFormData, message: MessagePayload) {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const frameLightPalette = renderAccents(params, 'Global Accents');

        figma.currentPage.selection = [frameLightPalette];
        figma.viewport.scrollAndZoomIntoView([frameLightPalette]);
    },

    RENDER_NEUTRALS: async function (params: ImportFormData, message: MessagePayload) {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const neutralTokens = generateNeutrals(params);
        const resultFrame = renderNeutrals(neutralTokens, `Global Neutrals`);
        figma.currentPage.selection = [resultFrame];
        figma.viewport.scrollAndZoomIntoView([resultFrame]);        
    },

    UPGRADE_TEXT_COLORS: async function (params: ImportFormData, message: MessagePayload) {
        await upgradeTextPalette(params);
        await this.refreshUI(params);
    },

    START_ELEVATION_COMPONENTS: async function (params: ImportFormData, message: MessagePayload) {
        figma.ui.postMessage({
            type: "START_ELEVATION_COMPONENTS",
            data: {
                pages: figma.root.children.map(node => node.name),
                currentPage: figma.currentPage.name
            }
        })
    },

    CREATE_ELEVATION_COMPONENTS: async function (params: ImportFormData, message: MessagePayload) {
        const page = message.options['componentPage'];
        await createUpdateElevationComponents(params, page).catch((error: Error) => {
            figma.notify(error.message, { error: true });
        });
    },

    CENTER_WINDOW: function(message: MessagePayload) {
        let pluginWidth = 520,
            pluginHeight = 800,
            zoom = figma.viewport.zoom,
            centerX = Math.round(figma.viewport.center.x - (zoom / 2)) - pluginWidth / 2,
            centerY = Math.round(figma.viewport.center.y - (zoom / 2)) - pluginHeight / 2;

        figma.ui.reposition(centerX, centerY);    
    },

    UI_READY: async function (params: ImportFormData, message: MessagePayload) {
        const colorSystemVersion = await getColorSystemVersion(true);
        await figlib.getStoreData();
        themeStore.load();

        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion,
                customDarkMode: themeStore.isCustomDarkMode(),
                params: themeStore.getTheme('light'),
                tokenLibraries: figlib.serialize()
            }
        })
    },

    UPDATE: async function (params: ImportFormData, message: MessagePayload) {
        themeStore.setTheme(params);

        // switch (params.baseFontSize) {
        //     default: {
        //         figma.ui.resize(500, 800)
        //         break;
        //     }
        //     case 'large': {
        //         figma.ui.resize(560, 800)
        //         break;
        //     }
        // }
    },

    RESET: async function (params: ImportFormData, message: MessagePayload) {
        themeStore.resetDefaults();
        await this.refreshUI(themeStore.getTheme("light"));
    },

    UPDATE_ACTIVE_THEME: async function (params: ImportFormData, message: MessagePayload) {
        const selectedThemeData = themeStore.getTheme(params.theme);

        selectedThemeData.theme = params.theme;
        await this.refreshUI(selectedThemeData);
    },

    MATCH_HUE_BRAND: async function (params: ImportFormData, message: MessagePayload) {
        const brandColor = params.primary;
        const brandHUE = params[brandColor];

        params.hue = brandHUE;
        themeStore.setTheme(params);
        await this.refreshUI(params);
    },

    ENABLE_CUSTOM_DARK_MODE: async function(params: ImportFormData, message: MessagePayload) {
        themeStore.enableCustomDarkMode();
        await this.refreshUI(params);
    },

    DISABLE_CUSTOM_DARK_MODE: async function(params: ImportFormData, message: MessagePayload) {
        themeStore.disableCustomDarkMode();
        await this.refreshUI(params);
    },

    IMPORT_GLOBAL_ACCENT_VARIABLES: async function(params: ImportFormData, message: MessagePayload) {
        const colors = flattenObject({
            'global': {
                'accent': generateGlobalAccentPalette(params)
            }
        })
        await importVariables({
            collectionName: 'Global Colors',
            modeName: 'Default',
            data: colors
        });
    },

    IMPORT_GLOBAL_NEUTRAL_VARIABLES: async function(params: ImportFormData, message: MessagePayload) {
        const colors = flattenObject({
            'global': {
                'neutral': getGlobalNeutrals(params)
            }
        })
        await importVariables({
            collectionName: 'Global Colors',
            modeName: 'Default',
            data: colors
        });
    }    
}

export default function () {
    run();
}

function run() {
    figma.showUI(__html__, {
        width: 520,
        height: 800,
        themeColors: true,
    });
    
    figma.ui.onmessage = async (eventData: MessagePayload) => {
        console.log("code received message", eventData);

        if(eventData.params?.hue == 0 && eventData.params?.saturation == 0) {
            debugger
        }
        await handlers.process(eventData);
    };
}

run()