import baseRadiiTokens from "./tokens/radii/base.json";
import compactRadiiTokens from "./tokens/radii/compact.json";
import largeRadiiTokens from "./tokens/radii/large.json";
import { flattenObject } from "./utils/flatten-object";

export const base = flattenObject(baseRadiiTokens);
export const compact = flattenObject(compactRadiiTokens);
export const large = flattenObject(largeRadiiTokens);