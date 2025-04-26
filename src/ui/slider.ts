import nouislider, { API } from 'nouislider';
import { toTitleCase } from '../utils/text-to-title-case';
import { debounce } from '../utils/debounce';

export interface SliderComponent {
    rootElement: HTMLElement;
    params: SliderOptions;
    valueInput: HTMLInputElement;
    displayInput: HTMLInputElement;
    slider: API;
}

interface SliderOptions {
    label: string;
    name: string;
    min: number;
    max: number;
    step: number;
    value: number;
    syncValue: boolean;
    tooltips?: boolean;
    valueMap?: string[];
}

export function initSlider(el: HTMLElement, options?): SliderComponent {
    const data = el.dataset.slider || '{}';
    try {
        let params = JSON.parse(data) as SliderOptions;
        params = Object.assign(params, options || {})
        return { rootElement: el, params, ...processComponent(el, params) };
    }

    catch(e) {
        debugger;
    }
}

function getMarkup({ label, name, min, max, step, value }) {
    return `
        <div class="sliders flex flex-row items-center w-full gap-xs" data-name=${name}>
            <span class="text-label">${label}</span>
            <div class="noui-slider flex-1"></div>
            <span class="icon-sm icon icon-link-2 opacity-70 dark-mode-lock"></span>
            <input data-display-element type="text" readonly>
            <input data-value-element type="hidden" name="${name}" value="${value}">
        </div>    
    `
}

function processComponent(el, options: SliderOptions) {
    el.innerHTML = getMarkup(options);

    const displayInput = el.querySelector(`input[data-display-element]`) as HTMLInputElement;
    const valueInput = el.querySelector(`input[data-value-element]`) as HTMLInputElement;
    let slider = el.querySelector(`.noui-slider`);

    slider = nouislider.create(slider, {
        connect: 'lower',
        animate: false,
        start: [options.value],
        step: options.step,
        tooltips: options.tooltips || false,
        range: {
            'min': [options.min],
            'max': [options.max]
        }
    });


    displayInput.value = getDisplayValue(options.value, options.valueMap);

    slider.on('update', debounce((values, handle) => {
        
        var value = parseInt(values[handle]);
        const currentValue = valueInput.value;
        const newValue = `${value}`;
        valueInput.value = newValue;

        if(currentValue != newValue) {
            displayInput.dispatchEvent(new Event('input', { 'bubbles': true }));
        }

        displayInput.value = getDisplayValue(value, options.valueMap);
    }, 1))

    valueInput.addEventListener("input", (event) => {
        slider.set([valueInput.value]);
    });

    return { valueInput, displayInput, slider }
}

function getDisplayValue(value, valueMap) {
    if (valueMap != null) {
       return toTitleCase(valueMap[value]);
    }
    else {
        return parseInt(value);
    }

}

function syncValues({ slider, valueInput }) {
    slider.on('update', function (values, handle) {
        var value = parseInt(values[handle]);
        valueInput.value = `${value}`;
    });


    valueInput.addEventListener("input", (event) => {
        slider.set([valueInput.value]);
    });
}