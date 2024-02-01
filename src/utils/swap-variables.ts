import { delayAsync } from "./delay-async";
import { _clone } from "./clone";
import { findFigmaVariableByName } from "./figma-variables";


export async function swapVariables() {
    let _nodes = [];
    figma.skipInvisibleInstanceChildren = true;

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

    while(_nodes.length) {
        const node = _nodes.shift();
        console.log(`Processing layer ${total - _nodes.length} out of ${total}`);
        await processLayer(node).catch(err => {
            throw(err);
        });
    }
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

function findVariableMatch(varId: string) {
    const variable = figma.variables.getVariableById(varId);

    if (!variable) {
        return;
    }

    let collectionId = null;
    let collection = null;

    collectionId = variable.variableCollectionId;
    collection = figma.variables.getVariableCollectionById(collectionId);
    const name = getVariableName(variable);
    const targetVariable = findFigmaVariableByName(name, collection.name);

    if(!targetVariable) {
        throw(`Cannot find local variable ${name}`);
    };

    if (targetVariable.id == variable.id) {
        console.warn(`${variable.name} is a local variable`);
        return null;
    }

    if (targetVariable && targetVariable.id !== variable.id) {
        return targetVariable;
    }

    console.warn(`Cannot find ${collection.name} > ${variable.name}`);
    return null;
}


async function processLayer(node:SceneNode) {
    const boundVairables = Object.entries(node.boundVariables);
    boundVairables.forEach(([propName, boundVar]) => {
        bindVariable(node, propName, boundVar);
    });

    await delayAsync(2);
}

function bindPropertyVariables(props, figmaFn) {
    const propsCopy = _clone(props).map(prop => {
        Object.keys(prop.boundVariables).forEach((field: VariableBindablePaintField) => {
            const alias = prop.boundVariables[field];
            const variable = findVariableMatch(alias.id);
            prop.boundVariables = {};
            if (variable) {
                prop = figmaFn(prop, field, null);
                prop = figmaFn(prop, field, variable);
            }
        });

        return prop;
    });

    return propsCopy;
}

function bindVariable(node: SceneNode, propName: any, variableBinding: any): SceneNode {

    if (propName == 'fills' && 'fills' in node) {
        node.fills = bindPropertyVariables(node.fills, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'strokes' && 'strokes' in node) {
        node.strokes = bindPropertyVariables(node.strokes, figma.variables.setBoundVariableForPaint);
    }    
    else if (propName == 'effects' && 'effects' in node) {
        debugger;
        
        if (node.effectStyleId !== '') {
            const style = figma.getStyleById(node.effectStyleId);
            const styleName = style.name;
            const localStyle = figma.getLocalEffectStyles().find(style => {
                return style.name === styleName;
            });
            node.effectStyleId = localStyle ? localStyle.id : "";
            return node;
        }

        node.effects = bindPropertyVariables(node.effects, figma.variables.setBoundVariableForEffect);
    }
    else if(propName == 'layoutGrids' || propName == 'componentProperties' || propName == 'textRangeFills') {
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

