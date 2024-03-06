console.clear();

async function getStyleByName(name) {
    const styles = await figma.getLocalPaintStylesAsync();
    return styles.find((style) => style.name === name);
};

function getFigmaColor(): Paint {
    return {
        type: "SOLID",
        visible: true,
        blendMode: "NORMAL",    
        color: {
            r: 1,
            g: 1,
            b: 1
        },
        opacity: 1
    }
};

export async function bindVariablesAndStyles() {
    const variables = await figma.variables.getLocalVariablesAsync();
    let count = 0;
    variables.forEach(async variable => {
        const name = variable.name;
        let style = await getStyleByName(name);

        if (variable.resolvedType !== 'COLOR') {
            return; 
        }

        if(!style) {
            count++;
            style = figma.createPaintStyle();
            style.name = name;
            style.paints = [
                getFigmaColor()
            ]
        }

        let newPaints = style.paints.map((paint: SolidPaint) => {
            return figma.variables.setBoundVariableForPaint(paint, 'color', variable);
        });
        
        style.paints = newPaints;
    });
    
    figma.notify(`✅ Variables and styles are now connected. ${count} styles created`);
}