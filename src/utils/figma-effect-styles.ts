import { EffectToken } from "../effect-tokens";
import { DesignToken } from "../main";
import { parseColorValue } from "./figma-colors";
import { parseReferenceGlobal, findVariableByReferences } from "./token-references";


/*
    This method reads shadow color values directly from Figma Variables
*/
export function importEffectStyles(tokens) {
    Object.entries(tokens).forEach(([name, tokenData]) => {
        let token = tokenData as DesignToken;

        if (token.$type == 'boxShadow') {
            let figmaStyle = getStyleByName(name) || figma.createEffectStyle();
            const values = token.$value as EffectToken[];

            const resolved = values.map(value => {
                const figmaVariable = findVariableByReferences(value.color);
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
            x: parseFloat(value.x),
            y: parseFloat(value.y)
        },
        radius: parseFloat(value.blur),
        spread: parseFloat(value.spread),
        visible: true,
        blendMode: "NORMAL",
        showShadowBehindNode: parseBoolean(value.showShadowBehindNode)
    }

}
