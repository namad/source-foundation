import { getFormData } from "../../import-ui";
import { mainForm } from "../ref/main-form";

mainForm.querySelectorAll('[data-command]').forEach((el:HTMLElement) => {
    el.addEventListener('click', (event) => {
        // const eventTarget = event.target as HTMLElement;
        // if(eventTarget.matches('[data-command]')) {
            event.preventDefault();
            event.stopImmediatePropagation();

            const params = getFormData(mainForm);
            const command = el.dataset.command;

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