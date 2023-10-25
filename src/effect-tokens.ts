import elevationTokens from './tokens/effects/elevation.json';
import { flattenObject } from "./utils/flatten-object";

export interface EffectToken {
    "color": string;
    "type": string;
    "x": string;
    "y": string;
    "blur": string;
    "spread": string;
}

export const elevation = flattenObject(elevationTokens);

export function getElevationTokens() {
    return elevationTokens;
}