import chroma from "chroma-js";
import { renderColor } from "./swatches-generator";


function getSaturationModifier(l) {
    // visual representation
    // https://www.desmos.com/calculator/02ufrfsuzy

    const o = 50; // ranges goes from 0 to 100, 50 is the lowest value 
    const k = 70; // sets how much to modify, higher values outputs smaller modifier
    const v = 1 + (Math.pow(l - o, 2) / k - Math.pow(o, 2) / k) / 100;
    return v;
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
        const sMod = 1 / Math.pow(1.3, (max - value) / 100);
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
