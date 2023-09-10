

function delayAsync(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export async function processComponents() {
    figma.skipInvisibleInstanceChildren = true;
    let framesCollection = figma.currentPage.findAllWithCriteria({types: ['COMPONENT']});
    const size = framesCollection.length;
    let count = 0;

    while (framesCollection.length) {
        const item = framesCollection.shift();
        figma.skipInvisibleInstanceChildren = false;
        const children = item.findAll((n: FrameNode) => {
            return n.layoutPositioning == 'ABSOLUTE' 
                    && n.width > 0 
                    && n.height > 0 
                    && n.constraints.horizontal === 'STRETCH' 
                    && n.constraints.vertical === 'STRETCH';
        });

        await fixLayers(children as FrameNode[], item);
        console.log(`%c${count++} / ${size} updated`, `color: #0773DF; font-weight: bold;`)
    }
}

async function fixLayers(nodes: FrameNode[], component: ComponentNode) {
    let node,
        parent,
        offsetX,
        offsetY,
        height,
        width;

    try {
        while(nodes.length) {

            console.log(nodes.length, component.name);

            node = nodes.shift();
            parent = node.parent as FrameNode;
            offsetX = node.x;
            offsetY = node.y;
            height = parent.height - 2 * offsetY;
            width = parent.width - 2 * offsetX;

            if (node.width != width || node.height != height) {
                node.resize(width, height);
            }

            await delayAsync(100);
        }
    }
    catch (e) {
        debugger;
    }
}