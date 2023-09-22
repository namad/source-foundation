import elevationTokens from './tokens/effects.json';
import { flattenObject } from "./utils/flatten-object";

export const elevation = flattenObject(elevationTokens);