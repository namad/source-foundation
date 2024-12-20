import { DesignToken } from './import-tokens';
import elevationTokens from './tokens/effects/elevation.tokens.json';
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


export const elevation = flattenObject(elevationTokens);

export function getElevationTokens() {
    return elevationTokens;
}