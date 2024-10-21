import textStyleTokens from "./tokens/typography/styles.json";
import typeFaceTokens from "./tokens/typography/typeface.json";

import baseMajorThird from "./tokens/typography/major-third/typescale-base.json";
import compactMajorThird from "./tokens/typography/major-third/typescale-compact.json";
import largeMajorThird from "./tokens/typography/major-third/typescale-large.json";

import baseMinorThird from "./tokens/typography/minor-third/typescale-base.json";
import compactMinorThird from "./tokens/typography/minor-third/typescale-compact.json";
import largeMinorThird from "./tokens/typography/minor-third/typescale-large.json";

import baseMajorSecond from "./tokens/typography/major-second/typescale-base.json";
import compactMajorSecond from "./tokens/typography/major-second/typescale-compact.json";
import largeMajorSecond from "./tokens/typography/major-second/typescale-large.json";

import { flattenObject } from "./utils/flatten-object";
import { findFigmaVariableCollectionByName } from "./utils/figma-variables";
import { DesignToken } from "./import-tokens";

export interface TextStyleToken extends DesignToken{
    "$value": TypographyTokenValue,
    "$type": "typography"
}

export interface TypographyTokenValue {
    "fontFamily": string,
    "lineHeight": string|number,
    "fontSize": number,
    "letterSpacing": string|number,
    "paragraphSpacing": number,
    "listSpacing"?: number,
    "fontStyle": string,
    "textCase": string,
    "textDecoration": string,
}

export const base = flattenObject(baseMinorThird);
export const compact = flattenObject(compactMinorThird);
export const large = flattenObject(largeMinorThird);

export const typeFace = flattenObject(typeFaceTokens);

const styles = flattenObject(textStyleTokens);

const tokens = {
    majorThird: {
        base: flattenObject(baseMajorThird),
        compact: flattenObject(compactMajorThird),
        large: flattenObject(largeMajorThird),
    },
    minorThird: {
        base: flattenObject(baseMinorThird),
        compact: flattenObject(compactMinorThird),
        large: flattenObject(largeMinorThird),
    },
    majorSecond: {
        base: flattenObject(baseMajorSecond),
        compact: flattenObject(compactMajorSecond),
        large: flattenObject(largeMajorSecond),
    },
}

export function getTypographyTokens(size: string, scale = "minorThird") {

    let scaleTokens = tokens[scale][size];

    return {
        ...typeFace,
        ...scaleTokens,
        ...styles,
    }
}

export function getTypScaleTokens(scale = "minorThird") {
    let scaleTokens = tokens[scale];
    return scaleTokens
}

export async function getFontDetails() {
    return await getFontDetailsTokens();
}

async function getFontDetailsTokens() {
    const collectionName = 'Type Face';
    const collection = await findFigmaVariableCollectionByName(collectionName);
    let names = [];

    if(collection == null) {
        const tokens = typeFaceTokens;
        const family = typeFaceTokens["font-family"].$value;

        for (let [name, textStyle] of Object.entries(typeFaceTokens["text-style"])) {
            names.push({ family, style: textStyle.$value });
        }
    }
    else {
        let family, styles = [];

        for(const variableId of collection.variableIds) {
            const figmaVar = await figma.variables.getVariableByIdAsync(variableId);
            const name = figmaVar.name;
            const figmaVarValue = Object.values(figmaVar.valuesByMode)[0];

            if(name.startsWith('font-family')) {
                family = figmaVarValue;
            }
            else if (name.startsWith('text-style')) {
                styles.push(figmaVarValue)
            }
        }

        for(const style of styles) {
            names.push({ family, style });
        }
    }

    return names;
}


function getFontDetailsLocal(styles: TextStyle[]) {
    const fontFamilies: string[] = [];
    const fontStyles: string[] = [];

    for (const style of styles) {
        const fontFamily = style.fontName.family;
        const fontStyle = style.fontName.style;

        if (fontFamilies.includes(fontFamily) == false) {
            fontFamilies.push(fontFamily);
        }
        if (fontStyles.includes(fontStyle) == false) {
            fontStyles.push(fontStyle);
        }
    }

    let names = [];
    fontFamilies.forEach(family => {
        fontStyles.forEach(style => {
            names.push({ family, style });
        });
    });

    return names;
}

