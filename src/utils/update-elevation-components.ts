import { EffectToken } from "../effect-tokens";
import { DesignToken } from "../main";

export function updateElevationComponents(tokens) {
    figma.skipInvisibleInstanceChildren = true;
    const pageComponents = figma.currentPage.findAllWithCriteria({ types: ['COMPONENT'] });
    const elevationComponents = pageComponents.filter(node => {
        const name = node.name.toLocaleLowerCase();
        return name.startsWith('shadow');
    });

    if (elevationComponents.length == 0) {
        return console.warn('No elevation components has been found');
    }

    Object.keys(tokens).forEach(name => {
        const variants = tokens[name];
        const [shade, token] = Object.entries(variants)[0];
        const settings = token['$value'] as EffectToken[];

        const elevationComponent = elevationComponents.find(node => {

            const nameNormalized = name.toLocaleLowerCase().replace(/-/g, " ");
            const nodeNameNormalized = node.name.toLocaleLowerCase().replace(/-/g, " ");

            console.log(nameNormalized, nodeNameNormalized);

            return nodeNameNormalized.indexOf(nameNormalized) > -1
        })

        processComponent(settings, elevationComponent);

    })
}

function clone(val) {
    const type = typeof val
    if (val === null) {
        return null
    } else if (type === 'undefined' || type === 'number' ||
        type === 'string' || type === 'boolean') {
        return val
    } else if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => clone(x))
        } else if (val instanceof Uint8Array) {
            return new Uint8Array(val)
        } else {
            let o = {}
            for (const key in val) {
                o[key] = clone(val[key])
            }
            return o
        }
    }
    throw 'unknown'
}

function processComponent(effects: EffectToken[], component: ComponentNode) {

    if (!component) {
        throw('Elevation component was not found')
    }

    const shadowLayers = component.findChildren(node => {
        const name = node.name.toLocaleLowerCase();
        return name.startsWith('shadow');
    }) as VectorNode[];

    const maskLayer = component.findChild(node => {
        return node.name.toLocaleLowerCase() === 'mask';
    }) as BooleanOperationNode;

    maskLayer.visible = false;

    effects.forEach((shadowSettings, index) => {
        const shadowLayer = shadowLayers[index];

        const x = parseFloat(shadowSettings.x);
        const y = parseFloat(shadowSettings.y);
        const radius = parseFloat(shadowSettings.blur);
        const spread = parseFloat(shadowSettings.spread);


        const width = component.width + (2 * spread);
        const height = component.height + (2 * spread);
        const left = x - spread;
        const top = y - spread;

        const blur: BlurEffect = {
            type: "LAYER_BLUR",
            radius: radius,
            visible: true
        };

        shadowLayer.effects = [blur];
        shadowLayer.resize(width, height);
        shadowLayer.x = left;
        shadowLayer.y = top;
    });

    const absoluteBoundingBox = component.absoluteBoundingBox;
    const absoluteRenderBounds = component.absoluteRenderBounds;

    const maskWidth = absoluteRenderBounds.width;
    const maskHeight = absoluteRenderBounds.height;
    const maskLeft = (absoluteRenderBounds.x - absoluteBoundingBox.x);
    const maskTop = (absoluteRenderBounds.y - absoluteBoundingBox.y);

    const innerLayer = maskLayer.findChild(node => node.name === 'inner') as VectorNode;
    const outerLayer = maskLayer.findChild(node => node.name === 'outer') as VectorNode;

    outerLayer.resize(maskWidth, maskHeight);
    outerLayer.x = maskLeft;
    outerLayer.y = maskTop;

    innerLayer.resize(component.width, component.height);
    innerLayer.x = 0;
    innerLayer.y = 0;

    maskLayer.visible = true;
}