    let result = {};

    figma.currentPage.selection.forEach((group, i) => {

        let groupData = {};
        result[group.name] = groupData;

        group.children.forEach((node, i) => {
            let rumpSteps = {}
            groupData[`shadow-${i+1}`] = rumpSteps;

            const layers = node.children.filter(n => {
                return n.name.startsWith('Layer') && n.visible;
            })

            const shadows = layers.map(node => {
                const spreadComp = node.findOne((node) => {
                    return node.name == 'spread' && node.type == 'INSTANCE'
                });
                const hasStroke = spreadComp.children[0].strokes.lenght;

                console.log(spreadComp.children[0].strokeWeight)
                
                const spreadNegative = spreadComp.paddingTop;
                const spreadPositive = hasStroke ? spreadComp.children[0].strokeWeight : 0;
                const offsetY = node.paddingTop;
                const spread = spreadPositive - spreadNegative - offsetY / 2;
                const radius = node.effects.find(effect => {
                    return effect.type == 'LAYER_BLUR'
                }).radius;


                return {
                    type: 'DROP_SHADOW',
                    showShadowBehindNode: false,
                    color: "{utility.shade.100}",
                    blendMode: 'MULTIPLY',
                    offsetX: 0,
                    offsetY,
                    radius,
                    spread
                }
            })

            for(let a = 1; a < 6; a++ ) {
                rumpSteps[`${a}00`] = {
                    "$value": shadows.map(s => {
                        return {
                            ...s,
                            color: `{utility.shade.${a}00}`
                        }
                    }),
                    "$type": "effect"
                }
            }
        })
    })
    JSON.stringify(result)