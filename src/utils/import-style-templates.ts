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

        figma.skipInvisibleInstanceChildren = true;
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
        if(node.type != 'FRAME' || node.visible != true) {
            return; // skip everyting that is not a regular frame
        }
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
            for(const sourceFrame of matchData.source.children) {
                const target = matchData.target.findChild(n => n.name === sourceFrame.name);
                if(target?.type == 'COMPONENT' && sourceFrame.type == 'FRAME') {
                    await processNode(sourceFrame, target);
                }
            }
        }
        else {
            await processNode(matchData.source, matchData.target);
        }

        
    }
    return total;

}

async function processNode(sourceFrame: FrameNode|InstanceNode, targetComponent: ComponentNode) {
    await copyStyles(sourceFrame, targetComponent);
    await bindVairables(sourceFrame, targetComponent);

    let index = 0;
    for(const sourceNode of sourceFrame.children) {
        figma.skipInvisibleInstanceChildren = false;
        let targetNode = targetComponent.findOne(n => n.name === sourceNode.name);

        if(!targetNode) {
            // copy a component and insert it into the same position as it is in sourceFrame
            const clone = sourceNode.clone();
            targetComponent.insertChild(index++, clone);
            return;
        }

        resizeAndReposition(sourceNode, targetNode);

        if(sourceNode.type == 'INSTANCE' && targetNode.type == 'INSTANCE') {
            await copyOverrides(sourceNode, targetNode, targetComponent);
        }
        if (
            sourceNode.type == 'FRAME' && targetNode.type == 'FRAME' ||
            sourceNode.type == 'INSTANCE' && targetNode.type == 'INSTANCE' ||
            sourceNode.type == 'BOOLEAN_OPERATION' && targetNode.type == 'BOOLEAN_OPERATION'
        ){
            await copyNodeProps(sourceNode, targetNode);
        }
    }

    await delayAsync(10);
}

async function copyNodeProps(sourceNode: FrameNode | BooleanOperationNode | InstanceNode, targetNode: FrameNode | BooleanOperationNode | InstanceNode ) {
    targetNode.fills = _clone(sourceNode.fills);
    targetNode.effects = _clone(sourceNode.effects);
    targetNode.strokes = _clone(sourceNode.strokes);
    targetNode.opacity = _clone(sourceNode.opacity);
    targetNode.visible = _clone(sourceNode.visible);
    targetNode.isMask = _clone(sourceNode.isMask);
    targetNode.strokeAlign = _clone(sourceNode.strokeAlign);

    targetNode.strokeAlign = _clone(sourceNode.strokeAlign);
    targetNode.strokeCap = _clone(sourceNode.strokeCap);
    targetNode.strokeJoin = _clone(sourceNode.strokeJoin);
    targetNode.strokeMiterLimit = _clone(sourceNode.strokeMiterLimit);
    targetNode.strokeWeight = _clone(sourceNode.strokeWeight);

    if (sourceNode.type == 'FRAME' && targetNode.type == 'FRAME') {
        targetNode.constraints = _clone(sourceNode.constraints);
        targetNode.layoutGrids = _clone(sourceNode.layoutGrids);
        targetNode.strokeBottomWeight = _clone(sourceNode.strokeBottomWeight);
        targetNode.strokeLeftWeight = _clone(sourceNode.strokeLeftWeight);
        targetNode.strokeRightWeight = _clone(sourceNode.strokeRightWeight);
        targetNode.strokeTopWeight = _clone(sourceNode.strokeTopWeight);
    }

    await copyStyles(sourceNode, targetNode);
    await bindVairables(sourceNode, targetNode);
}

async function bindVairables(sourceFrame: SceneNode, targetComponent: SceneNode) {
    const boundVairables = Object.entries(sourceFrame.boundVariables);
    return await Promise.all(boundVairables.map(async ([propName, varBinding]) => {
        return await bindVariable(sourceFrame, targetComponent, propName, varBinding).catch((err) => {
            return err + `${propName}`;
        });
    })).catch(function(err) {
        console.log(err.message); // some coding error in handling happened
    });    
}

function resizeAndReposition(sourceNode: SceneNode, targetNode: SceneNode) {
    if(targetNode == null) {
        return;
    }

    if(sourceNode.type == 'BOOLEAN_OPERATION') {
        sourceNode.children.forEach(source => {
            if('findOne' in targetNode) {
                const target =  targetNode.findOne(n => n.name === source.name);
                resizeAndReposition(source, target);
            }
        })

    }
    else {
        targetNode.x = sourceNode.x;
        targetNode.y = sourceNode.y;

        if('resize' in targetNode) {
            targetNode.resize(sourceNode.width, sourceNode.height);
        }
    }
}

