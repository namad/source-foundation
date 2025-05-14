import { getColorSystemVersion, getGlobalNeutrals, upgradeTextPalette } from './color-tokens';
import * as typographyTokens from './typography-tokens';
import * as figlib from './utils/figma-library-variables';
import * as themeStore from './utils/themes-store';

import { renderAccents } from "./color-generators/render-accents";
import { generateNeutrals, renderNeutrals } from './color-generators/neutrals-palette-generator';
import { addToGlobalTokensDictionary } from './utils/token-references';
import { ConfigColors, ImportFormData } from './import-ui';
import { CollectionExportRecord, exportBrandVariantToJSON, exportToJSON, importFromJSON } from './import-export-json';
import { importAllTokens, initiateImport } from './import-tokens';
import { createUpdateElevationComponents } from './effect-tokens';
import { delayAsync } from './utils/delay-async';

console.clear();


figma.showUI(__html__, {
    width: 560,
    height: 720,
    themeColors: true,
});

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

const handlers = {
    process: async function(message: MessagePayload) {
        this.params = message.params;
        this.message = message;
        await this[this.message.type]();
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
    IMPORT: async function () {
        themeStore.setTheme(this.params);
        themeStore.save();

        const colorSystemVersion = await getColorSystemVersion();
        if(colorSystemVersion == 1) {
            await this.UPGRADE_TEXT_COLORS();
        }

        await delayAsync(10);

        await initiateImport();
        await importAllTokens();

    },

    GET_EXPORT_DATA: async function () {
        figma.ui.postMessage({ type: "EXPORT_RESULT_PRESET", exportRecords: themeStore.serialize() });
        await exportToJSON(this.message.exportJSONParams, this.params).then(exportRecords => {
            figma.ui.postMessage({ type: "EXPORT_RESULT_JSON", exportRecords });
        });
        await exportBrandVariantToJSON(this.message.exportBrandParams, this.params).then(exportRecords => {
            figma.ui.postMessage({ type: "EXPORT_RESULT_BRAND", exportRecords });
        });
    },

    IMPORT_JSON: async function () {
        addToGlobalTokensDictionary({
            ...getGlobalNeutrals(this.params),
            ...typographyTokens.getTypographyTokens(this.params.baseFontSize, this.params.typeScale)
        });

        figlib.setSelectedLibrary(this.message.importJSONParams.tokenLibraryName);

        await importFromJSON(this.message.data, this.params).catch((error: Error) => {
            console.error(error);
            figma.ui.postMessage("IMPORT_COMPLETED");
            figma.notify(error.message, { error: true });
        });

        figma.notify(`Figma variables has been imported`);
        figma.ui.postMessage("IMPORT_COMPLETED");
    },

    ALERT: async function () {
        figma.notify(`${this.message.data}`, this.message.alertParams || {});
    },

    RENDER_ACCENTS: async function () {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const frameLightPalette = renderAccents('light', this.params, 'Light Mode Accents');
        const frameDarkPalette = renderAccents('dark', this.params, 'Dark Mode Accents');
        frameDarkPalette.y = frameLightPalette.height + 64;

        figma.viewport.scrollAndZoomIntoView([frameDarkPalette, frameDarkPalette]);
        figma.currentPage.selection = [frameDarkPalette, frameDarkPalette];
    },

    RENDER_NEUTRALS: async function () {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const neutralTokens = generateNeutrals(this.params);
        renderNeutrals(neutralTokens, `Global Neutrals`);
    },

    UPGRADE_TEXT_COLORS: async function () {
        await upgradeTextPalette(this.params);
        await this.refreshUI(this.params);
    },

    START_ELEVATION_COMPONENTS: async function () {
        figma.ui.postMessage({
            type: "START_ELEVATION_COMPONENTS",
            data: {
                pages: figma.root.children.map(node => node.name),
                currentPage: figma.currentPage.name
            }
        })
    },

    CREATE_ELEVATION_COMPONENTS: async function () {
        const page = this.message.options['componentPage'];
        await createUpdateElevationComponents(this.params, page).catch((error: Error) => {
            figma.notify(error.message, { error: true });
        });
    },

    CENTER_WINDOW: function(message: MessagePayload) {
        let pluginWidth = 500,
            pluginHeight = 800,
            zoom = figma.viewport.zoom,
            centerX = Math.round(figma.viewport.center.x - (zoom / 2)) - pluginWidth / 2,
            centerY = Math.round(figma.viewport.center.y - (zoom / 2)) - pluginHeight / 2;

        figma.ui.reposition(centerX, centerY);    
    },

    UI_READY: async function () {
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

    UPDATE: async function () {
        themeStore.setTheme(this.params);

        switch (this.params.baseFontSize) {
            default: {
                figma.ui.resize(500, 800)
                break;
            }
            case 'large': {
                figma.ui.resize(560, 800)
                break;
            }
        }
    },

    RESET: async function () {
        themeStore.resetDefaults();
        await this.refreshUI(themeStore.getTheme("light"));
    },

    UPDATE_ACTIVE_THEME: async function () {
        const selectedThemeData = themeStore.getTheme(this.params.theme);

        selectedThemeData.theme = this.params.theme;
        await this.refreshUI(selectedThemeData);
    },

    ENABLE_CUSTOM_DARK_MODE: async function() {
        themeStore.enableCustomDarkMode();
        await this.refreshUI(this.params);
    },

    DISABLE_CUSTOM_DARK_MODE: async function() {
        themeStore.disableCustomDarkMode();
        await this.refreshUI(this.params);
    }    
}

figma.ui.onmessage = async (eventData: MessagePayload) => {
    console.log("code received message", eventData);
    await handlers.process(eventData);
};