import { SourceColorTheme, getColorTokenValue, getComponentColors, getGlobalNeutrals, getThemeColors } from './color-tokens';
import { findFigmaVariableCollectionByName, getFigmaCollection, resolveVariableType, setFigmaVariable } from "./utils/figma-variables";

import chroma from 'chroma-js';

import * as spacingTokens from './spacing-tokens';
import * as radiiTokens from './radii-tokens';
import * as typographyTokens from './typography-tokens';
import * as sizingTokens from './sizing-tokens';
import * as effectsTokens from './effect-tokens';
import * as opacityTokens from './opacity-tokens';

import {colorThemes, colorThemeNames, collectionNames} from './defaults';

import { getSizeTokensSortFn, getColorTokensSortFn, getAlphaNumTokensSortFn  } from './utils/sort-tokens';
import { importTextStyles } from './utils/figma-text-styles';
import { getGlobalAccent } from './color-generators/accent-palette-generator';
import { resolveAliasOrValue, addToGlobalTokensDictionary, getGlobalTokensDictionary } from './utils/token-references';
import { toTitleCase } from './utils/text-to-title-case';
import { ImportFormData } from './import-ui';
import { radiiSizeName, spacingSizeName, typographySizeName } from './defaults';
import { importEffectStyles } from './utils/figma-effect-styles';
import { flattenObject } from './utils/flatten-object';
import { roundTwoDigits } from './utils/round-two-digits';
import { _clone } from './utils/clone';
import { LOCAL_LIB_NAME } from './utils/figma-library-variables';
import * as themeStore from './utils/themes-store';

console.clear();

