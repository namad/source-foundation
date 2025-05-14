export var activeModal: HTMLDialogElement;

document.querySelectorAll('[data-modal').forEach((el: HTMLAnchorElement) => {
    const modalID = el.dataset.modal;
    const modal = document.getElementById(modalID) as HTMLDialogElement;
    const modalContainer = modal.querySelector('.modal-container');

    const cloneOnUpdate = 'closeOnUpdate' in modal.dataset;

    modal.addEventListener('click', (e) => {
        modal.close();
    })
    
    modalContainer.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
    })

    el.addEventListener('click', (e) => {
        console.log('Opening modal', modalID);
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