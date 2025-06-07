import { defaultAccentHUEs } from "../../defaults";
import { getFormData } from "../../import-ui";
import { toTitleCase } from "../../utils/text-to-title-case";
import { initSlider } from "../slider";
import { sliders } from "../ref/sliders-collection";
import { mainForm } from "../ref/main-form";

const accentSlidersContainer = document.getElementById('accentColorsSliders') as HTMLDivElement;

/*

    <div class="tooltip" id="brandColorToolTip" popover>
        <div class="text-center"></div>
    </div>
*/
Object.entries(defaultAccentHUEs).forEach(([name, hue]) => {
    const options = { "label": toTitleCase(name), "name": name, "min": 0, "max": 360, "step": 1, "value": hue, syncValue: true }
    const wrapper = document.createElement('div');
    const tooltip = document.createElement('div');
    const el = document.createElement('div');
    const sliderCompoent = initSlider(el, options);

    el.dataset.tooltip = "top";
    el.dataset.offset = "12";
    el.setAttribute('popovertarget', `${name}ColorToolTip`)

    tooltip.setAttribute('id', `${name}ColorToolTip`)
    tooltip.setAttribute('popover', `true`)
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `<span><b>${toTitleCase(name)}</b> is your primary / brand colour</span>`

    sliderCompoent.rootElement.querySelector('.sliders').appendChild(tooltip);

    wrapper.appendChild(el);

    accentSlidersContainer.appendChild(wrapper);

    const brandCard = document.getElementById('brandCard');
    const brandAccent = document.getElementById('brandAccent');
    const label = brandCard.querySelector('.text-label');
    const displayValueBox = brandCard.querySelector('input[data-display-element]') as HTMLInputElement;
    let initialValue;

    // sliderCompoent.slider.on('start', () => {
    //     const data = getFormData(mainForm);
    //     brandCard.classList.add('disabled');
    //     label.innerHTML = `${toTitleCase(name)}`;
    //     displayValueBox.value = `${data[name]}`;
    //     initialValue = data.primary;
    //     brandCard.style.setProperty('--bg-color', `var(--accent-${name}-400)`);
    //     brandAccent.style.setProperty('--slider-thumb-color', `var(--accent-${name}-400)`);
    //     brandCard.style.setProperty('--bg-image', `none`);

    //     console.log(initialValue);
    // });
    // sliderCompoent.slider.on('slide', (values, handle) => {
    //     label.innerHTML = `${toTitleCase(name)}`;
    //     displayValueBox.value = `${parseInt(values[0] as string)}`;
    //     brandCard.style.setProperty('--bg-color', `var(--accent-${name}-400)`);
    //     brandAccent.style.setProperty('--slider-thumb-color', `var(--accent-${name}-400)`);
    // });
    // sliderCompoent.slider.on('end', () => {
    //     brandCard.classList.remove('disabled');
    //     label.innerHTML = `Primary`;
    //     displayValueBox.value = `${toTitleCase(initialValue)}`;
    //     brandCard.style.setProperty('--bg-color', '');
    //     brandAccent.style.setProperty('--slider-thumb-color', '');
    //     brandCard.style.setProperty('--bg-image', '');
    // });
});