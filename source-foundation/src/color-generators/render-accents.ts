import { ImportFormData } from "../import-ui";
import { generateGlobalAccentPalette } from "./accent-palette-generator";
import { renderShades } from "./swatches-generator";


export function renderAccents(params: ImportFormData, name?): FrameNode {

    const colors = generateGlobalAccentPalette(params);
    const existingNode = figma.currentPage.findChild((node) => node.name == (name || 'Accent Colours'));
    existingNode?.remove();

    let frame = figma.createFrame();
    frame.layoutMode = 'HORIZONTAL';
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.itemSpacing = 16;
    frame.fills = [];

    frame.name = name || 'Accent Colours'

    frame.x = 0;
    frame.y = 0;

    for (const [name, shades] of Object.entries(colors)) {
        renderShades(frame, name, shades, colors)
    }

    return frame;
}

