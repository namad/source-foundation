import chroma from "chroma-js";
import { renderColor } from "./swatches-generator";


function getSaturationModifier(l) {
  return 1 - getSaturationModifierValue(0) + getSaturationModifierValue(l);
}


function getSaturationModifierValue(l) {
  const x = (l-50)/10;
  return Math.abs((Math.pow(x, 2) / -70));  
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
  
  while (value <= max ) {
    const sMod = 1 / Math.pow(1.3, (max - value) / 100);
    const color = chroma.hsl(hue, saturation * getSaturationModifier(value), value/100);

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
