import chroma from "chroma-js";
import { roundTwoDigits } from "../utils/round-two-digits";
import { parseColor } from "../utils/figma-colors";

export function renderShades(parentNode, name, shades, colors) {
    let frame: FrameNode = figma.createFrame();
    frame.resizeWithoutConstraints(320, frame.height);
    frame.layoutMode = "VERTICAL";
    frame.name = name;

    for (const [shadeName, color] of Object.entries(shades)) {
        renderColor(frame, `accent/${name}/${shadeName}`, color, colors);
    }

    parentNode.appendChild(frame);
    return parentNode;
}

export function renderColor(parentNode, name, color, colors) {


    let frame = figma.createFrame();
    frame.layoutMode = "VERTICAL";
    frame.layoutAlign = 'STRETCH';
    frame.name = name;


    frame.verticalPadding = 16;
    frame.horizontalPadding = 20;

    const {
        r, g, b, a
    } = parseColor(color, colors);
    const chromaColor = chroma.gl(r, g, b, a);


    frame.fills = [{ type: 'SOLID', color: { r, g, b }, opacity: a }]

    const opaqueColor = chroma.gl(r, g, b, 1);
    const mixedColor = chroma.mix(opaqueColor, "white", 1 - a);
    console.log(name, mixedColor.rgba());

    let contrast = [
        chroma.contrast("white", mixedColor),
        chroma.contrast(chroma.hsl([0, 0, 0.22]), mixedColor)
    ];

    let contrastWhiteRow = getRow(frame, contrast[0] > 2.5);
    let contrastBlackRow = getRow(frame, contrast[0] > 2.5);
    let luminanceRow = getRow(frame, contrast[0] > 2.5);
    let hslRow = getRow(frame, contrast[0] > 2.5);

    // await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    contrastWhiteRow.labelNode.characters = "vs white";
    contrastWhiteRow.valueNode.characters = `${roundTwoDigits(contrast[0])}`;
    contrastBlackRow.labelNode.characters = "vs black";
    contrastBlackRow.valueNode.characters = `${roundTwoDigits(contrast[1])}`;
    luminanceRow.labelNode.characters = "luminance";
    luminanceRow.valueNode.characters = `${roundTwoDigits(chromaColor.luminance())}`;
    hslRow.labelNode.characters = "hsl";
    hslRow.valueNode.characters = `${outputHSL(chromaColor).join(", ")}`;

    parentNode.appendChild(frame);

    frame.resize(200, frame.height);

    return parentNode;
}

function getRow(parentNode, isWhite: boolean) {

    const textNode: TextNode = figma.createText();
    const frame = figma.createFrame();
    frame.name = "row";
    frame.layoutMode = "HORIZONTAL";
    frame.layoutAlign = "STRETCH";
    frame.primaryAxisSizingMode = "FIXED";
    frame.primaryAxisAlignItems = "SPACE_BETWEEN"
    frame.counterAxisSizingMode = "AUTO";
    frame.fills = [];

    textNode.name = "label"

    const valueLabel = textNode.clone();
    valueLabel.name = "value-label";

    frame.appendChild(textNode)
    frame.appendChild(valueLabel);

    const color = isWhite ? {
        r: 1, g: 1, b: 1
    } : {
        r: 0, g: 0, b: 0
    }


    textNode.fills = [{ type: 'SOLID', color, opacity: 0.8 }]
    valueLabel.fills = [{ type: 'SOLID', color }]

    parentNode.appendChild(frame);

    return {
        labelNode: textNode, valueNode: valueLabel
    };
}

export function outputHSL(chromaColor) {
    const [h, s, l] = chromaColor.hsl();
    return [Math.round(h), roundTwoDigits(s), roundTwoDigits(l)];
}