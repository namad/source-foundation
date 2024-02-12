import { delayAsync } from "./delay-async";
import { _clone } from "./clone";
import { findFigmaVariableByName } from "./figma-variables";
import { bindPropertyVariables, findVariableMatch } from "./swap-variables";

let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;

//cache all component sets to speed up the process
let componentSets;

function getComponentSets() {
    if(!componentSets) {
        console.log(`First time look up, running slow...`)

        componentSets = figma.currentPage.findAllWithCriteria({
            types: ['COMPONENT', 'COMPONENT_SET']
        });
    }
    return componentSets;
}


function findComponent(cmpName: string): ComponentNode | ComponentSetNode {
    let masterComponent = getComponentSets().find(item => item.name === cmpName);
    return masterComponent || null;
}

export async function importStyleTemplates() {
    totalLayersCount = 0;
    reboundLayersCount = 0;
    skippedLayersCount = 0;

    let _nodes: SceneNode[] = [];
    figma.skipInvisibleInstanceChildren = false;

    if (figma.currentPage.selection.length == 0) {
        figma.notify("Select at least one layer and try again");
        return false;    
    }

    figma.currentPage.selection.forEach((node: SceneNode) => {
        if ('children' in node) {
            _nodes = _nodes.concat(node.children);
        }
    });

    console.log(_nodes);

    let matches: {
        source: FrameNode,
        target: ComponentNode | ComponentSetNode
    }[] = [];


    _nodes.forEach(node => {
        const componentNode = findComponent(node.name);
        if(componentNode) {
            matches.push({
                source: node as FrameNode,
                target: componentNode
            })
        }
    })

    const total = matches.length;
    totalLayersCount = total;

    while(matches.length) {
        const matchData = matches.shift();
        const percent = Math.round(((total - matches.length) / total) * 100);
        const msg = `${percent}% done. Working on layer ${total - matches.length} out of ${total}`;

        console.log(msg);

        if(matchData.target.type == 'COMPONENT_SET') {
            matchData.source.children.forEach(async (sourceFrame) => {
                const target = matchData.target.findChild(n => n.name === sourceFrame.name);
                if(target?.type == 'COMPONENT' && sourceFrame.type == 'FRAME') {
                    await processNode(sourceFrame, target);
                }
                
            })
        }
        else {
            await processNode(matchData.source, matchData.target);
        }

        
    }
    return total;

}


async function processNode(sourceFrame: FrameNode|InstanceNode, targetComponent: ComponentNode) {

    let frames: SceneNode[] = [];
    copyStyles(sourceFrame, targetComponent);
    bindVairables(sourceFrame, targetComponent);

    sourceFrame.children.forEach(node => {
        const target = targetComponent.findOne(n => n.name === node.name);

        if(target) {
             copyStyles(node, target);
             bindVairables(node, target);
        }
        if(node.type == 'INSTANCE') {
            copyOverrides(node, targetComponent);
        }
        else {
            frames.push(node);
        }
    })

    frames.forEach(node => {
        figma.skipInvisibleInstanceChildren = false;
        const match = targetComponent.findOne(n => n.name === node.name);

        if(match == null) return;

        const copy = node.clone();
        const index = match.parent.children.indexOf(match);
        targetComponent.insertChild(index, copy);
        match.remove();
    })


    await delayAsync(10);
}

function bindVairables(sourceFrame: SceneNode, targetComponent: SceneNode) {
    const boundVairables = Object.entries(sourceFrame.boundVariables);
    boundVairables.forEach(([propName, varBinding]) => {
        bindVariable(sourceFrame, targetComponent, propName, varBinding);
    });

}

function copyOverrides(sourceFrame: InstanceNode, targetComponent: ComponentNode) {
    sourceFrame.overrides.forEach(prop => {
        const frame = figma.getNodeById(prop.id);
        const fields = prop.overriddenFields;

        const target = targetComponent.findOne(n => n.name === frame.name)

        if(target != null) {
            fields.forEach(field => {
                if(
                    field != 'componentPropertyDefinitions' && 
                    field != 'height' &&
                    field != 'overlayBackground' &&
                    field != 'overlayBackgroundInteraction' &&
                    field != 'overlayPositionType' &&
                    field != 'parent' &&
                    field != 'type' && 
                    field != 'width'
                ) {
                    target[field] = _clone(sourceFrame[field]);
                }
                
            });
            const boundVairables = Object.entries(sourceFrame.boundVariables);
            boundVairables.forEach(([propName, varBinding]) => {
                bindVariable(sourceFrame, targetComponent, propName, varBinding);
            });
        }
    })

}

function copyStyles(sourceFrame: SceneNode, targetComponent: SceneNode) {
    if('effectStyleId' in sourceFrame && 'effectStyleId' in targetComponent) {
        targetComponent.effectStyleId = sourceFrame.effectStyleId;
    }
    if('gridStyleId' in sourceFrame && 'gridStyleId' in targetComponent) {
        targetComponent.gridStyleId = sourceFrame.gridStyleId;
    }
    if('fillStyleId' in sourceFrame && 'fillStyleId' in targetComponent) {
        targetComponent.fillStyleId = sourceFrame.fillStyleId;
    }
    if('strokeStyleId' in sourceFrame && 'strokeStyleId' in targetComponent) {
        targetComponent.strokeStyleId = sourceFrame.strokeStyleId;
    }
}

function bindVariable(sourceFrame: SceneNode, targetComponent: SceneNode, propName: any, variableBinding: any): SceneNode {
    if (propName == 'fills' && 'fills' in sourceFrame && 'fills' in targetComponent) {
        targetComponent.fills = bindPropertyVariables(sourceFrame.fills, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'strokes' && 'strokes' in sourceFrame && 'strokes' in targetComponent) {
        targetComponent.strokes = bindPropertyVariables(sourceFrame.strokes, figma.variables.setBoundVariableForPaint);
    }    
    else if (propName == 'effects' && 'effects' in sourceFrame && 'effects' in targetComponent) {
        if (sourceFrame.effectStyleId !== '') {
            const style = figma.getStyleById(sourceFrame.effectStyleId);
            const styleName = style.name;
            const localStyle = figma.getLocalEffectStyles().find(style => {
                return style.name === styleName;
            });
            targetComponent.effects = [];
            targetComponent.effectStyleId = "";
            targetComponent.effectStyleId = localStyle ? localStyle.id : "";
            return targetComponent;
        }

        targetComponent.effects = bindPropertyVariables(sourceFrame.effects, figma.variables.setBoundVariableForEffect);
    }
    else if(propName == 'layoutGrids' && 'layoutGrids' in sourceFrame && 'layoutGrids' in targetComponent) {
        targetComponent.layoutGrids = bindPropertyVariables(sourceFrame.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
    }
    else if(propName == 'componentProperties' || propName == 'textRangeFills') {
        console.warn(`Swap does not work for ${propName}, skipping node`);
    }
    else {
        const variable = findVariableMatch(variableBinding.id);
        if (variable) {
            targetComponent.setBoundVariable(propName, null);
            targetComponent.setBoundVariable(propName, variable.id);
        }    
    }

    return targetComponent;
}

