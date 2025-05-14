import { getFormData } from "../../import-ui";
import { mainForm } from "../ref/main-form";

mainForm.querySelectorAll('[data-command]').forEach((el:HTMLElement) => {
    el.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();

            const params = getFormData(mainForm);
            const command = el.dataset.command;
            const modalID = el.dataset.modal;

            console.log('Command', command);
            
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