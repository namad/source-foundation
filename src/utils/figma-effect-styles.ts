import { EffectToken } from "../effect-tokens";
import { DesignToken } from "../main";
import { parseColorValue } from "./figma-colors";
import { parseReferenceGlobal, findVariableByReferences } from "./token-references";


/*
    This method reads shadow color values directly from Figma Variables
*/
export async function importEffectStyles(tokens) {
    for(const [name, tokenData] of Object.entries(tokens)) {
        let token = tokenData as DesignToken;

        if (token.$type == 'boxShadow') {
            let figmaStyle = await getStyleByName(name);
            
            if(!figmaStyle) {
                figmaStyle = figma.createEffectStyle();
            }
            const values = token.$value as EffectToken[];
            const effects = [];

            for(const value of values) {
                const figmaVariable = await findVariableByReferences(value.color);

                if(!figmaVariable) {
                    debugger
                }
                const collectionID = figmaVariable.variableCollectionId;
                const collection = await figma.variables.getVariableCollectionByIdAsync(collectionID);
                const defaultMode = collection.modes[0].modeId;

                const figmaEffect = Object.assign({}, value, {
                    color: figmaVariable.valuesByMode[defaultMode] as RGBA
                });
                
                const effect = convertEffectStyleToFigma(figmaEffect) as DropShadowEffect;
                const effectVar = figma.variables.setBoundVariableForEffect(effect, 'color', figmaVariable) as any;
                effectVar.spread = effect.spread;

                effects.push(effectVar);
            }

            figmaStyle.name = name;
            figmaStyle.effects = effects;
            figmaStyle.description = token.description || figmaStyle.description;
            // figmaStyle.documentationLinks = token.documentationLink ? [token.documentationLink] : figmaStyle.documentationLinks;
        }
    }
}

async function getLocalStyles() {
    return await figma.getLocalEffectStylesAsync();
};

async function getStyleByName(name) {
    const stylesByType = await getLocalStyles();
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
    };

}
