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

export const base = flattenObject(baseMinorThird);
export const compact = flattenObject(compactMinorThird);
export const large = flattenObject(largeMinorThird);

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

export function getTypograohyTokens(size: string, scale = "minorThird") {

    let scaleTokens = tokens[scale][size];

    return {
        ...flattenObject(typeFaceTokens),
        ...scaleTokens,
        ...styles,
    }
}

export async function getFontDetails() {
    const styles = await figma.getLocalTextStylesAsync()
    const fontFamilies: string[] = [];
    const fontStyles: string[] = [];

    if(styles.length) {
        return getFontDetailsLocal(styles, fontFamilies, fontStyles);
    }
    else {
        return getFontDetailsTokens();
    }
}

function getFontDetailsTokens() {
    let names = [];
    const tokens = typeFaceTokens;
    const family = typeFaceTokens["font-family"].primary.$value;

    for (let [name, fontWeight] of Object.entries(typeFaceTokens["font-weight"])) {
        names.push({ family, style: fontWeight.$value });
    }

    return names;
}


function getFontDetailsLocal(styles: any, fontFamilies: string[], fontStyles: string[]) {
    for (const style of styles) {
        const fontFamily = style.fontName.family;
        const fontStyle = style.fontName.style;

        if (fontFamilies.includes(fontFamily) == false) {
            fontFamilies.push(fontFamily);
        }
        if (fontStyles.includes(fontStyle) == false) {
            fontFamilies.push(fontStyle);
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

