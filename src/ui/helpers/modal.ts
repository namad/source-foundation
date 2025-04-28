export var activeModal: HTMLDialogElement;

document.querySelectorAll('[data-modal').forEach((el: HTMLAnchorElement) => {
    const modalID = el.dataset.modal;
    const modal = document.getElementById(modalID) as HTMLDialogElement;
    const cloneOnUpdate = 'closeOnUpdate' in modal.dataset;

    el.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();

        activeModal = cloneOnUpdate ? modal : null;
    });

    modal.querySelectorAll('.close-modal').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            modal.close();

            activeModal = null;
        })
    })
});