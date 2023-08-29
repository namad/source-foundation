import { convertFigmaColorToRgb, parseColor } from './utils/figma-colors';
import { getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import { getFigmaCollection, setFigmaVariable, findFigmaVariableByName } from "./utils/figma-variables";
import { sortColorTokens } from './utils/sort-palette';
import * as spacing from './spacing-tokens';
import * as radii from './radii-tokens';
import * as typescale from './typescale-tokens';
import { sortSizeTokens } from './utils/sort-sizes';
import { importTextStyles } from './utils/figma-text-styles';
import { renderAccents } from "./color-tokens/render-accents";
import { generateSystemAccentPalette } from './color-tokens/accent-palette-generator2';
import { generateNeutrals, renderNeutrals } from './color-tokens/neutrals-palette-generator';
import { bindVariablesAndStyles } from './utils/variables-to-styles';
import { parseReferenceGlobal, parseVariableReferences } from './utils/token-references';
import { toTitleCase } from './utils/text-to-title-case';

console.clear();

let GlobalTokens;

(async () => {
    await Promise.all(
        typescale.getFontDetails().map(async item =>
            await figma.loadFontAsync(item as FontName)
        )
    );
})()

figma.ui.onmessage = (eventData) => {
    console.log("code received message", eventData);
    if (eventData.type === "IMPORT") {

        

        let themeColors = getThemeColors('lightBase', eventData);

        GlobalTokens = {
            ...getGlobalNeutrals(),
            ...themeColors
        }

        importVariables({
            collectionName: "Color / System",
            modeName: "Light Base", 
            data: themeColors,
            sortFn: sortColorTokens
        });



        themeColors = getThemeColors('darkBase', eventData);
        GlobalTokens = Object.assign(GlobalTokens, themeColors);

        importVariables({
            collectionName: "Color / System",
            modeName: "Dark Base", 
            data: themeColors
        });

        themeColors = getThemeColors('darkElevated', eventData);
        GlobalTokens = Object.assign(GlobalTokens, themeColors);

        importVariables({
            collectionName: "Color / System",
            modeName: "Dark Elevated", 
            data: themeColors
        });

        importAliases({
            collectionName: "Color / Component",
            modeName: "Default", 
            data: getComponentColors(),
            sortFn: sortColorTokens
        });
        
        const singleCollection = eventData.singleCollection;

        // SPACING
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Spacing",
            modeName: toTitleCase(eventData.spacing), 
            data: spacing[eventData.spacing],
            sortFn: sortSizeTokens,
            isSingleMode: true
        });

        /*
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Spacing",
            modeName: "Base", 
            data: spacing.base
        });
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Spacing",
            modeName: "Large", 
            data: spacing.large
        });
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Spacing",
            modeName: "Touch", 
            data: spacing.touch
        });
        */

        // RADII
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Radii",
            modeName: toTitleCase(eventData.radii), 
            data: radii[eventData.radii],            
            sortFn: sortSizeTokens,
            isSingleMode: true
        });
        /*
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Radii",
            modeName: "Base", 
            data: radii.base
        });
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Radii",
            modeName: "Large", 
            data: radii.large
        });
        singleCollection && importVariables({
            collectionName: singleCollection ? "UI Scale" : "Radii",
            modeName: "Touch", 
            data: radii.large
        });
        */

        // TYPE SCALE
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Type Scale",
            modeName: toTitleCase(eventData.fontSize), 
            data: typescale[eventData.fontSize],
            sortFn: sortSizeTokens,
            isSingleMode: true
        });
        /*
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Type Scale",
            modeName: "Base", 
            data: typescale.base
        });
        importVariables({
            collectionName: singleCollection ? "UI Scale" : "Type Scale",
            modeName: "Large", 
            data: typescale.large
        });
        singleCollection && importVariables({
            collectionName: singleCollection ? "UI Scale" : "Type Scale",
            modeName: "Touch", 
            data: typescale.large
        });
        */

        GlobalTokens = {
            ...GlobalTokens,
            ...typescale.getTypograohyTokens(eventData.fontSize)
        }
        importTextStyles(typescale.getTypograohyTokens(eventData.fontSize));

        figma.notify("✅ Figma variables has been imported");

    } else if (eventData.type === "EXPORT") {
        exportToJSON(eventData.format);
    }
    else if (eventData.type === "RENDER_ACCENTS") {
        const lightAccentTokens = generateSystemAccentPalette('light', eventData.params);
        const darkAccentTokens = generateSystemAccentPalette('dark', eventData.params);
        const frameLightPalette = renderAccents(lightAccentTokens, 'Light Mode Accents');
        const frameDarkPalette =  renderAccents(darkAccentTokens, 'Dark Mode Accents');
        frameDarkPalette.y = frameLightPalette.height + 64;
    }
    else if (eventData.type === "RENDER_NEUTRALS") {
        const neutralTokens = generateNeutrals(eventData.params);
        const step = eventData.params.distance * 100;
        let filteredTokens = {};

        Object.entries(neutralTokens).forEach(([name, value], index) => {
            if (index % step == 0) {
                filteredTokens[name] = value;
            }
        });

        renderNeutrals(filteredTokens, `Global Neutrals ${eventData.params.distance * 100}% Distance`);
        console.warn('Not impletented');
    }
};

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

function createVariableAlias(collection, modeId, variableName, sourceVariable: Variable, type?) {
    return setFigmaVariable(collection, modeId, type || sourceVariable.resolvedType, variableName, {
        type: "VARIABLE_ALIAS",
        id: `${sourceVariable.id}`,
    });
}

function prepareTokens({ collectionName, modeName, data, sortFn = null, isSingleMode = false }) {
    let modeId;
    const { collection, isNew } = getFigmaCollection(collectionName);

    if (isNew || isSingleMode) {
        modeId = collection.modes[0].modeId;
        collection.renameMode(modeId, modeName);
    } else {
        const mode = collection.modes.find(mode => mode.name === modeName);

        if (!mode) {
            modeId = collection.addMode(modeName)
        } else {
            modeId = mode.modeId;
        }
    }

    const aliases = {};
    const tokens = {};

    let transformedTokens = [];

    Object.entries(data).forEach(([key, object]) => {
        object["name"] = key;
        transformedTokens.push(object);
    });

    let sortedTokens = transformedTokens;

    if(sortFn != null) {
        sortedTokens = transformedTokens.sort(sortFn);
    }

    return {
        tokens: sortedTokens,
        collection,
        modeId,
        type: data.$type
    }
}

function importVariables({ collectionName, modeName, data, sortFn = null, isSingleMode = false }) {
    const {
        tokens,
        collection,
        modeId,
        type
    } = prepareTokens({ collectionName, modeName, data, sortFn, isSingleMode })

    return tokens.map(token => {
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

    debugger;

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

    if(missedTokens.length) {
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
                parseColor(token.$value, GlobalTokens)
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
        catch(e) {
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

