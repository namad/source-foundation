import chroma from "chroma-js";
import { renderColor } from "./swatches-generator";

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
  let step = 0;
  
  while (value <= max ) {
    const color = chroma.hsl(hue, saturation, value/100);

    tokens[`grey-${value}`] = {
      '$value': color.hex(),
      '$type': 'color'
    }
    
    value++;
  }

  tokens["grey-100"] = {
    "$value": "#FFFFFF",
    '$type': 'color'
  }
  return tokens;
}

export function renderNeutrals(colors, name?): FrameNode {
    debugger;
    let frame = figma.createFrame();
    frame.layoutMode = 'HORIZONTAL';
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.itemSpacing = 0;

    frame.name = name || 'Global Neutrals'
    
    frame.x = 0;
    frame.y = 0;

    for (const [name, color] of Object.entries(colors)) {
        renderColor(frame, name, color, colors)
    }

    return frame;
}
