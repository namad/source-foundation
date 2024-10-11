import brandVariantTemplate from "./utils/brand-variant-template.json";

import { ImportFormData } from "./import-ui";
import { DesignToken, DesignTokensRaw, getCollectionAndPrepareTokens, importVariables } from "./import-tokens";
import { TypographyTokenValue } from "./typography-tokens";
import { ColorFormat, convertFigmaColorToRgb } from "./utils/figma-colors";
import { convertFigmaEffectStyleToToken, importEffectStyles } from "./utils/figma-effect-styles";
import { convertFigmaTextStyleToToken, importTextStyles } from "./utils/figma-text-styles";
import { flattenObject } from "./utils/flatten-object";

import * as typographyTokens from './typography-tokens';
import * as effectsTokens from './effect-tokens';

import { figmaAliasToDesignTokens, getAliasName, variableNameToObject } from "./utils/figma-variables";
import { delayAsync } from "./utils/delay-async";
import { addToGlobalTokensDictionary, findTokenReferences, getReferenceName } from "./utils/token-references";
import { _clone } from "./utils/clone";
import { collectionNames, colorThemeNames, colorThemes } from "./defaults";
import { toTitleCase } from "./utils/text-to-title-case";
import { getAlphaNumTokensSortFn, getColorTokensSortFn, getSizeTokensSortFn } from "./utils/sort-tokens";



function makeBrandVariantRecord(color: string, exportedData: CollectionExportRecord[]): CollectionExportRecord {
    const brandVariantRecord: CollectionExportRecord = _clone(brandVariantTemplate) as CollectionExportRecord

    brandVariantRecord.collection = "Brand Variant";
    brandVariantRecord.mode = toTitleCase(color);
    brandVariantRecord.tokens = {
        theme: {
            color: {
                "$type": "string",
                "scopes": [
                    "ALL_SCOPES"
                ],
                "$value": color
            }
        }
    }

    const theme = brandVariantRecord.tokens.theme;

    exportedData.forEach(record => {
        const mode = record.mode
        const modeIndex = colorThemeNames.indexOf(mode);
        const themeName = colorThemes[modeIndex];

        const tokens = record.tokens as DesignTokensRaw;

        const data: DesignTokensRaw = {};

        Object.entries(tokens).forEach(([tokenName, tokenData]) => {
            let token: DesignToken = variableNameToObject({name: tokenName, targetObject: data});
            const value = tokenData.$value.toString();
            let references = findTokenReferences(value) || [];

            const newValue = references.map(alias => {
                return `{theme.${themeName}.${getReferenceName(alias)}}`
            }).join(' ')

            Object.assign(token, tokenData, {
                $value: newValue || value,
                scopes: [],          
            })
        })

        theme[themeName] = data as DesignTokensRaw;
    })

    return brandVariantRecord;
}

function remapPrimaryPalette(exportedData: CollectionExportRecord[]): CollectionExportRecord[]{
    const exportData = exportedData.map(record => {

        const themeNameUI = record.mode;
        const themeNameUIIndex = colorThemeNames.indexOf(themeNameUI);
        const themeName = colorThemes[themeNameUIIndex || 0]

        const tokens = record.tokens as DesignTokensRaw
        const data: DesignTokensRaw = {};
        Object.entries(tokens).forEach(([tokenName, tokenData]) => {
            let token = variableNameToObject({name: tokenName, targetObject: data});
            const name = figmaAliasToDesignTokens(getReferenceName(tokenName))
            Object.assign(token, tokenData,  {
                $value: `{theme.${themeName}.${name}}`
            });
        })
        record.tokens = data;

        return record;
    })

    return exportData;

}


function expandFlatTokenList(exportedData: CollectionExportRecord[]) {
     const exportData = exportedData.map(record => {
        const recordCopy = _clone(record);
        const tokens = _clone(record.tokens);
        const data = {};
        Object.entries(tokens).forEach(([tokenName, tokenData]) => {
            let token = variableNameToObject({name: tokenName, targetObject: data});
            Object.assign(token, tokenData)
        })
        record.tokens = data;
    })
}

