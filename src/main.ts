import { convertFigmaColorToRgb, parseColorToken } from './utils/figma-colors';
import { getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import { findFigmaVariableCollectionByName, getFigmaCollection, resolveVariableType, setFigmaVariable } from "./utils/figma-variables";

import chroma from 'chroma-js';

import * as spacingTokens from './spacing-tokens';
import * as radiiTokens from './radii-tokens';
import * as typographyTokens from './typography-tokens';
import * as sizingTokens from './sizing-tokens';
import * as effectsTokens from './effect-tokens';
import * as opacityTokens from './opacity-tokens';

import { getSizeTokensSortFn, getColorTokensSortFn, getAlphaNumTokensSortFn  } from './utils/sort-tokens';
import { importTextStyles } from './utils/figma-text-styles';
import { renderAccents } from "./color-generators/render-accents";
import { generateGlobalAccentPalette, getGlobalAccent } from './color-generators/accent-palette-generator';
import { generateNeutrals, renderNeutrals } from './color-generators/neutrals-palette-generator';
import { parseReferenceGlobal, findVariableByReferences } from './utils/token-references';
import { toTitleCase } from './utils/text-to-title-case';
import { ImportFormData } from './import-ui';
import { defaultSettings, iconSizeName, radiiSizeName, spacingSizeName, typographySizeName, typographySizeValues } from './defaults';
import { importEffectStyles } from './utils/figma-effect-styles';
import { flattenObject } from './utils/flatten-object';
import { roundTwoDigits } from './utils/round-two-digits';
import { TypographyTokenValue } from './typography-tokens';
import { CollectionExportRecord, exportToJSON, importFromJSON } from './import-export-json';

console.clear();

export let globalTokens;

const collectionNames = new Map<string, string>([
    ["brandColors", "Color Theme"/*"Brand Color"*/],
    ["themeColors", "Color Theme"],
    ["componentColors", "Component Tokens"],
    ["spacing", "Spacing"],
    ["opacity", "Opacity"],
    ["radii", "Radii"],
    ["iconScale", "Icon Scale"],
    ["globalSizing", "Global Sizing"],
]);

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
        globalTokens = {
            ...getThemeColors('lightBase', params),
            ...getGlobalNeutrals(),
            ...getComponentColors(),
            ...typographyTokens.getTypographyTokens(params.baseFontSize, params.typeScale)
        };
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

async function initiateImport(params: ImportFormData) {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('componentColors'),
        modeName: "Default",
        data: getComponentColors(),
        sortFn: getColorTokensSortFn()
    });

    await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Light Base",
        data: getThemeColors('lightBase', params),
        sortFn: getColorTokensSortFn()
    });

    await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('spacing'),
        modeName: toTitleCase(params.spacing),
        data: spacingTokens[params.spacing],
        sortFn: getSizeTokensSortFn(),
    });

    await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('radii'),
        modeName: toTitleCase(params.radii),
        data: radiiTokens[params.radii],
        sortFn: getSizeTokensSortFn(),
    });

    await getCollectionAndPrepareTokens({
        collectionName: "Type Scale",
        modeName: toTitleCase(params.baseFontSize),
        data: typographyTokens[params.baseFontSize],
        sortFn: getSizeTokensSortFn(),
    });

    await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('opacity'),
        modeName: toTitleCase("default"),
        data: opacityTokens.opacity,
        sortFn: getAlphaNumTokensSortFn(),
    });

    await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('globalSizing'),
        modeName: toTitleCase("default"),
        data: sizingTokens.global,
        sortFn: getAlphaNumTokensSortFn(),
    });
}

