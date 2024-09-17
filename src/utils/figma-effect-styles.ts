import { getThemeColors } from "../color-tokens";
import { EffectTokenValue } from "../effect-tokens";
import { DesignToken, globalTokens } from "../main";
import { _clone } from "./clone";
import { ColorFormat, FigmaRGB, convertFigmaColorToRgb, parseColorValue } from "./figma-colors";
import { getAliasName } from "./figma-variables";
import { parseReferenceGlobal, findVariableByReferences } from "./token-references";


let globalDictionary;
/*
    This method reads shadow color values directly from Figma Variables
*/
export async function importEffectStyles(tokens, dictionary?) {

    if(dictionary) {
        globalDictionary = dictionary;
    }

    for(const [name, tokenData] of Object.entries(tokens)) {
        let token = tokenData as DesignToken;

        if (token.$type == 'effect') {
            let figmaStyle = await getStyleByName(name);
            
            if(!figmaStyle) {
                figmaStyle = figma.createEffectStyle();
            }
            const values = token.$value as EffectTokenValue[];
            const effects = [];

            for(const effectValue of values) {
                const effect = await convertEffectStyleToFigma(effectValue) as Effect;
                effects.push(effect);
            }

            debugger;

            figmaStyle.name = name;
            figmaStyle.effects = effects;
            figmaStyle.description = token.description || figmaStyle.description;
        }
    }
}

interface BoundProp {
    propName: VariableBindableEffectField,
    variable: Variable
}

async function convertEffectStyleToFigma(value: EffectTokenValue): Promise<Effect> {
    const {
        effectTokenValue,
        boundProps 
    } = await resolveBoundValues(value)

    debugger;
    
    let effect = {
        type: effectTokenValue.type,
        radius: parseFloat(effectTokenValue.radius),
        visible: true
    }

    if(effectTokenValue.type == 'INNER_SHADOW' || effectTokenValue.type == 'DROP_SHADOW') {
        effect = Object.assign(effect, {
            color: figma.util.rgba(effectTokenValue.color),
            offset: {
                x: parseFloat(effectTokenValue.offsetX),
                y: parseFloat(effectTokenValue.offsetY)
            },
            spread: parseFloat(effectTokenValue.spread),
            blendMode: "NORMAL"
        })
    }

    if(effectTokenValue.type == 'DROP_SHADOW') {
        effect = Object.assign(effect, {
            showShadowBehindNode: parseBoolean(effectTokenValue.showShadowBehindNode)
        })
    }


    boundProps.forEach(boundData => {
        const effectCopy = figma.variables.setBoundVariableForEffect(effect as Effect,  boundData.propName, boundData.variable) as any;

        if(effect.type == "DROP_SHADOW" || effect.type == 'INNER_SHADOW') {
            effectCopy.spread = parseFloat(effectTokenValue.spread);
        }

        effect = effectCopy;
    });

    return effect as Effect;
}

async function getVariableValue(figmaVariable: Variable) {
    const collectionID = figmaVariable.variableCollectionId;
    const collection = await figma.variables.getVariableCollectionByIdAsync(collectionID);
    const defaultMode = collection.modes[0].modeId;
    const defaultValue: VariableValue = figmaVariable.valuesByMode[defaultMode];

    if(defaultValue['type'] == "VARIABLE_ALIAS") {
        const variable = await figma.variables.getVariableByIdAsync(defaultValue['id']);
        return await getVariableValue(variable);
    }
    else {
        return defaultValue;
    }
}

async function resolveBoundValues(effectValue: EffectTokenValue): Promise<{effectTokenValue: EffectTokenValue, boundProps: BoundProp[]}> {

    let copy = _clone(effectValue) as EffectTokenValue;
    let boundProps: BoundProp[] = [];


    for(const prop in copy) {
        const figmaVariable = await findVariableByReferences(copy[prop]);

        if(figmaVariable) {
            boundProps.push({
                propName: prop as VariableBindableEffectField,
                variable: figmaVariable
            });
            const defaultValue = await getVariableValue(figmaVariable)
            copy[prop] = defaultValue;
        }
        else {
            debugger;
            let val = parseReferenceGlobal(copy[prop], globalDictionary || globalTokens);

            if(prop == 'color') {
                const fallBackColor = figma.util.rgb('#FF0000');
                val = parseColorValue(val).rgb;
            }

            copy[prop] = val;
        }
    }

    return {effectTokenValue: copy, boundProps};
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



export async function convertFigmaEffectStyleToToken(style: EffectStyle, colorFormat?: ColorFormat): Promise<EffectTokenValue[]> {

    const effects = style.effects;
    const values = [];

    for(var effect of effects) {
        values.push(await convertFigmaShadowEffectToToken(effect, colorFormat));
    }

    return values;
}

async function convertFigmaShadowEffectToToken(effect: Effect, colorFormat?: ColorFormat): Promise<EffectTokenValue> {
    let effectTokenValue: EffectTokenValue = {
        "type": `${effect.type}`,
        "radius": `${effect.radius}`,
    };

    if(effect.type == "DROP_SHADOW" || effect.type == "INNER_SHADOW") {
        effectTokenValue = Object.assign(effectTokenValue, {
            "color": convertFigmaColorToRgb(effect.color, colorFormat),
            "blendMode": `${effect.blendMode}`,
            "offsetX": `${effect.offset.x}`,
            "offsetY": `${effect.offset.y}`,
            "spread": `${effect.spread}`,
        });
    }

    if(effect.type == "DROP_SHADOW") {
        effectTokenValue = Object.assign(effectTokenValue, {
            "showShadowBehindNode": `${effect.showShadowBehindNode || false}`
        });
    }


    for(const prop in effect.boundVariables) {
        const boundVariable = effect.boundVariables[prop];
        effectTokenValue[prop] = await getAliasName(boundVariable.id);
    }

    return effectTokenValue;
}