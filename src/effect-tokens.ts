import { defaultSettings } from './defaults';
import { DesignTokensRaw, EffectDesignToken, EffectTokenValue } from './import-tokens';
import { ImportFormData } from './import-ui';
import { _clone } from './utils/clone';

import { flattenObject } from "./utils/flatten-object";

interface ElevationTokens {
    'shadow-1': ElevationRamp;
    'shadow-2': ElevationRamp;
    'shadow-3': ElevationRamp;
    'shadow-4': ElevationRamp;
    'shadow-5': ElevationRamp;
    'shadow-6': ElevationRamp;
}

interface ElevationRamp {
    "100": EffectDesignToken;
    "200": EffectDesignToken;
    "300": EffectDesignToken;
    "400": EffectDesignToken;
    "500": EffectDesignToken;
    "600": EffectDesignToken;
}

export function getElevationTokens(params: ImportFormData, raw?: boolean): ElevationTokens|DesignTokensRaw {
    let tokens: ElevationTokens;
    let depth = params.shadowsStyle -2;

    if(params.shadowsSpread == undefined) {
        params.shadowsSpread = defaultSettings.shadowsSpread;
    }
    if(params.shadowsStyle == 1) {
        /*
            this is exceptional case
        */
        tokens = generateShadows(0, params.shadowsSpread);
        const firstShadowRump: ElevationRamp = _clone(tokens['shadow-1']);
        Object.entries(firstShadowRump).forEach(([key, effectDesignToken]) => {
            effectDesignToken.$value.pop();
        });

        tokens = {
            'shadow-1': firstShadowRump,
            'shadow-2': tokens['shadow-1'],
            'shadow-3': tokens['shadow-2'],
            'shadow-4': tokens['shadow-3'],
            'shadow-5': tokens['shadow-4'],
            'shadow-6': tokens['shadow-5'],        
        }
    }
    else {
        tokens = generateShadows(depth, params.shadowsSpread);
    }


    return raw === true ? tokens : flattenObject(tokens);
}

const valueSequence = [1, 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 72, 88, 104];

const effectTemplate: EffectTokenValue = {
    "type": "DROP_SHADOW",
    "showShadowBehindNode": false,
    "color": "{utility.shade.100}",
    "blendMode": "MULTIPLY",
    "offsetX": 0,
    "offsetY": 0,
    "radius": 1,
    "spread": 0.5
};


function getLayersCount(offsetValue): number {
    let layers = 1;
    if (offsetValue > 0 && offsetValue < 12) {
        layers += 1
    }
    else if (offsetValue >= 12) {
        layers += 2;
    }

    return layers
}

function getShadowValueRamp(valueSequeceIndex, spread: number): ElevationRamp {
    const offsetValue = valueSequence[valueSequeceIndex];
    let layers = getLayersCount(offsetValue);
    const shadowRampDefinition: ElevationRamp = {
        "100": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 1, spread)
        },
        "200": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 2, spread)
        },
        "300": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 3, spread)
        },
        "400": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 4, spread)
        },
        "500": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 5, spread)
        },
        "600": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 6, spread)
        },
    };

    return shadowRampDefinition;
}

function adjustSpread(spread, blurValue) {
    if(spread < 0 &&  Math.abs(spread) >= blurValue) {
        return adjustSpread(++spread, blurValue);
    }

    return spread
}

function getShadowValue(layers: number, sequeceStartIndex: number, colorIndex: number, spread: number): EffectTokenValue[] {
    let shadowValue: EffectTokenValue[] = [
        _clone(effectTemplate)
    ]

    for (let l = 0; l < layers; l++) {
        const sequenceIndex = sequeceStartIndex + l;
        const offsetValue = valueSequence[sequenceIndex];
        const radiusValue = valueSequence[sequenceIndex + 1];

        let layerValue: EffectTokenValue = {
            ..._clone(effectTemplate),
            color: `{utility.shade.${colorIndex}00}`,
            offsetY: offsetValue,
            radius: radiusValue,
            spread: adjustSpread(spread, offsetValue)
        }
        shadowValue.push(layerValue)
    }

    return shadowValue;
}

function generateShadows(size: number, spread: number): ElevationTokens {

    let spreadFactor = 0;

    if(spread < 0) {
        spreadFactor = -1;
    }
    else if(spread > 0) {
        spreadFactor = 1;
    }

    let ramp = {};

    for (let s = 1; s <= 6; s++) {
        ramp[`shadow-${s}`] = getShadowValueRamp(size++, spread);
        spread += spreadFactor;
    }

    return ramp as ElevationTokens;
}