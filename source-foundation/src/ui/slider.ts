import nouislider, { API } from 'nouislider';
import { camelToTitle, toTitleCase } from '../utils/text-to-title-case';
import { debounce } from '../utils/debounce';
import { roundOneDigit } from '@foundation/utils/round-decimals';
import { defaultSettings } from '@foundation/defaults';
import { transformValue } from '@foundation/import-ui';

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
    direction?: 'ltr'|'rtl';
    valueMap?: string[];
    range?: any;
    linked: boolean;
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



function getMarkup({ label, name, value, linked }) {
    const linkIndicator = linked === true ? `
        <span class="icon-sm icon icon-moon hover:icon-moon-filled opacity-70 hover:opacity-100 dark-mode-custom-param" data-tooltip="top" data-offset="8" popovertarget="darkModeOnlyToolTip"></span>
        <span class="icon-sm icon icon-sun hover:icon-sun-filled opacity-70 hover:opacity-100 light-mode-custom-param" data-tooltip="top" data-offset="8" popovertarget="lightModeOnlyToolTip"></span>         
    ` : '';
    const linkedClassName = linked === true ? 'theme-specific' : '';
    return `
        <div class="sliders custom-dark-dot flex flex-row items-center w-full gap-xs ${linkedClassName}" data-name=${name}>
            <span class="text-label">${label}</span>
            <div class="noui-slider flex-1"></div>
            <div class="icon-indicator-wrap">
                ${linkIndicator}
            </div>
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
    const range = options.range || {};
    const defaultValue = transformValue(options.name,  defaultSettings[options.name], "IN") as number;


    slider = nouislider.create(slider, {
        connect: options.direction == 'rtl' ? 'upper' : 'lower',
        animate: false,
        start: [defaultValue],
        step: options.step,
        direction: options.direction || 'ltr',
        tooltips: options.tooltips || false,
        range: {
            'min': [options.min],
            'max': [options.max],
            ...range
        }
    });

    el.querySelectorAll('.noUi-handle').forEach(el => {
        el.addEventListener('dblclick', (e) => {
            slider.set([defaultValue])
        })
    })

    displayInput.value = getDisplayValue(options.value, options.valueMap).toString();

    slider.on('update', debounce((values, handle) => {
        
        var value = parseFloat(values[handle]);
        const currentValue = valueInput.value;
        const newValue = `${value}`;
        valueInput.value = newValue;

        if(currentValue != newValue) {
            displayInput.dispatchEvent(new Event('input', { 'bubbles': true }));
        }

        displayInput.value = getDisplayValue(value, options.valueMap).toString();
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
        return roundOneDigit(parseFloat(value));
    }

}