export function initSlider(el: HTMLElement, options?) {
    const data = el.dataset.slider || '{}';
    let params = JSON.parse(data);
    params = Object.assign(params, options || {})

    return { rootElement: el, params, ...processComponent(el, params) };
}

function getMarkup({label, name, min, max, step, value}) {
    return `
      <label class="sliders flex flex-row items-center">
        <span class="text-label">${label}</span>
        <input data-range type="range" name="${name}" min="${min}" max="${max}" step="${step}" value="${value}">
        <input data-value type="text" onfocus="this.select();" value="${value}">
      </label>    
    `
}

function processComponent(el, options) {
    el.innerHTML = getMarkup(options);

    const valueInput = el.querySelector(`input[data-value]`) as HTMLInputElement;
    const sliderElement = el.querySelector(`input[data-range]`) as HTMLInputElement;

    if(options.syncValue === true) {
        syncValues({sliderElement, valueInput});
    }

    return {el, sliderElement, valueInput}
}

function syncValues({sliderElement, valueInput}) {
    sliderElement.addEventListener("input", (event) => {
        valueInput.value = sliderElement.value;
    });

    valueInput.addEventListener("input", (event) => {
        sliderElement.value = valueInput.value;
    });
}