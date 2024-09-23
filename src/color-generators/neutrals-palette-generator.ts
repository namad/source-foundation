import chroma from "chroma-js";
import { renderColor } from "./swatches-generator";


function getSaturationModifier(lightness) {
    // visual representation
    // https://www.desmos.com/calculator/02ufrfsuzy

    const offset = 50; // ligthness range is [0, 100], for saturation we need to offset the curve to make [-50, 50] range 
    const magnitude = 70; // sets how much to modify, higher values outputs smaller modifier
    const saturationModifier = 1 + (Math.pow(lightness - offset, 2) / magnitude - Math.pow(offset, 2) / magnitude) / 100;
    return saturationModifier;
}


export function generateNeutrals(params) {
    const {
        hue = 200,
        saturation = 0.1,
        min = 4,
        max = 100,
        distance
    } = params || {};

    let tokens = {};

    let value = min as number;

    while (value <= max) {
        const color = chroma.hsl(hue, saturation * getSaturationModifier(value), value / 100);

        tokens[`grey-${value}`] = {
            '$value': color.hex(),
            '$type': 'color',
            'private': true
        }
        value++;
    }

    tokens["grey-100"] = {
        "$value": "#FFFFFF",
        '$type': 'color',
        'private': true
    }
    return tokens;
}

export function renderNeutrals(colors, name?): FrameNode {

    const existingNode = figma.currentPage.findChild((node) => node.name.startsWith('Global Neutrals'));
    existingNode?.remove();

    let frame = figma.createFrame();
    frame.layoutMode = 'HORIZONTAL';
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.itemSpacing = 0;

    frame.name = name || 'Global Neutrals'

    frame.x = 0;
    frame.y = -156;

    for (const [name, color] of Object.entries(colors)) {
        renderColor(frame, name, color, colors)
    }

    return frame;
}
