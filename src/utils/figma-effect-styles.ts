import { DesignToken } from "../main";
import { convertToFigmaColor } from "./figma-colors";
import { parseReferenceGlobal, parseVariableReferences } from "./token-references";


interface EffectToken {
    "color": string;
    "type": string;
    "x": string;
    "y": string;
    "blur": string;
    "spread": string;
}

/*
    This method reads shadow color values directly from Figma Variables
*/
export function importEffectStyles(tokens) {
    debugger;

    Object.entries(tokens).forEach(([name, tokenData]) => {
        let token = tokenData as DesignToken;

        if (token.$type == 'boxShadow') {
            let figmaStyle = getStyleByName(name) || figma.createEffectStyle();
            const values = token.$value as EffectToken[];

            const resolved = values.map(value => {
                const figmaVariable = parseVariableReferences(value.color);
                const collectionID = figmaVariable.variableCollectionId;
                const collection = figma.variables.getVariableCollectionById(collectionID);
                const defaultMode = collection.modes[0].modeId;

                const figmaEffect = Object.assign({}, value, {
                    color: figmaVariable.valuesByMode[defaultMode] as RGBA
                })
                return convertEffectStyleToFigma(figmaEffect);
            })

            figmaStyle.name = name;
            figmaStyle.effects = resolved;
        }
    })
}

function getLocalStyles() {
    return figma.getLocalEffectStyles();
};

function getStyleByName(name) {
    const stylesByType = getLocalStyles();
    const match = stylesByType.find((style) => style.name === name);

    if (match) {
        return match;
    } else {
        return null;
    }
};

function parseBoolean(val: string) {
    return val !== "false";
}

function convertEffectStyleToFigma(value: {
    "color": RGBA;
    "type": string;
    "x": string;
    "y": string;
    "blur": string;
    "spread": string;
    "showShadowBehindNode"?: string;
}): Effect {

    return {
        type: "DROP_SHADOW",
        color: value.color,
        offset: {
            x: parseInt(value.x),
            y: parseInt(value.y)
        },
        radius: parseInt(value.blur),
        spread: parseInt(value.spread),
        visible: true,
        blendMode: "NORMAL",
        showShadowBehindNode: parseBoolean(value.showShadowBehindNode)
    }

}
