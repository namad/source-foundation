import { getFormData } from "../../import-ui";
import { mainForm } from "../ref/main-form";

document.querySelectorAll('[data-command]').forEach((el: HTMLAnchorElement) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        
        const params = getFormData(mainForm);
        const command = el.dataset.command;

        parent.postMessage({
            pluginMessage: {
                type: command,
                params: params
            }
        }, "*");

    });
});