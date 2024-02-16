import { convertFigmaColorToRgb, parseColorToken } from './utils/figma-colors';
import { getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import { getFigmaCollection, resolveVariableType, setFigmaVariable } from "./utils/figma-variables";
import { sortColorTokens } from './utils/sort-palette';

import chroma from 'chroma-js';

import * as spacing from './spacing-tokens';
import * as radii from './radii-tokens';
import * as typescale from './typescale-tokens';
import * as sizing from './sizing-tokens';
import * as effects from './effect-tokens';

import { sortSizeTokens } from './utils/sort-sizes';
import { importTextStyles } from './utils/figma-text-styles';
import { renderAccents } from "./color-generators/render-accents";
import { generateGlobalAccentPalette, getGlobalAccent } from './color-generators/accent-palette-generator';
import { generateNeutrals, renderNeutrals } from './color-generators/neutrals-palette-generator';
import { bindVariablesAndStyles } from './utils/variables-to-styles';
import { parseReferenceGlobal, findVariableByReferences } from './utils/token-references';
import { toTitleCase } from './utils/text-to-title-case';
import { ImportFormData } from './import-ui';
import { iconSizeName, radiiSizeName, spacingSizeName, typographySizeName } from './defaults';
import { processComponents } from './fix-layers';
import { importEffectStyles } from './utils/figma-effect-styles';
import { delayAsync } from './utils/delay-async';
import { updateElevationComponents } from './utils/update-elevation-components';
import { flattenObject } from './utils/flatten-object';
import { roundTwoDigits } from './utils/round-two-digits';
import { swapVariables } from './utils/swap-variables';
import { exportStyleTemplates } from './utils/export-style-templates';
import { importStyleTemplates } from './utils/import-style-templates';

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

(async () => {
    await Promise.all(
        typescale.getFontDetails().map(async item =>
            await figma.loadFontAsync(item as FontName)
        )
    );

    if (figma.command === "import") {
        figma.showUI(__uiFiles__["import"], {
            width: 560,
            height: 720,
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

    if (figma.command == "updateElevationComponents") {
        updateElevationComponents(effects.getElevationTokens());
        figma.closePlugin();
    }

    if (figma.command == "setPlayground") {
        const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
        figma.root.setPluginData('SDSPlayground', isPlayground ? '' : 'true');

        figma.notify(`${isPlayground ? '❎' : '✅'} Playground is ${isPlayground ? 'disabled' : 'enabled'}`);

        figma.closePlugin();
    }

    if (figma.command == "fixLayers") {
        await processComponents();
        figma.closePlugin();
    }

    if (figma.command == "exportStyleTemplates") {
        await exportStyleTemplates();
        figma.closePlugin('Style templates exported');
    }
    
    if (figma.command == "importStyleTemplates") {
        await importStyleTemplates();
        figma.closePlugin('Style templates imported');
    }

    if (figma.command == "swapVariables") {
        const layersCount = await swapVariables().catch(err => {
            console.error(err);
            figma.notify(err, {error: true});
            throw err;
        });
        figma.closePlugin(`${layersCount} layer(s) processed. `);
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
        initiateImport(params);
        importAllTokens(params);
    }
    else if (eventData.type === "EXPORT") {
        // exportToJSON(eventData.format);
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
        data: getThemeColors('lightBase', params),
        sortFn: sortColorTokens
    });

    // getCollectionAndPrepareTokens({
    //     collectionName: collectionNames.get('brandColors'),
    //     modeName: toTitleCase(params.primary),
    //     data: getBrandColors(params.primary),
    //     sortFn: sortColorTokens
    // });

    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('spacing'),
        modeName: toTitleCase(params.spacing),
        data: spacing[params.spacing],
        sortFn: sortSizeTokens,
    });

    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('radii'),
        modeName: toTitleCase(params.radii),
        data: radii[params.radii],
        sortFn: sortSizeTokens,
    });

    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('iconScale'),
        modeName: toTitleCase("base"),
        data: sizing["base"],
        sortFn: sortSizeTokens,
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

function importAllTokens(params: ImportFormData) {
    figma.root.setPluginData('SDS', JSON.stringify(params));

    const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
    generateVariablesForPlayground(params, isPlayground);

    importColorTheme(params);

    // importVariables({
    //     collectionName: collectionNames.get('brandColors'),
    //     modeName: toTitleCase(params.primary),
    //     data: getBrandColors(params.primary)
    // });

    importVariables({
        collectionName: collectionNames.get('componentColors'),
        modeName: "Default",
        data: getComponentColors()
    });

    importSizeTokens({
        type: 'spacing',
        collectionName: collectionNames.get('spacing'),
        params: params,
        defaultMode: params.spacing,
        defaultOrder: spacingSizeName,
        tokens: spacing
    });

    importSizeTokens({
        type: 'radii',
        collectionName: collectionNames.get('radii'),
        params: params,
        defaultMode: params.radii,
        defaultOrder: radiiSizeName,
        tokens: radii
    });

    importSizeTokens({
        type: 'typeScale',
        collectionName: 'Type Scale',
        params: params,
        defaultMode: params.baseFontSize,
        defaultOrder: typographySizeName,
        tokens: typescale,
        isSingleMode: true
    });

    // ICONS SCALE
    importSizeTokens({
        type: 'iconScale',
        collectionName: collectionNames.get('iconScale'),
        params: params,
        defaultMode: 'base',
        defaultOrder: iconSizeName,
        tokens: sizing
    });

    globalTokens = {
        ...globalTokens,
        ...typescale.getTypograohyTokens(params.baseFontSize, params.typeScale)
    };
    importTextStyles(typescale.getTypograohyTokens(params.baseFontSize, params.typeScale));

    importEffects();

    figma.notify("Figma variables has been imported");

    figma.ui.postMessage("importCompleted");
}

function importEffects() {
    // import effects for default theme which is light one
    importEffectStyles(effects.elevation);
    updateElevationComponents(effects.getElevationTokens());
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
        sortFn: sortColorTokens
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
            isSingleMode: isSingleMode
        });
    })
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
            try {
                modeId = collection.addMode(modeName)
            }
            catch(e) {
                figma.notify("Cannot create more than one mode. Is your file under Pro team or org plan?");
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
    documentationLink?: DocumentationLink;
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
            let colorValue = parseColorToken(token, globalTokens);
            let referenceVar = findVariableByReferences(token.$value.trim());

            if (referenceVar) {
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
                token.scopes || ['ALL_SCOPES'],
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

