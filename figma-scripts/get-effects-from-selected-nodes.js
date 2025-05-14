    function getHexFromRGB(color) {
    const hex = [color.r, color.g, color.b]
        .map((value) =>
        Math.round(value * 255)
            .toString(16)
            .padStart(2, "0")
        )
        .join("");

    return `rgba(0 0 0 / ${Math.round(color.a * 100)}%)`;
    }

    let resultArray = {};

    figma.currentPage.selection.forEach((group, i) => {

        let groupData = {};

        resultArray[group.name] = groupData;

        group.children.forEach(n => {
            if(n.effects.length == 0) return

            const name = n.name;
            groupData[name] = {};
            
            for(let a = 1; a < 6; a++ ) {
                groupData[name][`${a}00`] = {
                    "$value": n.effects.map(effect => {
                        const alpha = Math.round(effect.color.a * 100);
                        let color = `{utility.shade.${a}00}`;

                        if(alpha <= 1) {
                            color = null
                        }
                        else if(alpha > 5) {
                            color = `{utility.shade.${a+1}00}`
                        }


                        return {
                            type: effect.type,
                            showShadowBehindNode: false,
                            color,
                            offsetX: effect.offset.x,
                            offsetY: effect.offset.y,
                            radius: effect.radius,
                            spread: effect.spread
                        }
                    }).filter(effect => {
                        return effect.color != null
                    }),
                    "$type": "effect"
                }
                
            }

        })

    })

    JSON.stringify(resultArray)
