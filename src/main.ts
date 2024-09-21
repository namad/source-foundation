import { getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import * as typographyTokens from './typography-tokens';

import { renderAccents } from "./color-generators/render-accents";
import { generateGlobalAccentPalette } from './color-generators/accent-palette-generator';
import { generateNeutrals, renderNeutrals } from './color-generators/neutrals-palette-generator';
import { addToGlobalTokensDictionary } from './utils/token-references';
import { ImportFormData } from './import-ui';
import { CollectionExportRecord, exportToJSON, importFromJSON } from './import-export-json';
import { importAllTokens, initiateImport } from './import-tokens';

console.clear();

(async () => {
    const fontDetails = await typographyTokens.getFontDetails();
    await Promise.all(
        fontDetails.map(async item =>
            await figma.loadFontAsync(item as FontName)
        )
    );

    figma.showUI(__html__, {
        width: 560,
        height: 720,
        themeColors: true,
    });

})()


interface MessagePayload {
    type: string;
    params: ImportFormData;
    data?: CollectionExportRecord[];
    format?:  'hex'|'hsl'|'rgba';
    alertParams?: any,
    fileName?: string;
}

figma.ui.onmessage = async (eventData: MessagePayload) => {
    console.log("code received message", eventData);
    const params = eventData.params;

    if (eventData.type === "IMPORT") {
        await initiateImport(params);
        await importAllTokens(params);
    }
    else if (eventData.type === "EXPORT") {
        await exportToJSON(eventData.format);
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

        figma.ui.postMessage("importCompleted");
    }
    else if (eventData.type === "ALERT") {
        figma.notify(`${eventData.data}`, eventData.alertParams || {});
    }
    else if (eventData.type === "RENDER_ACCENTS") {
        const lightAccentTokens = generateGlobalAccentPalette('light', params);
        const darkAccentTokens = generateGlobalAccentPalette('dark', params);
        const frameLightPalette = renderAccents(lightAccentTokens, 'Light Mode Accents');
        const frameDarkPalette = renderAccents(darkAccentTokens, 'Dark Mode Accents');
        frameDarkPalette.y = frameLightPalette.height + 64;
    }
    else if (eventData.type === "RENDER_NEUTRALS") {
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