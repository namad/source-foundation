import { DesignTokensRaw } from "./main";
import globalSizingTokens from "./tokens/sizing/global.tokens.json";
import baseSizingTokens from "./tokens/sizing/base.tokens.json";
import touchSizingTokens from "./tokens/sizing/touch.tokens.json";
import { flattenObject } from "./utils/flatten-object";

export const base = flattenObject(baseSizingTokens) as DesignTokensRaw;
export const touch = flattenObject(touchSizingTokens) as DesignTokensRaw;
export const global = flattenObject(globalSizingTokens) as DesignTokensRaw;