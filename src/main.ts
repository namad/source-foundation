import { getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import * as typographyTokens from './typography-tokens';

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
    data?: CollectionExportRecord[];
    colorFormat?:  'hex'|'hsl'|'rgba';
    colorName?: ConfigColors;
    alertParams?: any,
    fileName?: string;
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
        await initiateImport(params as ImportFormData);
        await importAllTokens(params as ImportFormData);
    }
    else if (eventData.type === "EXPORT") {
        await exportToJSON(eventData.exportJSONParams, eventData.params);
        await exportBrandVariantToJSON(eventData.exportBrandParams, eventData.params);
    }
    else if (eventData.type === "IMPORT_JSON") {
        addToGlobalTokensDictionary({
            ...getGlobalNeutrals(params),
            ...typographyTokens.getTypographyTokens(params.baseFontSize, params.typeScale)
        });
        
        await importFromJSON(eventData.data, eventData.params).catch(error => {
            console.error(error);
            figma.ui.postMessage("importCompleted");
            figma.notify(error, {error: true});
        });

        figma.notify(`Figma variables has been imported`);
        figma.ui.postMessage("importCompleted");
    }
    else if (eventData.type === "ALERT") {
        figma.notify(`${eventData.data}`, eventData.alertParams || {});
    }
    else if (eventData.type === "RENDER_ACCENTS") {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const lightAccentTokens = generateGlobalAccentPalette('light', params);
        const darkAccentTokens = generateGlobalAccentPalette('dark', params);
        const frameLightPalette = renderAccents(lightAccentTokens, 'Light Mode Accents');
        const frameDarkPalette = renderAccents(darkAccentTokens, 'Dark Mode Accents');
        frameDarkPalette.y = frameLightPalette.height + 64;
    }
    else if (eventData.type === "RENDER_NEUTRALS") {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const neutralTokens = generateNeutrals(params);
        renderNeutrals(neutralTokens, `Global Neutrals`);
    }
    else if (eventData.type === "LOADED") {
        try {
            const pluginData = figma.root.getPluginData('SDS');
            const data = JSON.parse(pluginData);
            figma.ui.postMessage(data)
        }
        catch (e) {
            console.warn('failed to read plugin data', e);
        }
    }
    else if (eventData.type == 'RESIZE') {
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
};