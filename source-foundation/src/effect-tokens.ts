import { defaultSettings } from './defaults';
import { DesignTokensRaw, EffectDesignToken, EffectTokenValue } from './import-tokens';
import { ImportFormData, refreshUI } from './import-ui';
import { _clone } from './utils/clone';
import { delayAsync } from './utils/delay-async';

import { flattenObject } from "./utils/flatten-object";
import { findVariableByReferences } from './utils/token-references';

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
    let depth = params.shadowsStyle - 2;

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

const valueSequence = [1, 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 72, 88, 104, 120, 136, 152, 168];
const effectTemplate: EffectTokenValue = {
    "type": "DROP_SHADOW",
    "showShadowBehindNode": false,
    "color": "{utility.shade.100}",
    "blendMode": "MULTIPLY",
    "offsetX": 0,
    "offsetY": 0,
    "radius": 1,
    "spread": 0
};


function getLayersCount(offsetValue): number {
    let layers = 1;
    if (offsetValue > 0 && offsetValue < 12) {
        layers = 2
    }
    else if (offsetValue >= 12) {
        layers = 3;
    }
    else if (offsetValue >= 40) {
        layers = 4;
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

/*
    spread becomes useless once it goes below vertical offset and the shadow disappears
    this function check both values and adjust spead value to prevent shadow from dissapearing
*/
function adjustNegativeSpreadValue(spread, offsetY) {
    if(spread < 0 &&  Math.abs(spread) >= offsetY) {
        return adjustNegativeSpreadValue(++spread, offsetY);
    }

    return spread
}

function getShadowValue(layers: number, sequeceStartIndex: number, colorIndex: number, spread: number): EffectTokenValue[] {
    let shadowValue: EffectTokenValue[] = [
        {
            ..._clone(effectTemplate),
            color: `{utility.shade.${colorIndex}00}`,
        }
    ]

    for (let l = 0; l < layers; l++) {
        const sequenceIndex = sequeceStartIndex + l;
        const offsetY = valueSequence[sequenceIndex];
        const radius = valueSequence[sequenceIndex + 1];
        spread *= 1.25;

        let layerValue: EffectTokenValue = {
            ..._clone(effectTemplate),
            color: `{utility.shade.${colorIndex}00}`,
            offsetY,
            radius,
            spread: adjustNegativeSpreadValue(spread, offsetY)
        }
        shadowValue.push(layerValue)
    }

    return shadowValue;
}

function getSpreadFactor(spread: number) {
    let spreadFactor = 0;

    if(spread < 0) {
        spreadFactor = -1;
    }
    else if(spread > 0) {
        spreadFactor = 1;
    }
    return spreadFactor;
}
function generateShadows(size: number, spread: number): ElevationTokens {

    let ramp = {};

    spread /= 1.25;
    for (let s = 1; s <= 6; s++) {
        ramp[`shadow-${s}`] = getShadowValueRamp(size++, spread);
        spread *= 1.25;
    }

    return ramp as ElevationTokens;
}

function findShadowComponent(name, destinationPage: PageNode): ComponentNode {
    const pageComponents = destinationPage.findAllWithCriteria({
        types: ['COMPONENT']
    });

    return pageComponents.find(node => {
        const pluginData = node.getPluginData('SourceShadow');
        return pluginData === name || node.name.includes(name);
    });
}

const _constraints: Constraints = {
    horizontal: 'STRETCH',
    vertical: 'STRETCH'
}

function createMask(shadowComponentFrame: SceneNode) {
    const baseRectOuter = figma.createRectangle();
    const baseRectInner = figma.createRectangle();
    const maskLayer = figma.subtract([baseRectInner, baseRectOuter], shadowComponentFrame as FrameNode);

    baseRectOuter.name = 'mask-outer';
    baseRectOuter.constraints = _constraints;
    baseRectOuter.setPluginData('SourceShadowElement', 'mask-outer');
    baseRectInner.name = 'mask-inner';
    baseRectInner.constraints = _constraints;
    baseRectInner.resize(shadowComponentFrame.width, shadowComponentFrame.height);
    baseRectInner.setPluginData('SourceShadowElement', 'mask-inner');
    baseRectInner.x = 0;
    baseRectInner.y = 0;

    maskLayer.name = 'mask';
    maskLayer.setPluginData('SourceShadowElement', 'mask');
    maskLayer.isMask = true;
    maskLayer.locked = true;

    return maskLayer;
}

function getMaskLayer(frame: SceneNode) {
    let maskLayer;

    if('findOne' in frame) {
        maskLayer = frame.findOne(node => node.getPluginData('SourceShadowElement') == 'mask' || node.name == 'mask') as BooleanOperationNode;
    }

    if(!maskLayer) {
        maskLayer = createMask(frame);
    }

    return maskLayer;
}

function createShadowComponent(name, shadowToken: EffectDesignToken): ComponentNode {

    const shadowComponentFrame = figma.createFrame();
    shadowComponentFrame.name = name;
    shadowComponentFrame.clipsContent = false;
    shadowComponentFrame.fills = [];

    const maskLayer = createMask(shadowComponentFrame)

    shadowToken.$value.forEach((effectValue, index) => {
        const shadowLayer = figma.createRectangle();
        shadowLayer.name = `shadow-${index++}`;
        shadowLayer.constraints = _constraints;        
        shadowComponentFrame.appendChild(shadowLayer)
        shadowLayer.locked = true;
    })    



    const shadowComponent = figma.createComponentFromNode(shadowComponentFrame);

    shadowComponent.setPluginData('SourceShadow', name);
    return shadowComponent;
}

function getShadowComponent(name, destinationPage: PageNode, shadowToken: EffectDesignToken): ComponentNode {
    let shadowComponent = findShadowComponent(name, destinationPage);
    if(!shadowComponent) {
        shadowComponent = createShadowComponent(name, shadowToken)
    }

    shadowComponent.clipsContent = false;

    return shadowComponent;
}

export async function createUpdateElevationComponents(params: ImportFormData, destinationPage: string) {
    const tokens = getElevationTokens(params, true) as ElevationTokens;
    const page = figma.root.children.find(node => node.name == destinationPage) || figma.currentPage;
    await figma.setCurrentPageAsync(page);

    let shadowComponents: ComponentNode[] = [];

    for (const key in tokens){

        const shadowRamp = tokens[key] as ElevationRamp;
        const shadowToken = shadowRamp['200'];

        const shadowComponent = getShadowComponent(key, page, shadowToken);
        const maskLayer = getMaskLayer(shadowComponent);

        if(!maskLayer) {
            throw new Error(`Error processing ${shadowComponent.name}. Cannot find mask layer, aborting...`);
        }

        const baseRectOuter = maskLayer.findOne(node => node.getPluginData('SourceShadowElement') == 'mask-outer' || node.name == 'mask-outer') as RectangleNode

        if(!baseRectOuter) {
            throw new Error(`Error processing ${shadowComponent.name} > ${maskLayer.name}. Cannot find mask outer mask rectangle, aborting...`);
        }

        maskLayer.visible = false;

        await updateMaskComponentLayers(shadowComponent, shadowToken);

        const absoluteBoundingBox = shadowComponent.absoluteBoundingBox;
        const absoluteRenderBounds = shadowComponent.absoluteRenderBounds;

        baseRectOuter.resize(absoluteRenderBounds.width, absoluteRenderBounds.height)
        baseRectOuter.x = (absoluteRenderBounds.x - absoluteBoundingBox.x);
        baseRectOuter.y = (absoluteRenderBounds.y - absoluteBoundingBox.y);

        maskLayer.visible = true;
        shadowComponents.push(shadowComponent)
    }

    await delayAsync(200);

    figma.currentPage.selection = shadowComponents;
    figma.viewport.scrollAndZoomIntoView(shadowComponents)
}

async function updateMaskComponentLayers(shadowComponent: ComponentNode, shadowToken: EffectDesignToken) {
        const shadowTokenValue = shadowToken.$value;
        const shadowLayersChildren = shadowComponent.children as Array<SceneNode>;

        // let shadowLayerIndex = shadowLayersChildren.length - 1;
        // while(shadowLayerIndex > shadowTokenValue.length) {
        //     shadowLayersChildren[shadowLayerIndex].remove();
        //     shadowLayerIndex--;
        // }

        let index = 1;
        while(shadowTokenValue.length) {
            const effectValue = shadowTokenValue.shift();
            const colorVariable = await findVariableByReferences(effectValue.color);
            let paint: Paint = figma.util.solidPaint('#000000')

            paint = figma.variables.setBoundVariableForPaint(paint, 'color', colorVariable);
            let shadowLayer = shadowComponent.children[index] as RectangleNode;
            
            // findChild(node => node.name == `shadow-${index}`) as RectangleNode;
            
            if(shadowLayer && shadowLayer.type != 'RECTANGLE') {
                throw new Error(`shadow-${index}  type is ${shadowLayer.type} but has to be a rectangle`);
            }

            if(!shadowLayer) {
                shadowLayer = figma.createRectangle()
                
                shadowLayer.constraints = {
                    horizontal: 'STRETCH',
                    vertical: 'STRETCH'
                };
                shadowComponent.insertChild(index, shadowLayer)
            }

            shadowLayer.name = `shadow-${index}`;
            shadowLayer.fills = [paint];
            shadowLayer.visible = true;
            shadowLayer.blendMode = effectTemplate.blendMode;

            const LayerBlur: BlurEffect = {
                type: "LAYER_BLUR",
                visible: true,
                radius: effectValue.radius
            }
            shadowLayer.effects = [LayerBlur];

            shadowLayer.x = effectValue.offsetX - effectValue.spread;
            shadowLayer.y = effectValue.offsetY - effectValue.spread;
            shadowLayer.resize(shadowComponent.width + 2 * effectValue.spread, shadowComponent.height + 2 * effectValue.spread);

            index++;

        }
}