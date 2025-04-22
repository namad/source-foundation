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