function generateVariablesForPlayground(data: ImportFormData, isPlayground = false) {
    if (isPlayground === false) {
        return
    };

    const contrastRatios = {};

    const primaryColorHUE = data.primary;
    const shades = getGlobalAccent(
        data[primaryColorHUE],
        data.accentSaturation,
        data.accentMinLuminance,
        data.accentMidLuminance,
        data.accentMaxLuminance
    );

    Object.entries(shades).forEach(([name, token]) => {
        token.scopes = [];

        let chromaColor = chroma(token.$value);
        const contrast1 = roundTwoDigits(chroma.contrast(chroma.hsl([0, 0, 1]), chromaColor));
        const contrast2 = roundTwoDigits(chroma.contrast(chroma.hsl([0, 0, 0.22]), chromaColor));

        contrastRatios[`_accent_${name}_vs_light`] = {
            "$value": contrast1.toString(),
            "$type": "string",
            "scopes": []
        }
        contrastRatios[`_accent_${name}_vs_dark`] = {
            "$value": contrast2.toString(),
            "$type": "string",
            "scopes": []
        }
    });

    importVariables({
        collectionName: "_Playground",
        modeName: "Default",
        data: {
            ...flattenObject({ '_global-accent': shades }),
            ...contrastRatios,
            '_primary-color-hue': {
                "$value": data[data.primary].toString(),
                "$type": "string",
                "scopes": []
            },
            '_primary-color': {
                "$value": data.primary,
                "$type": "string",
                "scopes": []
            },
            '_success-color': {
                "$value": data.success,
                "$type": "string",
                "scopes": []
            },
            '_warning-color': {
                "$value": data.warning,
                "$type": "string",
                "scopes": []
            },
            '_danger-color': {
                "$value": data.danger,
                "$type": "string",
                "scopes": []
            },
            '_info-color': {
                "$value": data.info,
                "$type": "string",
                "scopes": []
            },
        }
    });
}

async function importAllTokens(params: ImportFormData) {
    figma.root.setPluginData('SDS', JSON.stringify(params));

    const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
    generateVariablesForPlayground(params, isPlayground);

    await importColorTheme(params);

    globalTokens = {
        ...globalTokens,
        ...typographyTokens.getTypographyTokens(params.baseFontSize, params.typeScale)
    };

    await importVariables({
        collectionName: collectionNames.get('componentColors'),
        modeName: "Default",
        data: getComponentColors()
    });

    await importSizeTokens({
        type: 'spacing',
        collectionName: collectionNames.get('spacing'),
        params: params,
        defaultMode: params.spacing,
        defaultOrder: spacingSizeName,
        tokens: spacingTokens.getSpacingTokens(params.verticalSpacing)
    });

    await importSizeTokens({
        type: 'radii',
        collectionName: collectionNames.get('radii'),
        params: params,
        defaultMode: params.radii,
        defaultOrder: radiiSizeName,
        tokens: radiiTokens
    });

    await importTypeFaceTokens();

    await importSizeTokens({
        type: 'typeScale',
        collectionName: "Type Scale",
        params: params,
        defaultMode: params.baseFontSize,
        defaultOrder: typographySizeName,
        tokens: typographyTokens
    });

    await importVariables({
        collectionName: collectionNames.get('opacity'),
        modeName: "Default",
        data: opacityTokens.opacity
    });

    await importVariables({
        collectionName: collectionNames.get('globalSizing'),
        modeName: "Default",
        data: sizingTokens.global
    });

    await importTextStyles(typographyTokens.getTypographyTokens(params.baseFontSize, params.typeScale));

    await importEffectStyles(effectsTokens.elevation);

    figma.notify("Figma variables has been imported");

    figma.ui.postMessage("importCompleted");
}

function importColorTheme(params: ImportFormData) {
    let themeColors = getThemeColors('lightBase', params);

    globalTokens = {
        ...getGlobalNeutrals(),
        ...getComponentColors(),
        ...themeColors
    };

    console.log('Importing Light Base', themeColors);

    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Light Base",
        data: themeColors
    });

    themeColors = getThemeColors('darkBase', params);
    globalTokens = Object.assign(globalTokens, themeColors);

    console.log('Importing Dark Base', themeColors);

    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Dark Base",
        data: themeColors
    });

    themeColors = getThemeColors('darkElevated', params);
    globalTokens = Object.assign(globalTokens, themeColors);

    console.log('Importing Dark Elevated', themeColors);

    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Dark Elevated",
        data: themeColors
    });
}

async function importSizeTokens(data: {
    type: "spacing" | "radii" | "typeScale" | "iconScale" | "typeFace";
    defaultMode: string;
    params: ImportFormData,
    collectionName: string,
    defaultOrder: string[],
    tokens: any;
    isSingleMode?: boolean;
}) {
    const tokens = data.tokens;
    const isSingleMode = data.isSingleMode || false;
    const singleCollection = data.params.singleCollection;
    const defaultMode = data.defaultMode;

    const defaultOrder = data.defaultOrder.filter(item => item != defaultMode)
    defaultOrder.splice(0, 0, defaultMode);

    defaultOrder.length = isSingleMode ? 1 : defaultOrder.length;

    let index = 0;
    for(const modeName of defaultOrder) {
        await importVariables({
            collectionName: singleCollection ? "UI Scale" : data.collectionName,
            modeName: toTitleCase(modeName),
            modeIndex: index++,
            data: tokens[modeName],
            isSingleMode: isSingleMode
        });    
    }
}