function copyComponentProps(source: InstanceNode, target: InstanceNode) {
    // COPY COMPONENT PROPS ----------------
    const sourceComponentProps = source.componentProperties;
    const propsCopy = {};

    Object.keys(sourceComponentProps).forEach(key => {
        propsCopy[key] = sourceComponentProps[key].value;

    })
    target.setProperties(propsCopy);
}

async function copyOverrides(sourceNode: InstanceNode, targetNode: SceneNode, targetComponent: ComponentNode) {
    if(targetNode.type == 'INSTANCE') {
        // SWAP INSTANCES ---------------------
        const sourceMainComp = await sourceNode.getMainComponentAsync();
        const targetMainComp = await targetNode.getMainComponentAsync();

        const doSwap = sourceMainComp.id !== targetMainComp.id;
        if(doSwap) {
            targetNode.swapComponent(sourceMainComp);
        }
        copyComponentProps(sourceNode, targetNode);
    }

    for(const prop of sourceNode.overrides) {
        const type = targetNode.type;

        if(
            type != 'FRAME' && 
            type != 'BOOLEAN_OPERATION' && 
            type != 'COMPONENT_SET' && 
            type != 'COMPONENT' && 
            type != 'INSTANCE' && 
            type != 'GROUP' && 
            type != 'SECTION') {
            return;
        }

        const source = await figma.getNodeByIdAsync(prop.id) as SceneNode;

        if(!source ) debugger

        const fields = prop.overriddenFields;
        const target =  /*source.name == targetNode.name ? targetNode :*/ targetNode.findOne(n => n.name === source.name);

        if(target != null) {
            fields.forEach(field => {
                let propName = field as string;
 
                if(field == 'stokeTopWeight') {
                    propName = 'strokeTopWeight'
                }
                
                if(field == 'componentProperties' && source.type == 'INSTANCE' && target.type == 'INSTANCE') {
                    copyComponentProps(source, target);
                }
                else if(
                    propName != 'componentPropertyDefinitions' && 
                    propName != 'height' &&
                    propName != 'overlayBackground' &&
                    propName != 'overlayBackgroundInteraction' &&
                    propName != 'overlayPositionType' &&
                    propName != 'parent' &&
                    propName != 'type' && 
                    propName != 'width' &&
                    propName != 'boundVariables') {

                    
                    if(target[propName] != source[propName]) {
                        console.log(`applying ${propName}:${source[propName]} to ${source.name}`);
                        target[propName] = _clone(source[propName]);
                    }
                }
                
            });
            
            await bindVairables(source, target);
        }
    }

}

async function copyStyles(sourceFrame: SceneNode, targetComponent: SceneNode) {
    if('effectStyleId' in sourceFrame && 'effectStyleId' in targetComponent) {
        await targetComponent.setEffectStyleIdAsync(sourceFrame.effectStyleId);
    }
    if('gridStyleId' in sourceFrame && 'gridStyleId' in targetComponent) {
        await targetComponent.setGridStyleIdAsync(sourceFrame.gridStyleId);
    }
    if('fillStyleId' in sourceFrame && 'fillStyleId' in targetComponent) {
        await targetComponent.setFillStyleIdAsync(sourceFrame.fillStyleId as string);
    }
    if('strokeStyleId' in sourceFrame && 'strokeStyleId' in targetComponent) {
        await targetComponent.setStrokeStyleIdAsync(sourceFrame.strokeStyleId);
    }
}

async function bindVariable(sourceFrame: SceneNode, targetComponent: SceneNode, propName: any, variableBinding: any): Promise<SceneNode> {
    if (propName == 'fills' && 'fills' in sourceFrame && 'fills' in targetComponent && !targetComponent['fillStyleId']) {
        targetComponent.fills = await bindPropertyVariables(sourceFrame.fills, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'strokes' && 'strokes' in sourceFrame && 'strokes' in targetComponent && !targetComponent['strokeStyleId']) {
        targetComponent.strokes = await bindPropertyVariables(sourceFrame.strokes, figma.variables.setBoundVariableForPaint);
    }    
    else if (propName == 'effects' && 'effects' in sourceFrame && 'effects' in targetComponent && !targetComponent['effectStyleId']) {
        targetComponent.effects = await bindPropertyVariables(sourceFrame.effects, figma.variables.setBoundVariableForEffect);
    }
    else if(propName == 'layoutGrids' && 'layoutGrids' in sourceFrame && 'layoutGrids' in targetComponent) {
        targetComponent.layoutGrids = await bindPropertyVariables(sourceFrame.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
    }
    else if(propName == 'componentProperties' || propName == 'textRangeFills') {
        console.warn(`Swap does not work for ${propName}, skipping node`);
    }
    else {
        const variable = await findVariableMatch(variableBinding.id);
        if (variable) {
            var alias = targetComponent.boundVariables[propName] as VariableAlias;
            if(variable.id != alias.id) {
                targetComponent.setBoundVariable(propName, null);
                targetComponent.setBoundVariable(propName, variable.id);
            }
        }    
    }

    return targetComponent;
}

