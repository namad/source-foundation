

function delayAsync(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export async function processComponents() {
    figma.skipInvisibleInstanceChildren = true;
    let pageComponents = figma.currentPage.findAllWithCriteria({types: ['COMPONENT']});
    const size = pageComponents.length;
    let count = 0;

    while (pageComponents.length) {
        const componentFrame = pageComponents.shift();
        figma.skipInvisibleInstanceChildren = false;
        const children = componentFrame.findAll((n: FrameNode) => {
            return n.layoutPositioning == 'ABSOLUTE' 
                    && n.width > 0 
                    && n.height > 0 
                    && n.constraints.horizontal === 'STRETCH' 
                    && n.constraints.vertical === 'STRETCH';
        });

        await fixLayers(children as FrameNode[], componentFrame);
        console.log(`%cComponent ${count++} / ${size}`, `color: #0773DF; font-weight: bold;`)
    }
}

async function fixLayers(nodes: FrameNode[], component: ComponentNode) {
    let node,
        parent,
        offsetX,
        offsetY,
        height,
        width;

    let updated = 0,
        skipped = 0,
        failed = 0;

    console.log(`Working on ${component.name}`);
    try {
        while(nodes.length) {

            console.log(`Remaining nodes: ${nodes.length}`);

            node = nodes.shift();

            if(checkInstance(node, component)) {
                skipped++;
                continue;
            }

            parent = node.parent as FrameNode;
            offsetX = node.x;
            offsetY = node.y;
            height = parent.height - 2 * offsetY;
            width = parent.width - 2 * offsetX;

            if (node.width != width || node.height != height) {
                node.resize(width, height);
                updated++;
            }

            await delayAsync(100);
        }

        console.log(`Resized: ${updated}, Skipped: ${skipped}`);
    }
    catch (e) {
        failed++;
        debugger;
    }
}

function checkInstance(targetFrame, componentFrame) {
    let node = targetFrame.parent;

    while(node != componentFrame) {
        if(node.type == 'INSTANCE') {
            return true;
        }
        node = node.parent;
    }

    return false;
}