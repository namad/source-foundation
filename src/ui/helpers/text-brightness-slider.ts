import nouislider, { API } from 'nouislider';
import { debounce } from '../../utils/debounce';

export function initiateTextBrightnessSlider(mainForm) {
    const brightnessSlider = document.querySelector('#textBrightnessSlider .slider') as HTMLDivElement;
    const brightnesSliderVals = [
        document.getElementById('textBlackBrightnessVal') as HTMLInputElement,
        document.getElementById('textWhiteBrightnessVal') as HTMLInputElement
    ]

    nouislider.create(brightnessSlider, {
        start: [6, 100],
        connect: [false, true, false],
        step: 1,
        tooltips: true,
        range: {
            'min': 4,
            'max': 100
        }
    }).on('update', (values, handle) => {
        console.log(`${values} + ${handle}`);
        brightnesSliderVals[handle].value = values[handle] as string;
        mainForm.dispatchEvent(new Event('input', { 'bubbles': true }));
    })

    brightnesSliderVals.forEach((element, index) => {
        element.addEventListener("input", () => {
            const val = brightnesSliderVals.map(el => el.value);
            brightnessSlider['noUiSlider'].set(val);
        });
    });
}
