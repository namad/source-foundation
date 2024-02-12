import { delayAsync } from "./delay-async";
import { _clone } from "./clone";
import { findFigmaVariableByName } from "./figma-variables";

let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;

export async function exportStyleTemplates() {


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
        if ('findAllWithCriteria' in node) {
            const componentNodes = node.findAllWithCriteria({types: ["COMPONENT"]});
            _nodes = _nodes.concat(componentNodes);
        }
        
    });

    const containerFrame = createFrameNode();

    containerFrame.fills = [];
    containerFrame.layoutMode = 'VERTICAL';
    containerFrame.layoutSizingHorizontal = 'HUG';
    containerFrame.layoutSizingVertical = 'HUG';
    containerFrame.paddingBottom = 48;
    containerFrame.paddingLeft = 48;
    containerFrame.paddingRight = 48;
    containerFrame.paddingTop = 48;

    console.log(_nodes);
    const total = _nodes.length;
    totalLayersCount = total;

    while(_nodes.length) {
        const componentNode = _nodes.shift();
        // (70 - 44) / 70
        const percent = Math.round(((total - _nodes.length) / total) * 100);
        const msg = `${percent}% done. Working on layer ${total - _nodes.length} out of ${total}`
        console.log(msg);

        containerFrame.appendChild(checkNode(componentNode));
        await delayAsync(10);
    }

    figma.currentPage.selection = [containerFrame];
    return total;

}


function checkNode(node: ComponentNode) {
    let parent: FrameNode;

    if(node.parent.type == 'COMPONENT_SET') {
        parent = getFrame(node.parent);
    }

    const frame = processComponentNode(node);

    if(parent) {
        parent.appendChild(frame)
        frame.x = node.x;
        frame.y = node.y;
        return parent
    }

    return frame;
}


function processComponentNode(node: ComponentNode) {
    const instance = node.createInstance();
    const frame = instance.detachInstance();
    frame.name = node.name;

    const instances = frame.findAllWithCriteria({types: ['INSTANCE']});

    instances.forEach(i => {
        i.mainComponent.name
    })
    return frame;
}

const componentSetFramesCache = new Map<string, FrameNode>();

function getFrame(cmpSet: ComponentSetNode) {
    const chachedFrame = componentSetFramesCache.get(cmpSet.name);

    if(chachedFrame) {
        return chachedFrame;
    }

    const frame = createFrameNode();
    frame.name = cmpSet.name;
    frame.resize(cmpSet.width, cmpSet.height);

    componentSetFramesCache.set(cmpSet.name, frame);

    figma.currentPage.selection = [frame];

    return frame;
    
}

function createFrameNode() {
    const frame = figma.createFrame();
    frame.x = -10000;
    frame.y = -10000;
    return frame;
}

