import nouislider from 'nouislider';
import { toTitleCase } from '../utils/text-to-title-case';

interface SliderComponent {
    rootElement: HTMLElement;
    params: SliderOptions;
    valueInput: HTMLInputElement;
    displayInput: HTMLInputElement;
    slider: any;
}

interface SliderOptions {
    label: string;
    name: string;
    min: number;
    max: number;
    step: number;
    value: number;
    syncValue: boolean;
    valueMap?: string[];
}

export function initSlider(el: HTMLElement, options?): SliderComponent {
    const data = el.dataset.slider || '{}';
    let params = JSON.parse(data) as SliderOptions;
    params = Object.assign(params, options || {})

    return { rootElement: el, params, ...processComponent(el, params) };
}

function getMarkup({ label, name, min, max, step, value }) {
    return `
        <div class="sliders flex flex-row items-center" data-name=${name}>
            <span class="text-label">${label}</span>
            <div class="slider"></div>
            <input data-display-element type="text" readonly>
            <input data-value-element type="hidden" name="${name}" value="${value}">
        </div>    
    `
}

function processComponent(el, options: SliderOptions) {
    el.innerHTML = getMarkup(options);

    const displayInput = el.querySelector(`input[data-display-element]`) as HTMLInputElement;
    const valueInput = el.querySelector(`input[data-value-element]`) as HTMLInputElement;
    let slider = el.querySelector(`.slider`);

    slider = nouislider.create(slider, {
        connect: 'lower',
        animate: false,
        start: [options.value],
        step: options.step,
        range: {
            'min': [options.min],
            'max': [options.max]
        }
    });


    displayInput.value = getDisplayValue(options.value, options.valueMap);

    slider.on('update', function (values, handle) {
        var value = parseInt(values[handle]);
        valueInput.value = `${value}`;

        displayInput.dispatchEvent(new Event('input', { 'bubbles': true }));
        displayInput.value = getDisplayValue(value, options.valueMap);
    });

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