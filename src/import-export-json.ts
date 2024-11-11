import brandVariantTemplate from "./utils/brand-variant-template.json";

import { ImportFormData } from "./import-ui";
import { DesignToken, DesignTokensRaw, getCollectionAndPrepareTokens, importVariables } from "./import-tokens";
import { ColorFormat, convertFigmaColorToRgb } from "./utils/figma-colors";
import { convertFigmaEffectStyleToToken, importEffectStyles } from "./utils/figma-effect-styles";
import { convertFigmaTextStyleToToken, importTextStyles } from "./utils/figma-text-styles";
import { flattenObject } from "./utils/flatten-object";

import { figmaAliasToDesignTokens, getAliasName, variableNameToObject } from "./utils/figma-variables";
import { delayAsync } from "./utils/delay-async";
import { addToGlobalTokensDictionary, findTokenReferences, getReferenceName } from "./utils/token-references";
import { _clone } from "./utils/clone";
import { collectionNames } from "./defaults";
import { toCamelCase } from "./utils/text-to-title-case";
import { getAlphaNumTokensSortFn, getColorTokensSortFn, getSizeTokensSortFn } from "./utils/sort-tokens";
import { ExportEventParameters } from "./main";



function makeBrandVariantRecord(name: string): CollectionExportRecord {
    const brandVariantRecord: CollectionExportRecord = _clone(brandVariantTemplate) as CollectionExportRecord

    brandVariantRecord.collection = "Brand Variant";
    brandVariantRecord.mode = toCamelCase(name);
    brandVariantRecord.tokens = {
        theme: {},
        brand: {},
        component: {},
    }

    return brandVariantRecord;
}

function exportBrandThemeTokens(key: 'theme'|'brand'|'component', brandVariantRecord: CollectionExportRecord, exportedData: CollectionExportRecord[]) {
    let brandTokens = brandVariantRecord.tokens[key];

    exportedData.forEach(record => {
        const modeName = toCamelCase(record.mode);
        const tokens = record.tokens as DesignTokensRaw;
        const data: DesignTokensRaw = {};

        Object.entries(tokens).forEach(([tokenName, tokenData]) => {
            let token: DesignToken = variableNameToObject({ name: tokenName, targetObject: data });
            const value = tokenData.$value.toString();
            let references = findTokenReferences(value) || [];

            const newValue = references.map(alias => {
                return `{${key}.${modeName}.${getReferenceName(alias)}}`
            }).join(' ')

            Object.assign(token, tokenData, {
                $value: newValue || value,
                scopes: [], // i want these to stay private
            })
        })

        brandTokens[modeName] = data as DesignTokensRaw;
    })

    return brandVariantRecord;
}

function remapPrimaryVariables(exportedData: CollectionExportRecord[], getPath: Function ): CollectionExportRecord[] {
    const exportData = exportedData.map(record => {

        const modeName = record.mode;
        const tokens = record.tokens as DesignTokensRaw
        const data: DesignTokensRaw = {};
        Object.entries(tokens).forEach(([tokenName, tokenData]) => {
            let token = variableNameToObject({ name: tokenName, targetObject: data });
            const name = figmaAliasToDesignTokens(getReferenceName(tokenName));
            const path = getPath(modeName);
            Object.assign(token, tokenData, {
                $value: `{${path}.${name}}`
            });
        })
        record.tokens = data;

        return record;
    })

    return exportData;

}

export async function exportToJSON(exportParams: ExportEventParameters, formData: ImportFormData) {
    const collections: VariableCollection[] = await figma.variables.getLocalVariableCollectionsAsync();
    const files: CollectionExportRecord[] = [];

    for (const collection of collections) {
        const exportedData = await exportFigmaVariableCollection(collection, exportParams.jsonColorFormat);

        exportedData.forEach(record => {
            const tokens = record.tokens;
            const data: DesignTokensRaw = expandTokenNameToObject(tokens);
            record.tokens = data;
        })
        files.push(...exportedData)

    }

    const textStyles: TextStyle[] = await figma.getLocalTextStylesAsync();
    const effectStyles: EffectStyle[] = await figma.getLocalEffectStylesAsync();

    const exportedTextStyles = await exportTextStyles(textStyles);
    const exportedEffectStyles = await exportEffectStyles(effectStyles, exportParams.jsonColorFormat);

    exportedTextStyles && files.push(exportedTextStyles);
    exportedEffectStyles && files.push(exportedEffectStyles);

    figma.ui.postMessage({ type: "EXPORT_RESULT_JSON", files });
}