export async function exportToJSON(colorFormat?: 'hex' | 'hsl' | 'rgba', colorName?: string, brandVariant?: boolean) {
    const collections: VariableCollection[] = await figma.variables.getLocalVariableCollectionsAsync();
    const files: CollectionExportRecord[] = [];

    for (const collection of collections) {
        const exportedData = await exportFigmaVariableCollection(collection, colorFormat);

        if (brandVariant == true && collection.name == collectionNames.get("themeColors")) {
            debugger;
            files.push(makeBrandVariantRecord(colorName, exportedData))
            files.push(...remapPrimaryPalette(exportedData))
        }
        else {
            exportedData.forEach(record => {
                const tokens = record.tokens;
                const data = {};
                Object.entries(tokens).forEach(([tokenName, tokenData]) => {
                    let token = variableNameToObject({name: tokenName, targetObject: data});
                    Object.assign(token, tokenData)
                })
                record.tokens = data;
            })
            files.push(...exportedData)
        }

    }

    const textStyles: TextStyle[] = await figma.getLocalTextStylesAsync();
    const effectStyles: EffectStyle[] = await figma.getLocalEffectStylesAsync();

    const exportedTextStyles = await exportTextStyles(textStyles);
    const exportedEffectStyles = await exportEffectStyles(effectStyles, colorFormat);

    exportedTextStyles && files.push(exportedTextStyles);
    exportedEffectStyles && files.push(exportedEffectStyles);

    figma.ui.postMessage({ type: "EXPORT_RESULT", files });
}

export interface SourceThemeDictionary {
    color: DesignToken;
    lightBase?: DesignTokensRaw[];
    darkBase?: DesignTokensRaw[];
    darkElevated?: DesignTokensRaw[];
}

export interface BrandThemeExtension {
    theme?: SourceThemeDictionary;
}

export interface CollectionExportRecord {
    type: "variables" | "textStyles" | "effectStyles",
    collection: string,
    mode: string,
    tokens: BrandThemeExtension | DesignTokensRaw
}

async function getTokenValueFromVariable(value: VariableValue, variable: Variable, colorFormat: ColorFormat): Promise<string> {
    const type = value['type'];

    if (type === "VARIABLE_ALIAS") {
        const alias = await getAliasName(value['id'])
        return alias;
    }

    if(variable.resolvedType == "COLOR") {
        return convertFigmaColorToRgb(value as RGBA, colorFormat)
    }

    return `${value}`;
}

async function exportFigmaVariableCollection(collection: VariableCollection, colorFormat: ColorFormat = "hsl") {
    const collections: CollectionExportRecord[] = [];
    const variableReferences = collection.variableIds.sort();

    const typeNames = new Map<string, string>([
        ["COLOR", "color"],
        ["FLOAT", "number"],
        ["STRING", "string"]
    ]);

    for (const mode of collection.modes) {
        const collectionRecord = {
            type: "variables",
            collection: collection.name,
            mode: mode.name,
            tokens: {}
        } as CollectionExportRecord;

        for (const variableId of variableReferences) {
            const figmaVariable = await figma.variables.getVariableByIdAsync(variableId);
            const {
                name,
                resolvedType,
                scopes,
                valuesByMode
            } = figmaVariable;

            console.log(name);

            const value = valuesByMode[mode.modeId] as any;
            // const valueObject = variableNameToObject(name, collectionRecord.tokens);

            const token: DesignToken = {
                $type:  typeNames.get(resolvedType),
                $value: await getTokenValueFromVariable(value, figmaVariable, colorFormat),
                scopes: scopes,
                description: figmaVariable.description || ""
                
            }
            collectionRecord.tokens[name] = token;
        };
        collections.push(collectionRecord);
    };
    return collections;
}


