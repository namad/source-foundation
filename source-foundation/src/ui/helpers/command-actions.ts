import { getFormData } from "../../import-ui";
import { mainForm } from "../ref/main-form";

document.querySelectorAll('[data-command]').forEach((el:HTMLElement) => {
    el.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();

            const params = getFormData(mainForm);
            const command = el.dataset.command;
            const modalID = el.dataset.modal;
            const modal = modalID ? document.getElementById(modalID) as HTMLDialogElement : null;

            console.log('Command', command);
            
            // if(modal && modal.open) {
            //     modal.close()
            // } 
            // else if(modal && !modal.open) {
            //     modal.showModal()
            // }

            parent.postMessage({
                pluginMessage: {
                    type: command,
                    params: params
                }
            }, "*");
            
            return false;
        // }
    })
})