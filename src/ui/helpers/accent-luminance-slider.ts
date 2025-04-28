import nouislider, { API } from 'nouislider';
import { debounce } from '../../utils/debounce';
import { mainForm } from '../ref/main-form';

const luminanceSlider = document.querySelector('#luminanceSlider') as HTMLDivElement;
const luminanceSliderVals = [
    document.getElementById('luminanceValMin') as HTMLInputElement,
    document.getElementById('luminanceValMid') as HTMLInputElement,
    document.getElementById('luminanceValMax') as HTMLInputElement
]

nouislider.create(luminanceSlider, {
    start: [10, 18, 45],
    connect: [false, true, true, false],
    step: 1,
    tooltips: true,
    direction: 'rtl',
    range: {
        'min': 0,
        'max': 100
    }
}).on('update', debounce((values, handle) => {
    luminanceSliderVals[handle].value = values[handle] as string;
    mainForm.dispatchEvent(new Event('input', { 'bubbles': true }));
}, 1))

luminanceSlider['noUiSlider'].on('start', (values, handle) => {
    console.log(handle)
    const colorPreviewDiv = document.getElementById(`colorPreview${handle}`);
    colorPreviewDiv.dispatchEvent(new Event('mouseenter', { 'bubbles': true }));
})

luminanceSlider['noUiSlider'].on('end', (values, handle) => {
    const colorPreviewDiv = document.getElementById(`colorPreview${handle}`);
    colorPreviewDiv.dispatchEvent(new Event('mouseleave', { 'bubbles': true }));
})

luminanceSliderVals.forEach((element, index) => {
    element.addEventListener("input", () => {
        const val = luminanceSliderVals.map(el => el.value);
        luminanceSlider['noUiSlider'].set(val);
    });
});