async function exportTextStyles(styles: TextStyle[]) {

    if (styles.length == 0) {
        return null;
    }

    const collection = {
        type: "textStyles",
        collection: "Text Styles",
        mode: "default",
        tokens: {}
    } as CollectionExportRecord;

    for (const style of styles) {
        const name = style.name;
        let token: DesignToken = variableNameToObject({name, targetObject: collection.tokens});

        Object.assign(token, {
            $value: await convertFigmaTextStyleToToken(style),
            $type: "typography",
        })
    }

    return collection;
}

async function exportEffectStyles(styles: EffectStyle[], colorFormat?: ColorFormat) {
    if (styles.length == 0) {
        return null;
    }

    const collection = {
        type: "effectStyles",
        collection: "Effect Styles",
        mode: "default",
        tokens: {}
    } as CollectionExportRecord;

    for (const style of styles) {
        const name = style.name;
        let token = variableNameToObject({name, targetObject: collection.tokens});
        Object.assign(token, {
            $value: await convertFigmaEffectStyleToToken(style, colorFormat),
            $type: "effect",
            description: style.description || ""
        })
    }

    return collection;
}

export async function importFromJSON(data: CollectionExportRecord[], params: ImportFormData) {
    const collections = []; // unique set of collections to import

    const doImportEffects = params['importEffects'] === true;
    const doImportTextStyles = params['importTextStyles'] == true;

    const uniqueCollections = data.filter(record => {
        const collectionName = record.collection;

        // get unique collection list
        if (collections.indexOf(collectionName) < 0) {
            collections.push(collectionName);
            return true;
        }

        return false;
    })

    let tokensDictionary = {};

    // iterate each collection, ignore additional modes and make a dictionary
    uniqueCollections.forEach(collectionRecord => {
        const flatTokens = flattenObject(collectionRecord.tokens);
        tokensDictionary = {
            ...tokensDictionary,
            ...flatTokens
        }
    })

    addToGlobalTokensDictionary(tokensDictionary);

    while (uniqueCollections.length) {
        const collectionRecord = uniqueCollections.shift();

        if (collectionRecord.type == "variables") {
            
            if(collectionRecord.collection == "Color Theme") {
                debugger;
                const data = flattenObject(collectionRecord.tokens);
                let transformedTokens: DesignToken[] = Object.entries(data as DesignTokensRaw).map(([key, object]) => {
                    return {
                        name: key,
                        ...object as DesignToken
                    }
                })
                debugger
                const sortFunction = getSortFnByCollectionName(collectionRecord.collection);
                transformedTokens.sort(sortFunction)
            }
            await getCollectionAndPrepareTokens({
                collectionName: collectionRecord.collection,
                modeName: collectionRecord.mode,
                data: flattenObject(collectionRecord.tokens),
                sortFn: getSortFnByCollectionName(collectionRecord.collection)
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


    while (data.length) {
        const collectionRecord = data.shift();
        const flatTokens = flattenObject(collectionRecord.tokens);

        if (collectionRecord.type == "variables") {
            await importVariables({
                collectionName: collectionRecord.collection,
                modeName: collectionRecord.mode,
                data: flatTokens
            })
            await delayAsync(5);

            tokensImportedCount += Object.keys(flatTokens).length;
            console.log(`Imported ${tokensImportedCount} out of ${tokensCountTotal}`);
        }

        if (collectionRecord.type == "textStyles") {
            await importTextStyles(tokensDictionary);
            await delayAsync(5);
        }

        if (collectionRecord.type == "effectStyles") {
            await importEffectStyles(flatTokens, tokensDictionary);
            await delayAsync(5);
        }
    }
}

function getSortFnByCollectionName(name: string) {
   const references = {
        "Color Theme": getColorTokensSortFn(),
        "Brand Variant": getColorTokensSortFn(),
        "Component Colors": getColorTokensSortFn(),
        "Opacity": getAlphaNumTokensSortFn(),
        "Spacing": getSizeTokensSortFn(),
        "Radii": getSizeTokensSortFn(),
        "Global Sizing": getAlphaNumTokensSortFn(),
    }

    return references[name];
}