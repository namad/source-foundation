import { getColorSystemVersion, getComponentColors, getGlobalNeutrals, upgradeTextPalette } from './color-tokens';
import * as typographyTokens from './typography-tokens';
import * as figlib from './utils/figma-library-variables';
import * as themeStore from './utils/themes-store';

import { renderAccents } from "./color-generators/render-accents";
import { generateGlobalAccentPalette } from './color-generators/accent-palette-generator';
import { generateNeutrals, renderNeutrals } from './color-generators/neutrals-palette-generator';
import { addToGlobalTokensDictionary } from './utils/token-references';
import { ConfigColors, ImportFormData } from './import-ui';
import { CollectionExportRecord, exportBrandVariantToJSON, exportToJSON, importFromJSON } from './import-export-json';
import { importAllTokens, initiateImport } from './import-tokens';

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
    data?: CollectionExportRecord[];
    colorFormat?:  'hex'|'hsl'|'rgba';
    colorName?: ConfigColors;
    alertParams?: any,
    fileName?: string;
    tokenLibraryName?: string;
}

export interface ImportEventParameters  {
    code?: 'string';
    tokenLibraryName?: 'string';
}

export interface ExportEventParameters  {
    jsonColorFormat?: 'hex'|'hsl'|'rgba';
    brandColorFormat?: 'hex'|'hsl'|'rgba';
    createColorTokens?: boolean;
    createComponentTokens?: boolean;
    createTypographyTokens?: boolean;
    createSpacingTokens?: boolean;
    createRadiiTokens?: boolean;    
}

figma.ui.onmessage = async (eventData: MessagePayload) => {
    console.log("code received message", eventData);
    const params = eventData.params;

    if (eventData.type === "IMPORT") {
        themeStore.setTheme(params);

        await initiateImport();
        await importAllTokens();
    }
    else if (eventData.type === "EXPORT") {
        await exportToJSON(eventData.exportJSONParams, params);
        await exportBrandVariantToJSON(eventData.exportBrandParams, params);
    }
    else if (eventData.type === "IMPORT_JSON") {
        addToGlobalTokensDictionary({
            ...getGlobalNeutrals(params),
            ...typographyTokens.getTypographyTokens(params.baseFontSize, params.typeScale)
        });

        figlib.setSelectedLibrary(eventData.importJSONParams.tokenLibraryName);
        
        await importFromJSON(eventData.data, params).catch(error => {
            console.error(error);
            figma.ui.postMessage("IMPORT_COMPLETED");
            figma.notify(error, {error: true});
        });

        figma.notify(`Figma variables has been imported`);
        figma.ui.postMessage("IMPORT_COMPLETED");
    }
    else if (eventData.type === "ALERT") {
        figma.notify(`${eventData.data}`, eventData.alertParams || {});
    }
    else if (eventData.type === "RENDER_ACCENTS") {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const frameLightPalette = renderAccents('light', params, 'Light Mode Accents');
        const frameDarkPalette = renderAccents('dark', params, 'Dark Mode Accents');
        frameDarkPalette.y = frameLightPalette.height + 64;
    }
    else if (eventData.type === "RENDER_NEUTRALS") {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const neutralTokens = generateNeutrals(params);
        renderNeutrals(neutralTokens, `Global Neutrals`);
    }
    else if (eventData.type === "UPGRADE_TEXT_COLORS") {
        await upgradeTextPalette(params);
    }
    else if (eventData.type == 'CENTER_WINDOW') {
        let pluginWidth = 500,
            pluginHeight = 800,
            zoom = figma.viewport.zoom,
            centerX = Math.round(figma.viewport.center.x - (zoom / 2)) - pluginWidth / 2,
            centerY = Math.round(figma.viewport.center.y - (zoom / 2)) - pluginHeight / 2;

        figma.ui.reposition(centerX, centerY);
    }    
    else if (eventData.type === "UI_READY") {
        const colorSystemVersion = 1; //await getColorSystemVersion();
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
    }
    else if (eventData.type == 'UPDATE') {
        themeStore.setTheme(params);

        switch (params.baseFontSize) {
            default: {
                figma.ui.resize(500, 800)
                break;
            }
            case 'large': {
                figma.ui.resize(560, 800)
                break;
            }
        }    
    }
    else if (eventData.type == 'RESET') {
        themeStore.resetDefaults();
        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: 1,
                params: themeStore.getTheme("light"),
                tokenLibraries: figlib.serialize()
            }
        }) 
    }
    else if(eventData.type == 'UPDATE_ACTIVE_THEME') {
        const selectedThemeData = themeStore.getTheme(params.theme);

        selectedThemeData.theme = params.theme;

        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: 1,
                params: selectedThemeData,
                customDarkMode: themeStore.isCustomDarkMode(),
                tokenLibraries: figlib.serialize()
            }
        })        
    }
    else if(eventData.type == 'ENABLE_CUSTOM_DARK_MODE') {
        themeStore.enableCustomDarkMode();

        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: 1,
                params: params,
                customDarkMode: themeStore.isCustomDarkMode(),
                tokenLibraries: figlib.serialize()
            }
        })        
    }
    else if(eventData.type == 'DISABLE_CUSTOM_DARK_MODE') {
        themeStore.disableCustomDarkMode();

        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: 1,
                params: {
                    ...themeStore.getTheme('light'),
                    theme: params.theme
                },
                customDarkMode: themeStore.isCustomDarkMode(),
                tokenLibraries: figlib.serialize()
            }
        })        
    }
};