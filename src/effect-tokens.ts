import { DesignToken, DesignTokensRaw } from './import-tokens';
import shadowAllTokens from './tokens/effects/shadows-all.tokens.json';

import { flattenObject } from "./utils/flatten-object";

export interface EffectStyleToken extends DesignToken {
    "$value": EffectTokenValue[];
    "$type": "boxShadow",
}

export interface EffectTokenValue {
    "color"?: string,
    "showShadowBehindNode"?: string,
    "blendMode"?: string,
    "type":  'LAYER_BLUR' | 'BACKGROUND_BLUR' | 'DROP_SHADOW' | 'INNER_SHADOW',
    "offsetX"?: string,
    "offsetY"?: string,
    "radius": string,
    "spread"?: string,
}


export function getElevationTokens(style: number, raw?: boolean) {
    const tokens = shadowAllTokens[style];
    return raw === true ? tokens : flattenObject(tokens)
}