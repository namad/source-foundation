document.querySelectorAll('[data-checkbox-toggle]').forEach((el: HTMLFormElement) => {
    el.addEventListener('input', (e) => {
        const name = el.name;
        document.querySelectorAll(`input[type=radio][name=${name}]`).forEach((radiobutton: HTMLFormElement) => {
            const containerId = radiobutton.dataset.radioToggle;
            const isChecked = radiobutton.checked;
            const container = document.getElementById(containerId) as HTMLDivElement;
            container.style.display = isChecked ? '' : 'none';
        });
    });
});