import { radiiSizeName, spacingSizeName, systemAccentList, typographySizeValues } from "../../defaults";
import { initSlider } from "../slider";
import { sliders } from "../ref/sliders-collection";

const sliderElements = document.querySelectorAll('[data-slider]');
sliderElements.forEach((el: HTMLDivElement) => {
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
    initSlider(el, { valueMap: valueMaps[type] || null });

});
