import { ImportFormData } from "./import-ui";
import { DesignTokensRaw, getCollectionAndPrepareTokens, importVariables } from "./main";
import { TypographyTokenValue } from "./typography-tokens";
import { ColorFormat, convertFigmaColorToRgb } from "./utils/figma-colors";
import { convertFigmaEffectStyleToToken, importEffectStyles } from "./utils/figma-effect-styles";
import { convertFigmaTextStyleToToken, importTextStyles } from "./utils/figma-text-styles";
import { flattenObject } from "./utils/flatten-object";

import * as typographyTokens from './typography-tokens';
import * as effectsTokens from './effect-tokens';
import { getAliasName, variableNameToObject } from "./utils/figma-variables";
import { getComponentColors, getGlobalNeutrals, getThemeColors } from "./color-tokens";
import { delayAsync } from "./utils/delay-async";


interface TextStyleToken {
    "$value": TypographyTokenValue,
    "$type": "typography"
}

interface EffectStyleToken {
    "$value": [
        {
            "color": string,
            "showShadowBehindNode": string,
            "type": string,
            "x": string,
            "y": string,
            "blur": string,
            "spread": string,
        }
    ],
    "$type": "boxShadow",
}
export async function exportToJSON(colorFormat?: 'hex'|'hsl'|'rgba') {
    const collections = await figma.variables.getLocalVariableCollectionsAsync();
    const files = [];

    const textStyles: TextStyle[] = await figma.getLocalTextStylesAsync();
    const effectStyles: EffectStyle[] = await figma.getLocalEffectStylesAsync();

    const exportedTextStyles = await exportTextStyles(textStyles);
    const exportedEffectStyles = await exportEffectStyles(effectStyles, colorFormat);

    for(const collection of collections) {
        const exportedData = await exportFigmaVariableCollection(collection, colorFormat);
        files.push(...exportedData)
    }

    exportedTextStyles && files.push(exportedTextStyles);
    exportedEffectStyles && files.push(exportedEffectStyles);

    figma.ui.postMessage({ type: "EXPORT_RESULT", files });
}

export interface CollectionExportRecord {
    type: "variables"|"textStyles"|"effectStyles",
    collection: string,
    mode: string,
    tokens: DesignTokensRaw[]
}

async function exportFigmaVariableCollection({ name, modes, variableIds }, colorFormat?: ColorFormat) {
    const collections: CollectionExportRecord[] = [];
    const variableReferences = variableIds.sort();

    const typeNames = new Map<string, string>([
        ["COLOR", "color"],
        ["FLOAT", "number"],
        ["STRING", "string"]
    ]);

    for(const mode of modes){
        const collection = { 
            type: "variables",
            collection: name,
            mode: mode.name,
            tokens: {}
        } as CollectionExportRecord;
        
        for(const variableId of variableReferences) {
            const { 
                name,
                resolvedType,
                scopes,
                valuesByMode
            } = await figma.variables.getVariableByIdAsync(variableId);

            console.log(name);

            const value = valuesByMode[mode.modeId] as any;
            if (value !== undefined && ["COLOR", "FLOAT", "STRING"].includes(resolvedType)) {
                let obj = variableNameToObject(name, collection.tokens);
                obj.$type = typeNames.get(resolvedType);
                obj.scopes = scopes;
                if (value.type === "VARIABLE_ALIAS") {
                    obj.$value = await getAliasName(value.id);
                } else {
                    obj.$value = resolvedType === "COLOR" ? convertFigmaColorToRgb(value, colorFormat) : value;
                }
            }
        };
        collections.push(collection);
    };
    return collections;
}


async function exportTextStyles(styles: TextStyle[]) {

    if(styles.length == 0) {
        return null;
    }

    const collection = { 
        type: "textStyles",
        collection: "Text Styles",
        mode: "default",
        tokens: {}
    } as CollectionExportRecord;

    for(const style of styles) {
        const name = style.name;
        let obj = variableNameToObject(name, collection.tokens);

        obj.$value = await convertFigmaTextStyleToToken(style),
        obj.$type = "typography";
    }

    return collection;
}

async function exportEffectStyles(styles: EffectStyle[], colorFormat?: ColorFormat) {
    if(styles.length == 0) {
        return null;
    }

    const collection = { 
        type: "effectStyles",
        collection: "Effect Styles",
        mode: "default",
        tokens: {}
    } as CollectionExportRecord;

    for(const style of styles) {
        const name = style.name;
        let obj = variableNameToObject(name, collection.tokens);

        obj.$value = await convertFigmaEffectStyleToToken(style, colorFormat),
        obj.$type = "effect";
        obj.description = style.description || "";
    }

    return collection;
}

export async function importFromJSON(data:CollectionExportRecord[], params: ImportFormData) {
    const collections = []; // unique set of collections to import

    const doImportEffects = params['importEffects'] === true;
    const doImportTextStyles = params['importTextStyles'] == true;

    const variableCollections = data.filter(record => {
        const collectionName = record.collection;

        // get unique collection list
        if(collections.indexOf(collectionName) < 0) {
            collections.push(collectionName);
            return record;
        }

        return false;
    })

    let tokensDictionary = {};

    // iterate each collection, ignore additional modes and make a dictionary
    variableCollections.forEach(collectionRecord => {
        const flatTokens = flattenObject(collectionRecord.tokens);
        tokensDictionary = {
            ...tokensDictionary,
            ...flatTokens
        }
    })

    while(variableCollections.length) {
        const collectionRecord = variableCollections.shift();

        if(collectionRecord.type == "variables") {
            await getCollectionAndPrepareTokens({
                collectionName: collectionRecord.collection,
                modeName: collectionRecord.mode,
                data: flattenObject(collectionRecord.tokens)
            }); 

            await delayAsync(5);
        }
    }

    // calculate tokens count
    let tokensCountTotal = 0; 
    let tokensImportedCount = 0;

    data.forEach(collectionRecord => {
        const flatTokens = flattenObject(collectionRecord.tokens);
        tokensCountTotal += Object.keys(flatTokens).length;
    })


    while(data.length) {
        const collectionRecord = data.shift();
        const flatTokens = flattenObject(collectionRecord.tokens);

        if(collectionRecord.type == "variables") {
            await importVariables({
                collectionName: collectionRecord.collection,
                modeName: collectionRecord.mode,
                data: flatTokens        
            }) 
            await delayAsync(5);

            tokensImportedCount += Object.keys(flatTokens).length;
            console.log(`Imported ${tokensImportedCount} out of ${tokensCountTotal}`);
        }

        if(collectionRecord.type == "textStyles") {
            await importTextStyles(tokensDictionary);
            await delayAsync(5);
        }

        if(collectionRecord.type == "effectStyles") {
            await importEffectStyles(flatTokens, tokensDictionary);
            await delayAsync(5);
        }
    }

    if(doImportTextStyles) {
        await importTextStyles(typographyTokens.getTypographyTokens(params.baseFontSize, params.typeScale));
        await delayAsync(5);
    }

    if(doImportEffects) {
        await importEffectStyles(effectsTokens.elevation);
        await delayAsync(5);
    }
}
