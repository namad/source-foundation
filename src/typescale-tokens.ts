import textStyleTokens from "./tokens/typography/styles.json";
import typeFaceTokens from "./tokens/typography/typeface.json";
import baseTypeScaleTokens from "./tokens/typography/typescale-base.json";
import compactTypeScaleTokens from "./tokens/typography/typescale-compact.json";
import largeTypeScaleTokens from "./tokens/typography/typescale-large.json";
import { flattenObject } from "./utils/flatten-object";

export const base = flattenObject(baseTypeScaleTokens);
export const compact = flattenObject(compactTypeScaleTokens);
export const large = flattenObject(largeTypeScaleTokens);
export const styles = flattenObject(textStyleTokens);

export function getTypograohyTokens(size: string) {

    let scaleTokens;

    switch (size) {
        case "compact": {
            scaleTokens = flattenObject(compactTypeScaleTokens);
            break;
        }
        case "large": {
            scaleTokens = flattenObject(largeTypeScaleTokens);
            break;
        }
        case "base": {
            scaleTokens = flattenObject(baseTypeScaleTokens);
        }
    }
    return {
        ...flattenObject(typeFaceTokens),
        ...scaleTokens,
        ...styles,
    }
}

export function getFontDetails() {
    let names = [];
    const tokens = typeFaceTokens;
    const family = typeFaceTokens["font-families"].primary.$value;

    for (let [name, fontWeight] of Object.entries(typeFaceTokens["font-weights"])) {
        names.push({ family, style: fontWeight.$value });
    }

    return names;
}