import { convertFigmaColorToRgb, parseColorToken } from './utils/figma-colors';
import { getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import { getFigmaCollection, resolveVariableType, setFigmaVariable } from "./utils/figma-variables";

import chroma from 'chroma-js';

import * as spacingTokens from './spacing-tokens';
import * as radiiTokens from './radii-tokens';
import * as typescaleTokens from './typescale-tokens';
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
import { iconSizeName, radiiSizeName, spacingSizeName, typographySizeName } from './defaults';
import { importEffectStyles } from './utils/figma-effect-styles';
import { updateElevationComponents } from './utils/update-elevation-components';
import { flattenObject } from './utils/flatten-object';
import { roundTwoDigits } from './utils/round-two-digits';

console.clear();

let globalTokens;

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
    const fontDetails = await typescaleTokens.getFontDetails();
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
    format?: string;
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
        await importFromJSON(eventData.data);
    }
    else if (eventData.type === "ALERT") {
        figma.notify(`${eventData.params}`);
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
        collectionName: collectionNames.get('iconScale'),
        modeName: toTitleCase("base"),
        data: sizingTokens.base,
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
        tokens: spacingTokens
    });

    await importSizeTokens({
        type: 'radii',
        collectionName: collectionNames.get('radii'),
        params: params,
        defaultMode: params.radii,
        defaultOrder: radiiSizeName,
        tokens: radiiTokens
    });
    await importSizeTokens({
        type: 'typeScale',
        collectionName: 'Type Scale',
        params: params,
        defaultMode: params.baseFontSize,
        defaultOrder: typographySizeName,
        tokens: typescaleTokens,
        isSingleMode: true
    });

    // ICONS SCALE
    await importSizeTokens({
        type: 'iconScale',
        collectionName: collectionNames.get('iconScale'),
        params: params,
        defaultMode: 'base',
        defaultOrder: iconSizeName,
        tokens: sizingTokens
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


    globalTokens = {
        ...globalTokens,
        ...typescaleTokens.getTypograohyTokens(params.baseFontSize, params.typeScale)
    };

    await importTextStyles(typescaleTokens.getTypograohyTokens(params.baseFontSize, params.typeScale));

    await importEffects();

    figma.notify("Figma variables has been imported");

    figma.ui.postMessage("importCompleted");
}

async function importEffects() {
    // import effects for default theme which is light one
    await importEffectStyles(effectsTokens.elevation);
    updateElevationComponents(effectsTokens.getElevationTokens());
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
        data: themeColors,
        sortFn: getColorTokensSortFn
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
    type: "spacing" | "radii" | "typeScale" | "iconScale";
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

async function getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
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

    let sortedTokens = transformedTokens;

    if (sortFn != null) {
        sortedTokens = transformedTokens.sort(sortFn);
    }

    if (isNew) {
        // create variables straight away so there is a way to make 
        // references / aliases without additional pass
        for(const token of sortedTokens) {
            const type = resolveVariableType(token.$type);
            await setFigmaVariable(collection, modeId, type, token.name)
        }
    }

    return {
        tokens: sortedTokens,
        collection,
        modeId,
        type: data.$type
    }
}

async function importVariables({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
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
            token: token
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
    token
}) {
    type = type || token.$type;
    // if key is a meta field, move on
    if (variableName.charAt(0) === "$") {
        return;
    }

    if (token.$value !== undefined) {
        if (type === "color") {
            let colorValue;
            let referenceVar = await findVariableByReferences(token.$value.trim());

            if (referenceVar) {
                colorValue = {
                    type: "VARIABLE_ALIAS",
                    id: referenceVar.id,
                }
            }
            else {
                colorValue = parseColorToken(token, globalTokens);
            }

            return await setFigmaVariable(
                collection,
                modeId,
                "COLOR",
                variableName,
                colorValue,
                token.scopes || ['ALL_SCOPES'],
                token.description || null
            );
        }
        if (type === "number") {
            return await setFigmaVariable(
                collection,
                modeId,
                "FLOAT",
                variableName,
                parseFloat(token.$value),
                token.scopes,
                token.description || null
            );
        }

        try {
            return await setFigmaVariable(
                collection,
                modeId,
                "STRING",
                variableName,
                parseReferenceGlobal(token.$value, globalTokens),
                token.scopes,
                token.description || null
            );
        }
        catch (e) {
            console.error("unsupported type", type, token);
        }

    } else {
        console.warn('recursion in ', token);
    }
}
async function importFromJSON(data:CollectionExportRecord[]) {

    const collections = [];

    const filteredData = data.filter(record => {
        const collectionName = record.collection;

        if(collections.indexOf(collectionName) < 0) {
            collections.push(collectionName);
            return record;
        }

        return false;
    })

    debugger

    await Promise.all(filteredData.map(async (collectionRecord) => {
        await getCollectionAndPrepareTokens({
            collectionName: collectionRecord.collection,
            modeName: collectionRecord.mode,
            data: flattenObject(collectionRecord.tokens)
        });    
    }));

    debugger

    for(const collectionRecord of data) {
        await importVariables({
            collectionName: collectionRecord.collection,
            modeName: collectionRecord.mode,
            data: flattenObject(collectionRecord.tokens)        
        }) 
    }
}

async function exportToJSON(colorFormat?) {
    const collections = await figma.variables.getLocalVariableCollectionsAsync();
    const files = [];
    for(const collection of collections) {
        const exportedData = await exportCollection(collection, colorFormat);
        files.push(...exportedData)
    }
    figma.ui.postMessage({ type: "EXPORT_RESULT", files });
}

export interface CollectionExportRecord {
    collection: string,
    mode: string,
    tokens: {
        $type: string,
        $value: string
    }
}

async function exportCollection({ name, modes, variableIds }, colorFormat?) {
    const collections: CollectionExportRecord[] = [];
    const variableReferences = variableIds.sort();

    for(const mode of modes){
        const collection = { collection: name,  mode: mode.name, tokens: {} } as CollectionExportRecord;
        
        for(const variableId of variableReferences) {
            const { name, resolvedType, valuesByMode } = await figma.variables.getVariableByIdAsync(variableId);

            console.log(name);

            const value = valuesByMode[mode.modeId] as any;
            if (value !== undefined && ["COLOR", "FLOAT"].includes(resolvedType)) {
                let obj = collection.tokens;
                name.split("/").forEach((groupName) => {
                    obj[groupName] = obj[groupName] || {};
                    obj = obj[groupName];
                });
                obj.$type = resolvedType === "COLOR" ? "color" : "number";
                if (value.type === "VARIABLE_ALIAS") {
                    const variable = await figma.variables.getVariableByIdAsync(value.id);
                    obj.$value = `{${variable.name.replace(/\//g, ".")}}`;
                } else {
                    obj.$value = resolvedType === "COLOR" ? convertFigmaColorToRgb(value, colorFormat) : value;
                }
            }
        };
        collections.push(collection);
    };
    return collections;
}

