import { DesignToken, DesignTokensRaw } from "./import-tokens";
import opacityTokens from "./tokens/opacity/opacity.tokens.json";
import { flattenObject } from "./utils/flatten-object";

export const opacity = flattenObject(opacityTokens) as DesignTokensRaw;