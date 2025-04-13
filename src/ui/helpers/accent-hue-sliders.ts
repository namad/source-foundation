import { getFormData } from "../../import-ui";
import { toTitleCase } from "../../utils/text-to-title-case";
import { initSlider } from "../slider";

export function initiateAccentHUESliders(mainForm: HTMLFormElement, defaultAccentHUEs, sliders) {
    const accentSlidersContainer = document.getElementById('accentColorsSliders') as HTMLDivElement;
    
    Object.entries(defaultAccentHUEs).forEach(([name, hue]) => {
        const options = { "label": toTitleCase(name), "name": name, "min": 0, "max": 360, "step": 1, "value": hue, syncValue: true }
        const el = document.createElement('div');
        const sliderCompoent = initSlider(el, options);

        accentSlidersContainer.appendChild(el);


        sliders[name] = sliderCompoent;

        const brandCard = document.getElementById('brandCard');
        const brandAccent = document.getElementById('brandAccent');
        const label = brandCard.querySelector('.text-label');
        const displayValueBox = brandCard.querySelector('input[data-display-element]') as HTMLInputElement;
        let initialValue;

        sliderCompoent.slider.on('start', () => {
            const data = getFormData(mainForm);
            brandCard.classList.add('disabled');
            label.innerHTML = `${toTitleCase(name)}`;
            displayValueBox.value = `${data[name]}`;
            initialValue = data.primary;
            brandCard.style.setProperty('--bg-color', `var(--accent-${name}-400)`);
            brandAccent.style.setProperty('--thumb-color', `var(--accent-${name}-400)`);
            brandCard.style.setProperty('--bg-image', `none`);

            console.log(initialValue);
        });
        sliderCompoent.slider.on('slide', (values, handle) => {
            label.innerHTML = `${toTitleCase(name)}`;
            displayValueBox.value = `${parseInt(values[0] as string)}`;
            brandCard.style.setProperty('--bg-color', `var(--accent-${name}-400)`);
            brandAccent.style.setProperty('--thumb-color', `var(--accent-${name}-400)`);
        });
        sliderCompoent.slider.on('end', () => {
            brandCard.classList.remove('disabled');
            label.innerHTML = `Primary`;
            displayValueBox.value = `${toTitleCase(initialValue)}`;
            brandCard.style.setProperty('--bg-color', '');
            brandAccent.style.setProperty('--thumb-color', '');
            brandCard.style.setProperty('--bg-image', '');
        });
    });
}