export async function getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
    let modeId;
    const { collection, isNew } = await getFigmaCollection(collectionName);

    if (isNew || isSingleMode) {
        modeId = collection.modes[0].modeId;
        collection.renameMode(modeId, modeName);
    }
    else {
        const mode = modeIndex < 0 ? collection.modes.find(mode => mode.name === modeName) : collection.modes[modeIndex];
        if (!mode) {
            try {
                modeId = collection.addMode(modeName)
            }
            catch(e) {
                figma.notify("Cannot create more than one mode. Is your file under Pro team or org plan?", {error: true});
                console.error(e);
                figma.closePlugin();
            }
        }
        else {
            modeId = mode.modeId;
            collection.renameMode(modeId, modeName);
        }
    }

    let transformedTokens = Object.entries(data as DesignTokensRaw).map(([key, object]) => {
        return {
            name: key,
            ...object
        }
    })

    if (sortFn != null) {
        transformedTokens.sort(sortFn);
    }

    if (isNew) {
        // create variables straight away so there is a way to make 
        // references / aliases without additional pass
        for(const token of transformedTokens) {
            const type = resolveVariableType(token.$type);
            await setFigmaVariable(collection, modeId, type, token.name)
        }
    }

    return {
        tokens: transformedTokens,
        collection,
        modeId,
        type: data.$type
    }
}

export async function importVariables({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false, overrideValues = true }) {
    const {
        tokens,
        collection,
        modeId,
        type
    } = await getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex, data, sortFn, isSingleMode })

    // await Promise.all(tokens.map(async (token: DesignToken) => {
    // }));

    for(const token of tokens) {
        await processToken({
            collection,
            modeId,
            type: token.$type,
            variableName: token.name,
            token: token,
            overrideValues: overrideValues
        });
    }

}


async function importTypeFaceTokens() {
    const collectionName = 'Type Face';
    const collection = await findFigmaVariableCollectionByName(collectionName);

    if(collection == null) {
        await importVariables({
            collectionName: collectionName,
            modeName: "Default",
            data: typographyTokens.typeFace
        });
    }
}

export interface DesignTokensRaw {
    [key: string]: DesignToken
}

export interface DesignToken {
    $value: string | object[];
    $type: string;
    name?: string;
    private?: boolean;
    scopes?: string[];
    description?: string;
    documentationLink?: DocumentationLink;
    adjustments?: any;
}

async function processToken({
    collection,
    modeId,
    type,
    variableName,
    token,
    overrideValues = true
}) {
    type = type || token.$type;
    // if key is a meta field, move on
    if (variableName.charAt(0) === "$") {
        return;
    }

    let value = null;
    let valueString = `${token.$value}`

    let referenceVar = await findVariableByReferences(valueString.trim());

    if (referenceVar) {
        value = {
            type: "VARIABLE_ALIAS",
            id: referenceVar.id,
        }
    }

    if (token.$value !== undefined) {
        if (type === "color") {
            if (value == null) {
                value = parseColorToken(token, globalTokens);
            }

            return await setFigmaVariable(
                collection,
                modeId,
                "COLOR",
                variableName,
                value,
                token.scopes || ['ALL_SCOPES'],
                token.description || null
            );
        }

        if (type === "number") {
            if (value == null) {
                value = parseReferenceGlobal(valueString, globalTokens);
                value = parseFloat(value);
            }
            return await setFigmaVariable(
                collection,
                modeId,
                "FLOAT",
                variableName,
                value,
                token.scopes,
                token.description || null
            );
        }

        if (type === "string") {
            if (value == null) {
                value = parseReferenceGlobal(valueString, globalTokens);
            }
            return await setFigmaVariable(
                collection,
                modeId,
                "STRING",
                variableName,
                value,
                token.scopes,
                token.description || null
            ).catch(function(err) {
                console.log(err.message); // some coding error in handling happened
            }); 
        }

        console.error("unsupported type", type, token);

    } else {
        console.warn('recursion in ', token);
    }
}