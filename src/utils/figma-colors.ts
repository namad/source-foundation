import chroma from 'chroma-js';

import { parseReferenceGlobal } from './token-references';

export interface FigmaRGB {
    r: number;
    g: number;
    b: number;
    a?: number;
}
const hexColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

export function convertFigmaColorToRgb(input: FigmaRGB, format?) {
    const {
        r, g, b, a
    } = input;

    //figma uses float 0...1 vs standard 0...255
    const figmaColorTransformed = {
        r: input.r * 255,
        g: input.g * 255,
        b: input.b * 255,
        a: input.a
    }
    let color = chroma.gl(r, g, b, a);

    debugger;

    switch(format) {
        case 'hex': {
            return color.hex();
        }
        case 'hsl': {
            return color.css('hsl')
        }
        default: {
            return color.css();
        }
    }
}

function convertToFigmaColor(input): FigmaRGB {
    let color;
  
    try {
        if (input.startsWith('rgb')) {
            const rgbValues = input.replace(/^rgba?\(|\s+|\)$/g, '').split(',');

            if(hexColorRegex.test(rgbValues[0])) {
                color = chroma(rgbValues[0]); // hexToFigmaRGB(rgbValues[0]);
                const alpha = parseFloat(rgbValues[1]);
                color = color.alpha(alpha);
            }
            else {
                color = chroma(input);   
            }
        }
        else {
            color = chroma(input);
        }
    }
    catch (e) {
        console.error(e);
        debugger;
        return null;
    }
  
    const [ 
        r, g, b, a 
    ] = color.gl();

    return {
        r, g, b, a
    };
}

export function parseColor(color, dictionary) {
    color = parseReferenceGlobal(color.trim(), dictionary);
    const figmaColor = convertToFigmaColor(color);

    if(figmaColor) {
        return figmaColor;
    } 
    else {
        debugger;
        throw new Error("Invalid color format");
    }
}

