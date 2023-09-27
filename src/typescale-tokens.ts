import textStyleTokens from "./tokens/typography/styles.json";
import typeFaceTokens from "./tokens/typography/typeface.json";

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

export function getFontDetails() {
    let names = [];
    const tokens = typeFaceTokens;
    const family = typeFaceTokens["font-family"].primary.$value;

    for (let [name, fontWeight] of Object.entries(typeFaceTokens["font-weight"])) {
        names.push({ family, style: fontWeight.$value });
    }

    return names;
}