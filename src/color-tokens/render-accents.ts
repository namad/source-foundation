import { renderShades } from "./swatches-generator";


export function renderAccents(colors, name?): FrameNode {

    let frame = figma.createFrame();
    frame.layoutMode = 'HORIZONTAL';
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.itemSpacing = 16;

    frame.name = name || 'Accent Colours'

    frame.x = 0;
    frame.y = 0;

    for (const [name, shades] of Object.entries(colors)) {
        renderShades(frame, name, shades, colors)
    }

    return frame;
}

