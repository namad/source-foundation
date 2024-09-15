import baseSpacingTokens from "./tokens/spacing/base.json";
import compactSpacingTokens from "./tokens/spacing/compact.json";
import largeSpacingTokens from "./tokens/spacing/large.json";
import touchSpacingTokens from "./tokens/spacing/touch.json";
import { _clone } from "./utils/clone";
import { flattenObject } from "./utils/flatten-object";

const tokens = {
    base: baseSpacingTokens,
    compact: compactSpacingTokens,
    large: largeSpacingTokens,
    touch: touchSpacingTokens
};

export const base = getSpacingTokens("uneven", "base");
export const compact = getSpacingTokens("uneven", "compact");
export const large = getSpacingTokens("uneven", "large");
export const touch = getSpacingTokens("uneven", "touch");

type SpacingScale = "base" | "compact" | "large" | "touch";

export function getSpacingTokens(verticalSpacing: "even" | "uneven", spacingScale?: SpacingScale) {
    let output = {};

    for (const spacingScale in tokens) {
        output[spacingScale] = normalizeSpacingTokens(spacingScale as SpacingScale, verticalSpacing === "even")
    }

    if(spacingScale) {
        return output[spacingScale];
    }

    return output;
}
function normalizeSpacingTokens(spacingScale: "base" | "compact" | "large" | "touch", isEven: boolean) {
    if (!isEven) {
        return flattenObject(tokens[spacingScale]);
    }

    const scale = _clone(tokens[spacingScale]);
    const major = scale["spacing"];
    const minor = scale["spacing"].minor;

    for (const tokenName in minor) {
        minor[tokenName] = major[tokenName]
    }
    return flattenObject(scale);
}