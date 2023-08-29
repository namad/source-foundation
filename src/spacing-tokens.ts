import baseSpacingTokens from "./tokens/spacing/base.json";
import compactSpacingTokens from "./tokens/spacing/compact.json";
import largeSpacingTokens from "./tokens/spacing/large.json";
import touchSpacingTokens from "./tokens/spacing/touch.json";
import { flattenObject } from "./utils/flatten-object";

export const base = flattenObject(baseSpacingTokens);
export const compact = flattenObject(compactSpacingTokens);
export const large = flattenObject(largeSpacingTokens);
export const touch = flattenObject(touchSpacingTokens);