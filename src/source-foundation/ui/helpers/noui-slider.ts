import { radiiSizeName, spacingSizeName, systemAccentList, typographySizeValues } from "../../defaults";
import { initSlider } from "../slider";
import { sliders } from "../ref/sliders-collection";

document.querySelectorAll('[data-slider]').forEach((el: HTMLDivElement) => {
    const valueMaps = {
        'semantics': systemAccentList,
        'typography': typographySizeValues,
        'radii': radiiSizeName,
        'spacing': spacingSizeName,
        'shadowsColor': [
            'normal', 'soft', 'softer'
        ],
        'shadowsStyle': [
            'normal', 'deep', 'deeper'
        ]
    };

    const type = el.dataset.type;

    const sliderComponent = initSlider(el, { valueMap: valueMaps[type] || null });
    sliders[sliderComponent.params.name] = sliderComponent;
});
