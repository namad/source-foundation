import { DesignToken, DesignTokensRaw } from './import-tokens';
import normalShadowTokens from './tokens/effects/shadows-normal.tokens.json';
import softShadowTokens from './tokens/effects/shadows-material.tokens.json';
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


export const normalShadows: DesignTokensRaw = flattenObject(normalShadowTokens);
export const softShadows: DesignTokensRaw = flattenObject(softShadowTokens);

export function getElevationTokens(style: 'normal'|'deep', raw?: boolean) {
    switch(style) {
        case 'normal': {
            return raw === true ? normalShadowTokens : flattenObject(normalShadowTokens)
        }
        case 'deep': {
            return raw === true ? softShadowTokens : flattenObject(softShadowTokens)
        }
    }
}