export async function exportBrandVariantToJSON(params: ExportEventParameters, formData: ImportFormData) {
    const collections: VariableCollection[] = await figma.variables.getLocalVariableCollectionsAsync();
    const brandModeName = formData.primary;
    let brandVariantCollection = makeBrandVariantRecord(brandModeName);
    const files: CollectionExportRecord[] = [brandVariantCollection];


    for (const collection of collections) {
        const exportedCollectionData = await exportFigmaVariableCollection(collection, params.brandColorFormat);

        if (params.createColorTokens && collection.name == collectionNames.get("themeColors")) {

            brandVariantCollection = exportBrandThemeTokens("theme", brandVariantCollection, exportedCollectionData)
            brandVariantCollection.tokens.theme["color"] = {
                "$type": "string",
                "scopes": [
                    "ALL_SCOPES"
                ],
                "$value": toCamelCase(brandModeName)
            };
            
            files.push(...remapPrimaryVariables(exportedCollectionData, (modeName) => {
                return `theme.${toCamelCase(modeName)}`
            }))
        }

        
        if (params.createComponentTokens && collection.name == collectionNames.get("componentColors")) {
            importBrandSpecificTokens(collection, 'component', exportedCollectionData, files, brandVariantCollection);
        }

        if (params.createRadiiTokens && collection.name == collectionNames.get("radii")) {
            importBrandSpecificTokens(collection, 'brand', exportedCollectionData, files, brandVariantCollection);
        }
        if (params.createSpacingTokens && collection.name == collectionNames.get("spacing")) {
            importBrandSpecificTokens(collection, 'brand', exportedCollectionData, files, brandVariantCollection);
        }

        const isTypographyCollection = (collection) => {
            return collection.name == collectionNames.get("typeFace") || collection.name == collectionNames.get("typeScale")
        }

        if (params.createTypographyTokens && isTypographyCollection(collection)) {
            importBrandSpecificTokens(collection, 'brand', exportedCollectionData, files, brandVariantCollection);
        }

    }

    figma.ui.postMessage({ type: "EXPORT_RESULT_BRAND", files });
}

export interface SourceThemeDictionary {
    color: DesignToken;
    lightBase?: DesignTokensRaw[];
    darkBase?: DesignTokensRaw[];
    darkElevated?: DesignTokensRaw[];
}

export interface BrandThemeExtension {
    theme?: SourceThemeDictionary;
    brand?: DesignTokensRaw; 
    component?: DesignTokensRaw; 
}

export interface CollectionExportRecord {
    type: "variables" | "textStyles" | "effectStyles",
    collection: string,
    mode: string,
    tokens: BrandThemeExtension | DesignTokensRaw
}

function expandTokenNameToObject(tokens) {
    const data: DesignTokensRaw = {};
    Object.entries(tokens).forEach(([tokenName, tokenData]) => {
        let token = variableNameToObject({ name: tokenName, targetObject: data });
        Object.assign(token, tokenData)
    })

    return data;
}

function importBrandSpecificTokens(collection: VariableCollection, targetKey: "brand"|"theme"|"component", exportedCollectionData: CollectionExportRecord[], files: CollectionExportRecord[], brandVariantCollection: CollectionExportRecord) {
    const defaultModeId = collection.defaultModeId;
    const defaulttMode = collection.modes.find(mode => mode.modeId === defaultModeId);
    const exportData = exportedCollectionData.find(record => record.mode === defaulttMode.name);

    const data: DesignTokensRaw = expandTokenNameToObject(exportData.tokens);

    brandVariantCollection.tokens[targetKey] = Object.assign(brandVariantCollection.tokens[targetKey], data);

    files.push(...remapPrimaryVariables([exportData], (modeName) => {
        return `${targetKey}`
    }))

    return brandVariantCollection;
}

async function getTokenValueFromVariable(value: VariableValue, variable: Variable, colorFormat: ColorFormat): Promise<string> {
    const type = value['type'];

    if (type === "VARIABLE_ALIAS") {
        const alias = await getAliasName(value['id'])
        return alias;
    }

    if (variable.resolvedType == "COLOR") {
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
                $type: typeNames.get(resolvedType),
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
        let token: DesignToken = variableNameToObject({ name, targetObject: collection.tokens });

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
        let token = variableNameToObject({ name, targetObject: collection.tokens });
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