import { delayAsync } from "./delay-async";
import { _clone } from "./clone";
import { findFigmaVariableByName } from "./figma-variables";

let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;

export async function swapVariables() {


    totalLayersCount = 0;
    reboundLayersCount = 0;
    skippedLayersCount = 0;

    let _nodes = [];
    figma.skipInvisibleInstanceChildren = false;

    if (figma.currentPage.selection.length == 0) {
        figma.notify("Select at least one layer and try again");
        return false;    
    }

    figma.currentPage.selection.forEach((node: SceneNode) => {

        if('boundVariables' in node && Object.keys(node.boundVariables).length > 0) {
            _nodes.push(node);
        }

        if ('findAll' in node) {
            const nodes = node.findAll((n: SceneNode) => {
                if('boundVariables' in n) {
                    return Object.keys(n.boundVariables).length > 0
                }
                else {
                    return false;
                }
            });
            _nodes = _nodes.concat(nodes);
        }
    });

    console.log(_nodes);
    const total = _nodes.length;
    totalLayersCount = total;

    while(_nodes.length) {
        const node = _nodes.shift();
        // (70 - 44) / 70
        const percent = Math.round(((total - _nodes.length) / total) * 100);
        const msg = `${percent}% done. Working on layer ${total - _nodes.length} out of ${total}`
        console.log(msg);

        await processLayer(node).catch(err => {
            throw(err);
        });
    }

    return total;
}

async function traverse(node) {
    console.log(`Node: ${node.name}`);
    debugger;

    await processLayer(node);


    if ("children" in node && node.children.length) {
        console.log(`Traversing "${node.name}" children`);
        for (const child of node.children) {
            await traverse(child)
        }
    }
}

function getVariableName(variable: Variable): string {
    const name = variable.name;
    return name.replaceAll('sx', 'spacing').replaceAll('sy', 'spacing/minor');
}

export function findVariableMatch(varId: string) {
    const variable = figma.variables.getVariableById(varId);

    if (!variable) {
        return null;
    }

    let collectionId = null;
    let collection = null;

    collectionId = variable.variableCollectionId;
    collection = figma.variables.getVariableCollectionById(collectionId);
    const name = getVariableName(variable);
    const targetVariable = findFigmaVariableByName(name, collection.name);

    if(!targetVariable) {
        console.warn(`Cannot find ${collection.name} > ${variable.name}`);
        return null;
    };

    // if (targetVariable.id == variable.id) {
    //     console.warn(`${variable.name} is a local variable`);
    //     skippedLayersCount++;
    //     return null;
    // }

    return targetVariable;
}


async function processLayer(node:SceneNode) {
    const boundVairables = Object.entries(node.boundVariables);
    boundVairables.forEach(([propName, boundVar]) => {
        bindVariable(node, propName, boundVar);
    });

    await delayAsync(2);
}

export function bindPropertyVariables(props, figmaFn) {
    const propsCopy = _clone(props).map(prop => {
        Object.keys(prop.boundVariables).forEach((field: VariableBindablePaintField) => {
            const alias = prop.boundVariables[field];
            const variable = findVariableMatch(alias.id);

            const spread = prop['spread']; //workaround Figma bug. It resets spread after calling figma.variables.setBoundVariableForEffect

            if (variable) {
                // prop.boundVariables = {};
                prop = figmaFn(prop, field, null);
                prop = figmaFn(prop, field, variable);
            }

            if(typeof spread != 'undefined') {
                prop['spread'] = spread;
            }
        });

        return prop;
    });

    return propsCopy;
}

function bindEffectVariables(props, figmaFn) {
}

function bindVariable(node: SceneNode, propName: any, variableBinding: any): SceneNode {

    if(node.type == 'TEXT') {
        const textStyle = figma.getStyleById(node.textStyleId as string);

        if(textStyle) {
            const localTextStyle = figma.getLocalTextStyles().find(style => style.name === textStyle.name);

            if(localTextStyle) {
                node.textStyleId = localTextStyle.id;
            }
        }
    }

    if (propName == 'fills' && 'fills' in node) {
        node.fills = bindPropertyVariables(node.fills, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'strokes' && 'strokes' in node) {
        node.strokes = bindPropertyVariables(node.strokes, figma.variables.setBoundVariableForPaint);
    }    
    else if (propName == 'effects' && 'effects' in node) {
        if (node.effectStyleId !== '') {
            const style = figma.getStyleById(node.effectStyleId);
            const styleName = style.name;
            const localStyle = figma.getLocalEffectStyles().find(style => {
                return style.name === styleName;
            });
            node.effects = [];
            node.effectStyleId = "";
            node.effectStyleId = localStyle ? localStyle.id : "";
            return node;
        }

        node.effects = bindPropertyVariables(node.effects, figma.variables.setBoundVariableForEffect);
    }
    else if(propName == 'layoutGrids' && 'layoutGrids' in node) {
        node.layoutGrids = bindPropertyVariables(node.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
    }
    else if(propName == 'componentProperties' || propName == 'textRangeFills') {
        console.warn(`Swap does not work for ${propName}, skipping node`);
    }
    else {
        const variable = findVariableMatch(variableBinding.id);
        if (variable) {
            node.setBoundVariable(propName, null);
            node.setBoundVariable(propName, variable.id);
        }    
    }

    return node;
}

