import nouislider, { API } from 'nouislider';

import { defaultSettings } from '@foundation/defaults';
import { roundOneDigit } from '@foundation/utils/round-decimals';
import { debounce } from '@foundation/utils/debounce';
import { mainForm } from '@foundation/ui/ref/main-form';

const defaultValues = [
    defaultSettings.accentMinLuminance * 100,
    defaultSettings.accentMidLuminance * 100,
    defaultSettings.accentMaxLuminance * 100
]

const accentPalettePreviewDiv = document.getElementById(`accentPalettePreview`) as HTMLDivElement;
const keyColors = [
    accentPalettePreviewDiv.querySelector('[data-color-key="0"]'),
    accentPalettePreviewDiv.querySelector('[data-color-key="1"]'),
    accentPalettePreviewDiv.querySelector('[data-color-key="2"]'),
]

const luminanceSlider = document.querySelector('#luminanceSlider') as HTMLDivElement;
const luminanceSliderVals = [
    document.getElementById('luminanceValMin') as HTMLInputElement,
    document.getElementById('luminanceValMid') as HTMLInputElement,
    document.getElementById('luminanceValMax') as HTMLInputElement
]

nouislider.create(luminanceSlider, {
    start: defaultValues,
    connect: [false, true, true, false],
    step: 0.5,
    tooltips: [
        { 
            to: function(value) { 
                return 'Min: ' + roundOneDigit(value); 
            } 
        },
        { 
            to: function(value) { 
                return 'Mid: ' + roundOneDigit(value); 
            } 
        },
        { 
            to: function(value) { 
                return 'Max: ' + roundOneDigit(value); 
            } 
        }          
    ],
    direction: 'rtl',
    range: {
        'min': 5,
        '85%': 60,
        'max': 90
    }
}).on('update', debounce((values, handle) => {
    luminanceSliderVals[handle].value = values[handle] as string;
    mainForm.dispatchEvent(new Event('input', { 'bubbles': true }));
}, 1))

luminanceSlider['noUiSlider'].on('start', (values, handle) => {
    console.log(handle)
    const colorPreviewDiv = keyColors[handle];
    accentPalettePreviewDiv.classList.add('preview-adjustments');
    accentPalettePreviewDiv.dataset.colorKey = `${handle}`; 
    colorPreviewDiv.dispatchEvent(new Event('mouseenter', { 'bubbles': true }));
})

luminanceSlider['noUiSlider'].on('end', (values, handle) => {
    const colorPreviewDiv = keyColors[handle];
    accentPalettePreviewDiv.classList.remove('preview-adjustments');
    accentPalettePreviewDiv.dataset.colorKey = 'none';
    colorPreviewDiv.dispatchEvent(new Event('mouseleave', { 'bubbles': true }));
})

luminanceSliderVals.forEach((element, index) => {
    element.addEventListener("input", () => {
        const val = luminanceSliderVals.map(el => el.value);
        luminanceSlider['noUiSlider'].set(val);
    });
});

luminanceSlider.querySelectorAll('.noUi-handle').forEach(el => {
    el.addEventListener('dblclick', (e) => {
        luminanceSlider['noUiSlider'].set(defaultValues)
    })
})
