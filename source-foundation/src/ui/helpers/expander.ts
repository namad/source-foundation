document.querySelectorAll('[data-expander][data-role="trigger"]').forEach((el: HTMLAnchorElement) => {
    const next = el.nextElementSibling as HTMLDivElement;
    if (next.dataset.role == 'container') {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            next.classList.toggle('collapsed');
            el.setAttribute('data-expanded', `${!next.classList.contains('collapsed')}`);
        })
    }
    else {
        console.warn('Cannot find container to expand')
    }
});


document.querySelectorAll('[data-check-expander]').forEach((el: HTMLInputElement) => {
    el.addEventListener('input', (e) => {
        const name = el.name;
        const isChecked = el.checked;
        const containerId = el.dataset.checkExpander;
        const container =  document.getElementById(containerId);
        const toggleFn = isChecked ? 'remove' : 'add';
        container.classList[toggleFn]('collapsed');
    });

    el.dispatchEvent(new Event('input', { 'bubbles': false }));
})