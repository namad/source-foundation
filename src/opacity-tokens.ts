import { DesignTokensRaw } from "./main";
import opacityTokens from "./tokens/opacity/opacity.json";
import { flattenObject } from "./utils/flatten-object";

export const opacity = flattenObject(opacityTokens) as DesignTokensRaw;