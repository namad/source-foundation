import { convertFigmaColorToRgb, parseColor } from './utils/figma-colors';
import { getBrandColors, getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import { getFigmaCollection, resolveVariableType, setFigmaVariable } from "./utils/figma-variables";
import { sortColorTokens } from './utils/sort-palette';

import * as spacing from './spacing-tokens';
import * as radii from './radii-tokens';
import * as typescale from './typescale-tokens';
import * as sizing from './sizing-tokens';
import * as effects from './effect-tokens';

import { sortSizeTokens } from './utils/sort-sizes';
import { importTextStyles } from './utils/figma-text-styles';
import { renderAccents } from "./color-tokens/render-accents";
import { generateGlobalAccentPalette } from './color-tokens/accent-palette-generator';
import { generateNeutrals, renderNeutrals } from './color-tokens/neutrals-palette-generator';
import { bindVariablesAndStyles } from './utils/variables-to-styles';
import { parseReferenceGlobal, findVariableByReferences } from './utils/token-references';
import { toTitleCase } from './utils/text-to-title-case';
import { ImportFormData } from './import';
import { iconSizeName, radiiSizeName, spacingSizeName, typographySizeName } from './defaults';
import { processComponents } from './fix-layers';
import { importEffectStyles } from './utils/figma-effect-styles';
import { delayAsync } from './utils/delay-async';
import { updateElevationComponents } from './utils/update-elevation-components';

console.clear();

let globalTokens;

const collectionNames = new Map<string, string>([
    ["brandColors", "Color Theme"/*"Brand Color"*/],
    ["themeColors", "Color Theme"],
    ["componentColors", "Component Tokens"],
    ["spacing", "Spacing"],
    ["radii", "Radii"],
    ["iconScale", "Icon Scale"],
]);

figma.showUI(__html__, {
    width: 560,
    height: 720,
    themeColors: true,
});


interface MessagePayload {
    type: string;
    params: ImportFormData;
}

figma.ui.onmessage = (eventData: MessagePayload) => {
    console.log("code received message", eventData);
    const params = eventData.params;

    if (eventData.type === "IMPORT") {
        initiateImport(params);
        importThemeColors(params);
    } 
    else if (eventData.type === "EXPORT") {
        // exportToJSON(eventData.format);
    }
    else if (eventData.type === "ALERT") {
        figma.notify(`✅ ${eventData.params}`);
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
        const step = params.distance * 100;
        let filteredTokens = {};

        Object.entries(neutralTokens).forEach(([name, value], index) => {
            if (index % step == 0) {
                filteredTokens[name] = value;
            }
        });
        renderNeutrals(filteredTokens, `Global Neutrals ${eventData.params.distance * 100}% Distance`);
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
};

function initiateImport(params: ImportFormData) {
    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('componentColors'),
        modeName: "Default",
        data: getComponentColors(),
        sortFn: sortColorTokens
    });

   getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Light Base",
        modeIndex: 0,
        isSingleMode: true,
        data: getThemeColors('lightBase', params),
        sortFn: sortColorTokens
    });
}


function importThemeColors(params: ImportFormData) {
    const themeName = params.theme == 'light' ? 'lightBase' : 'darkElevated';
    const modeName = params.theme == 'light' ? 'Light' : 'Dark';
    let themeColors = getThemeColors(themeName, params);

    globalTokens = {
        ...getBrandColors(params.primary),
        ...getGlobalNeutrals(),
        ...themeColors
    };

    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: modeName,
        modeIndex: 0,
        data: themeColors,
        sortFn: sortColorTokens,
        isSingleMode: true
    });
}

function getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
    let modeId;
    const { collection, isNew } = getFigmaCollection(collectionName);

    if (isNew || isSingleMode) {
        modeId = collection.modes[0].modeId;
        collection.renameMode(modeId, modeName);
    } 
    else {
        const mode = modeIndex < 0 ? collection.modes.find(mode => mode.name === modeName) : collection.modes[modeIndex];
        if (!mode) {
            modeId = collection.addMode(modeName)
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
        sortedTokens.forEach(token => {
            const type = resolveVariableType(token.$type);
            setFigmaVariable(collection, modeId, type, token.name)
        });
    }

    return {
        tokens: sortedTokens,
        collection,
        modeId,
        type: data.$type
    }
}

function importVariables({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
    const {
        tokens,
        collection,
        modeId,
        type
    } = getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex, data, sortFn, isSingleMode })

    return tokens.map((token: DesignToken) => {
        return processToken({
            collection,
            modeId,
            type: token.$type,
            variableName: token.name,
            token: token
        });
    });

    
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
    adjustments?: any;
}

function processToken({
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
            let colorValue = parseColor(token, globalTokens);
            let referenceVar = findVariableByReferences(token.$value.trim());

            if(referenceVar) {
                colorValue = {
                    type: "VARIABLE_ALIAS",
                    id: referenceVar.id,
                }
            }

            return setFigmaVariable(
                collection,
                modeId,
                "COLOR",
                variableName,
                colorValue,
                [],
                token.description || null
            );
        }
        if (type === "number") {
            return setFigmaVariable(
                collection,
                modeId,
                "FLOAT",
                variableName,
                parseInt(token.$value),
                token.scopes,
                token.description || null
            );
        }

        try {
            return setFigmaVariable(
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

function exportToJSON(colorFormat?) {
    const collections = figma.variables.getLocalVariableCollections();
    const files = [];
    collections.forEach((collection) =>
        files.push(...exportCollection(collection, colorFormat))
    );
    figma.ui.postMessage({ type: "EXPORT_RESULT", files });
}

interface File {
    fileName: string,
    body: {
        $type: string,
        $value: string
    }
}

function exportCollection({ name, modes, variableIds }, colorFormat?) {
    const files = [];
    modes.forEach((mode) => {
        const file = { fileName: `${name}.${mode.name}.tokens.json`, body: {} } as File;
        variableIds.sort().forEach((variableId) => {
            const { name, resolvedType, valuesByMode } = figma.variables.getVariableById(variableId);

            console.log(name);

            const value = valuesByMode[mode.modeId] as any;
            if (value !== undefined && ["COLOR", "FLOAT"].includes(resolvedType)) {
                let obj = file.body;
                name.split("/").forEach((groupName) => {
                    obj[groupName] = obj[groupName] || {};
                    obj = obj[groupName];
                });
                obj.$type = resolvedType === "COLOR" ? "color" : "number";
                if (value.type === "VARIABLE_ALIAS") {
                    obj.$value = `{${figma.variables
                        .getVariableById(value.id)
                        .name.replace(/\//g, ".")}}`;
                } else {
                    obj.$value = resolvedType === "COLOR" ? convertFigmaColorToRgb(value, colorFormat) : value;
                }
            }
        });
        files.push(file);
    });
    return files;
}

