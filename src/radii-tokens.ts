import { DesignTokensRaw } from "./main";
import baseRadiiTokens from "./tokens/radii/base.tokens.json";
import compactRadiiTokens from "./tokens/radii/compact.tokens.json";
import largeRadiiTokens from "./tokens/radii/large.tokens.json";
import { flattenObject } from "./utils/flatten-object";

export const base = flattenObject(baseRadiiTokens) as DesignTokensRaw;
export const compact = flattenObject(compactRadiiTokens) as DesignTokensRaw;
export const large = flattenObject(largeRadiiTokens) as DesignTokensRaw;