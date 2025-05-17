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
    proxy?: boolean;
    noDisplayValue?: boolean;
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



function getMarkup(options: SliderOptions) {
    const {
        linked,
        proxy,
        label,
        name,
        value,
        noDisplayValue
    } = options;

    const linkIndicator = linked === true ? `
        <span class="icon-sm icon icon-moon hover:icon-moon-filled opacity-70 hover:opacity-100 dark-mode-custom-param" data-tooltip="top" data-offset="8" popovertarget="darkModeOnlyToolTip"></span>
        <span class="icon-sm icon icon-sun hover:icon-sun-filled opacity-70 hover:opacity-100 light-mode-custom-param" data-tooltip="top" data-offset="8" popovertarget="lightModeOnlyToolTip"></span>         
    ` : '';
    const linkedClassName = linked === true ? 'theme-specific' : '';
    const inputName = proxy === true ? `${name}Proxy` : name;
    return `
        <div class="sliders custom-dark-dot flex flex-row items-center w-full gap-xs ${linkedClassName}" data-name=${name}>
            <span class="text-label">${label}</span>
            <div class="noui-slider flex-1"></div>
            <div class="icon-indicator-wrap">
                ${linkIndicator}
            </div>
            <input data-display-element type="${noDisplayValue == true ? 'hidden' : 'text'}" readonly>
            <input data-value-element type="hidden" name="${inputName}" value="${value}">
        </div>
    `
}

function processComponent(el, options: SliderOptions) {
    el.innerHTML = getMarkup(options);
    el.dataset.sliderComponent = options.name;
    el.dataset.sliderMaster = options.proxy ? 'false' : 'true';

    const displayInput = el.querySelector(`input[data-display-element]`) as HTMLInputElement;
    let valueInput = el.querySelector(`input[data-value-element]`) as HTMLInputElement;
    let slider = el.querySelector(`.noui-slider`);
    const range = options.range || {};
    const defaultValue = transformValue(options.name,  defaultSettings[options.name], "IN") as number;

    const noUIslider = nouislider.create(slider, {
        connect: options.direction == 'rtl' ? 'upper' : 'lower',
        animate: false,
        start: [defaultValue],
        step: options.step,
        direction: options.direction || 'ltr',
        tooltips: options.tooltips || options.noDisplayValue || false,
        range: {
            'min': [options.min],
            'max': [options.max],
            ...range
        }
    })
    


    el.querySelectorAll('.noUi-handle').forEach(el => {
        el.addEventListener('dblclick', (e) => {
            noUIslider.set([defaultValue])
        })
    })

    displayInput.value = getDisplayValue(options.value, options.valueMap).toString();

    if(options.proxy === true) {
        valueInput = document.querySelector(`input[name=${options.name}]`) as HTMLInputElement;
        const masterSliderDiv = document.querySelector(`[data-slider-component=${options.name}][data-slider-master=true] .noui-slider`);
        const masterSlider = masterSliderDiv['noUiSlider'] as API;

        masterSlider.on('change', (values, handle) => {
            let value = parseFloat(values[handle].toString());
            displayInput.value = getDisplayValue(value, options.valueMap).toString();
            noUIslider.set(values)
        });

        noUIslider.on('update', (values, handle) => {
            let value = parseFloat(values[handle].toString());
            displayInput.value = getDisplayValue(value, options.valueMap).toString();
            masterSlider.set(values)
        }); 
    }
    else {
        noUIslider.on('update', (values, handle) => {
            let value = parseFloat(values[handle].toString());
            const currentValue = valueInput.value;
            const newValue = `${value}`;
            valueInput.value = newValue;

            if(currentValue != newValue) {
                valueInput.dispatchEvent(new Event('input', { 'bubbles': true }));
            }

            displayInput.value = getDisplayValue(value, options.valueMap).toString();
        });

    }    
    valueInput.addEventListener("update", (event) => {
        noUIslider.set([valueInput.value]);
    });

    return { valueInput, displayInput, slider: noUIslider }
}

function getDisplayValue(value, valueMap) {
    if (valueMap != null) {
       return camelToTitle(valueMap[value]);
    }
    else {
        return roundOneDigit(parseFloat(value));
    }

}