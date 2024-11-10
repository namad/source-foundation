import { clipboardPaste } from "../../utils/clipboard";

document.querySelectorAll('button[data-action=clipboardPaste]').forEach((el: HTMLButtonElement) => {
    el.addEventListener('click', (e) => {
        const targetSelector = el.dataset.target;
        const target = document.querySelector(targetSelector) as HTMLFormElement;
        clipboardPaste(target);
    });
});