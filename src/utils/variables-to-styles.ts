console.clear();

const styles = figma.getLocalPaintStyles();
const variables = figma.variables.getLocalVariables();

let count = 0;

function getStyleByName(name) {
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

export function bindVariablesAndStyles() {
    count = 0;
    variables.forEach(variable => {
        const name = variable.name;
        let style = getStyleByName(name);

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