export async function initiateImport() {
    const params: ImportFormData = themeStore.getTheme('light');
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    params.createComponentTokens && await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('componentColors'),
        modeName: "Default",
        data: getComponentColors(),
        sortFn: getColorTokensSortFn()
    });

    params.createColorTokens && await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Light Base",
        data: getThemeColors('lightBase', params),
        sortFn: getColorTokensSortFn()
    });

    params.createSpacingTokens && await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('spacing'),
        modeName: toTitleCase(params.spacing),
        data: spacingTokens[params.spacing],
        sortFn: getSizeTokensSortFn(),
    });

    params.createRadiiTokens && await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('radii'),
        modeName: toTitleCase(params.radii),
        data: radiiTokens[params.radii],
        sortFn: getSizeTokensSortFn(),
    });

    params.createTypographyTokens && await getCollectionAndPrepareTokens({
        collectionName: "Type Scale",
        modeName: toTitleCase(params.baseFontSize),
        data: typographyTokens[params.baseFontSize],
        sortFn: getSizeTokensSortFn(),
    });

    params.createOpacityTokens && await getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('opacity'),
        modeName: toTitleCase("default"),
        data: opacityTokens.opacity,
        sortFn: getAlphaNumTokensSortFn(),
    });

    params.createGlobalSizeTokens && await getCollectionAndPrepareTokens({
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

        let chromaColor = chroma(token.$value as string);
        const contrast1 = roundTwoDigits(chroma.contrast(chroma.hsl(0, 0, 1), chromaColor));
        const contrast2 = roundTwoDigits(chroma.contrast(chroma.hsl(0, 0, 0.22), chromaColor));

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

export async function importAllTokens() {

    themeStore.save();
    const params: ImportFormData = themeStore.getTheme('light')

    const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
    generateVariablesForPlayground(params, isPlayground);

    params.createColorTokens && await importColorTheme();

    params.createComponentTokens && await importVariables({
        collectionName: collectionNames.get('componentColors'),
        modeName: "Default",
        data: getComponentColors()
    });

    params.createSpacingTokens && await importSizeTokens({
        type: 'spacing',
        collectionName: collectionNames.get('spacing'),
        params: params,
        defaultMode: params.spacing,
        defaultOrder: spacingSizeName,
        tokens: spacingTokens.getSpacingTokens(params.verticalSpacing)
    });

    params.createRadiiTokens && await importSizeTokens({
        type: 'radii',
        collectionName: collectionNames.get('radii'),
        params: params,
        defaultMode: params.radii,
        defaultOrder: radiiSizeName,
        tokens: radiiTokens
    });

    if(params.createTypographyTokens) {
        await importTypographyTokens(params);
    } 


    params.createOpacityTokens && await importVariables({
        collectionName: collectionNames.get('opacity'),
        modeName: "Default",
        data: opacityTokens.opacity
    });

    params.createGlobalSizeTokens && await importVariables({
        collectionName: collectionNames.get('globalSizing'),
        modeName: "Default",
        data: sizingTokens.global
    });


    params.createElevationTokens && await importEffectStyles(effectsTokens.elevation);

    figma.notify("Figma variables has been imported");

    figma.ui.postMessage("IMPORT_COMPLETED");
}

async function importColorTheme_OG(params: ImportFormData) {
    const defaultThemes = _clone(colorThemes) as string[];
    const globalNeutrals = getGlobalNeutrals(params);

    addToGlobalTokensDictionary({
        ...globalNeutrals,
        ...getComponentColors(),
    });

    let index = 0;

    while(defaultThemes.length) {
        const theme = defaultThemes.shift() as SourceColorTheme;;

        let themeColors = getThemeColors(theme, params);

        addToGlobalTokensDictionary({
            ...themeColors
        });

        await importVariables({
            collectionName: collectionNames.get('themeColors'),
            modeName: colorThemeNames[index],
            data: themeColors
        });

        index++;
    }
}

function getThemeParams(theme: SourceColorTheme) {
    debugger

    if (theme.startsWith('light')) {
        return themeStore.getTheme('light');
    }
    if(theme.startsWith('dark')) {
        return themeStore.getTheme('dark');
    }

    throw new Error(`Unusual theme name ${theme}`);
}

async function importColorTheme() {
    const defaultThemes = _clone(colorThemes) as string[];
    
    addToGlobalTokensDictionary({     
        ...getComponentColors(),
    });

    let index = 0;

    while(defaultThemes.length) {
        debugger

        const themeName = defaultThemes.shift() as SourceColorTheme;
        const params = getThemeParams(themeName);
        let themeColors = getThemeColors(themeName, params);
        const globalNeutrals = getGlobalNeutrals(params);

        addToGlobalTokensDictionary({
            ...globalNeutrals,
            ...themeColors
        });

        await importVariables({
            collectionName: collectionNames.get('themeColors'),
            modeName: colorThemeNames[index],
            data: themeColors
        });

        index++;
    }

    debugger
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

    let transformedTokens: DesignToken[] = Object.entries(data as DesignTokensRaw).map(([key, object]) => {
        return {
            name: key,
            ...object as DesignToken
        }
    })

    if (sortFn != null) {
        transformedTokens.sort(sortFn);
        console.log(transformedTokens.map(token => token.name))
    }

    if (isNew) {
        // create variables straight away so there is a way to make 
        // references / aliases without additional pass
        for(const token of transformedTokens) {
            const type = resolveVariableType(token["$type"]);
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

    for(const token of tokens) {
        let type = '$type' in token ? token.$type : 'string';
        await processToken({
            collection,
            modeId,
            type: type,
            variableName: token.name,
            token: token,
            overrideValues
        });
    }

}


async function importTypographyTokens(params: ImportFormData) {
    const tokens = typographyTokens.getTypographyTokens(params.baseFontSize, params.typeScale);
    const typeScaleTokens = typographyTokens.getTypScaleTokens(params.typeScale);
    const collectionName = 'Type Face';
    // const collection = await findFigmaVariableCollectionByName(collectionName);

    addToGlobalTokensDictionary(tokens);

    await importVariables({
        collectionName: collectionName,
        modeName: typographyTokens.typeFace["font-family"].$value || "Default",
        data: typographyTokens.typeFace
    });

    await importSizeTokens({
        type: 'typeScale',
        collectionName: "Type Scale",
        params: params,
        defaultMode: params.baseFontSize,
        defaultOrder: typographySizeName,
        tokens: typeScaleTokens
    });
    await importTextStyles(tokens);
}

export interface DesignTokensRaw {
    [key: string]: DesignTokensRaw | DesignToken | typographyTokens.TextStyleToken | effectsTokens.EffectStyleToken
}

export interface DesignToken {
    $value: string | object[] | typographyTokens.TypographyTokenValue | effectsTokens.EffectTokenValue[];
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
    overrideValues
}) {
    type = type || token.$type;
    // if key is a meta field, move on
    if (variableName.charAt(0) === "$") {
        return;
    }

    let valueString = `${token.$value}`

    if (token.$value !== undefined) {
        if (type === "color") {
            return await setFigmaVariable(
                collection,
                modeId,
                "COLOR",
                variableName,
                await getColorTokenValue(token, modeId),
                token.scopes || ['ALL_SCOPES'],
                token.description || null
            );
        }

        if (type === "number") {
            let resolvedValue = await resolveAliasOrValue(valueString, getGlobalTokensDictionary());
            let numValue = typeof resolvedValue == 'string' ? parseFloat(resolvedValue) : resolvedValue;

            return await setFigmaVariable(
                collection,
                modeId,
                "FLOAT",
                variableName,
                numValue,
                token.scopes,
                token.description || null
            );
        }

        if (type === "string") {
            return await setFigmaVariable(
                collection,
                modeId,
                "STRING",
                variableName,
                await resolveAliasOrValue(valueString, getGlobalTokensDictionary()),
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