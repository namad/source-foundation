import { convertFigmaColorToRgb, parseColor } from './utils/figma-colors';
import { getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import { getFigmaCollection, setFigmaVariable, findFigmaVariableByName } from "./utils/figma-variables";
import { sortColorTokens } from './utils/sort-palette';
import * as spacing from './spacing-tokens';
import * as radii from './radii-tokens';
import * as typescale from './typescale-tokens';
import * as sizing from './sizing-tokens';

import * as effects from './effect-tokens';

import { sortSizeTokens } from './utils/sort-sizes';
import { importTextStyles } from './utils/figma-text-styles';
import { renderAccents } from "./color-tokens/render-accents";
import { generateGlobalAccentPalette, generateSystemAccentPalette } from './color-tokens/accent-palette-generator2';
import { generateNeutrals, renderNeutrals } from './color-tokens/neutrals-palette-generator';
import { bindVariablesAndStyles } from './utils/variables-to-styles';
import { parseReferenceGlobal, parseVariableReferences } from './utils/token-references';
import { toTitleCase } from './utils/text-to-title-case';
import { ImportFormData } from './ui/import';
import { iconSizeName, radiiSizeName, spacingSizeName, typographySizeName } from './defaults';
import { processComponents } from './fix-layers';
import { importEffectStyles } from './utils/figma-effect-styles';

console.clear();

let GlobalTokens;

(async () => {
    await Promise.all(
        typescale.getFontDetails().map(async item =>
            await figma.loadFontAsync(item as FontName)
        )
    );

    if (figma.command === "import") {
        figma.showUI(__uiFiles__["import"], {
            width: 480,
            height: 600,
            themeColors: true,
        });
    }

    if (figma.command === "export") {
        figma.showUI(__uiFiles__["export"], {
            width: 500,
            height: 500,
            themeColors: true,
        });
    }

    if (figma.command == "bindToStyles") {
        bindVariablesAndStyles();
        figma.closePlugin();
    }

    if (figma.command == "fixLayers") {

        await processComponents();
        figma.closePlugin();
    }
})()


interface MessagePayload {
    type: string;
    params: ImportFormData;
}

figma.ui.onmessage = (eventData: MessagePayload) => {
    console.log("code received message", eventData);
    const params = eventData.params;

    if (eventData.type === "IMPORT") {

        importSystemColorTokens(params);

        importAliases({
            collectionName: "Component Tokens",
            modeName: "Default",
            data: getComponentColors(),
            sortFn: sortColorTokens
        });

        importSizeTokens({
            type: 'spacing',
            collectionName: 'Spacing',
            params: params,
            defaultMode: params.spacing,
            defaultOrder: spacingSizeName,
            tokens: spacing
        });

        importSizeTokens({
            type: 'radii',
            collectionName: 'Radii',
            params: params,
            defaultMode: params.radii,
            defaultOrder: radiiSizeName,
            tokens: radii
        });

        importSizeTokens({
            type: 'typeScale',
            collectionName: 'Type Scale',
            params: params,
            defaultMode: params.typeScale,
            defaultOrder: typographySizeName,
            tokens: typescale,
            isSingleMode: true
        });

        // ICONS SCALE
        importSizeTokens({
            type: 'iconScale',
            collectionName: 'Icon Scale',
            params: params,
            defaultMode: params.typeScale == 'large' ? 'touch' : 'base',
            defaultOrder: iconSizeName,
            tokens: sizing
        });

        // importVariables({
        //     collectionName: params.singleCollection ? "UI Scale" : "Icon Scale",
        //     modeName: "Desktop",
        //     data: params.typeScale == 'large' ? sizing.touch : sizing.base,
        //     sortFn: sortSizeTokens,
        //     isSingleMode: true
        // });

        GlobalTokens = {
            ...GlobalTokens,
            ...typescale.getTypograohyTokens(params.typeScale)
        }
        importTextStyles(typescale.getTypograohyTokens(params.typeScale));

        // import effects for default theme which is light one
        importEffectStyles(effects.elevation);

        figma.notify("✅ Figma variables has been imported");

    } else if (eventData.type === "EXPORT") {
        // exportToJSON(eventData.format);
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
};



function importSystemColorTokens(params: ImportFormData) {
    let themeColors = getThemeColors('lightBase', params);

    GlobalTokens = {
        ...getGlobalNeutrals(),
        ...themeColors
    };

    importVariables({
        collectionName: "Color Theme",
        modeName: "Light Base",
        data: themeColors,
        sortFn: sortColorTokens
    });


    themeColors = getThemeColors('darkBase', params);
    GlobalTokens = Object.assign(GlobalTokens, themeColors);

    importVariables({
        collectionName: "Color Theme",
        modeName: "Dark Base",
        data: themeColors
    });

    themeColors = getThemeColors('darkElevated', params);
    GlobalTokens = Object.assign(GlobalTokens, themeColors);

    importVariables({
        collectionName: "Color Theme",
        modeName: "Dark Elevated",
        data: themeColors
    });
}

function importSizeTokens(data: {
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

    defaultOrder.forEach((modeName, index) => {
        importVariables({
            collectionName: singleCollection ? "UI Scale" : data.collectionName,
            modeName: toTitleCase(modeName),
            modeIndex: index,
            data: tokens[modeName],
            sortFn: sortSizeTokens,
            isSingleMode: isSingleMode
        });
    })
}

function createVariableAlias(collection, modeId, variableName, sourceVariable: Variable, type?) {
    return setFigmaVariable(collection, modeId, type || sourceVariable.resolvedType, variableName, {
        type: "VARIABLE_ALIAS",
        id: `${sourceVariable.id}`,
    });
}

function prepareTokens({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
    let modeId;
    const { collection, isNew } = getFigmaCollection(collectionName);

    if (isNew || isSingleMode) {
        modeId = collection.modes[0].modeId;
        collection.renameMode(modeId, modeName);
    } else {
        const mode = modeIndex < 0 ? collection.modes.find(mode => mode.name === modeName) : collection.modes[modeIndex];

        if (!mode) {
            modeId = collection.addMode(modeName)
        } else {
            modeId = mode.modeId;
            collection.renameMode(modeId, modeName);
        }
    }

    let transformedTokens = [];

    Object.entries(data).forEach(([key, object]) => {
        object["name"] = key;
        transformedTokens.push(object);
    });

    let sortedTokens = transformedTokens;

    if (sortFn != null) {
        sortedTokens = transformedTokens.sort(sortFn);
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
    } = prepareTokens({ collectionName, modeName, modeIndex, data, sortFn, isSingleMode })

    return tokens.map((token: DesignToken) => {
        return processToken({
            collection,
            modeId,
            type: token.$type,
            variableName: token.name,
            token: token
        });
    })
}

function importAliases({ collectionName, modeName, data, sortFn = null }) {
    const {
        tokens,
        collection,
        modeId,
        type
    } = prepareTokens({ collectionName, modeName, data, sortFn })

    loopAliases(tokens, collection, modeId, data);
}

function loopAliases(tokens: any[], collection: VariableCollection, modeId: any, data: any) {

    const missedTokens = tokens.filter(token => {
        const result = processAlias({
            collection,
            modeId,
            type: data.$type,
            variableName: token.name,
            token: token
        });

        return (result.success !== true);
    });

    if (missedTokens.length) {
        return loopAliases(missedTokens, collection, modeId, data)
    }
}

interface AliasToken {
    name: string;
    referenceName: string;
    type: string;
}

function processAlias({
    collection,
    modeId,
    type,
    variableName,
    token
}) {
    let missedTokens = [];

    const value = token.$value;
    const sourceVariable = parseVariableReferences(value);

    if (sourceVariable) {
        return {
            success: true,
            result: createVariableAlias(collection, modeId, variableName, sourceVariable, type)
        }
    }
    else {
        return {
            success: false,
            result: {
                collection,
                modeId,
                type,
                variableName,
                token
            }
        }
    }
}

function isAlias(value) {
    return value.toString().trim().charAt(0) === "{";
}

export interface DesignToken {
    $value: string | object[];
    $type: string;
    name: string;
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
            return setFigmaVariable(
                collection,
                modeId,
                "COLOR",
                variableName,
                parseColor(token, GlobalTokens)
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
                parseReferenceGlobal(token.$value, GlobalTokens),
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

