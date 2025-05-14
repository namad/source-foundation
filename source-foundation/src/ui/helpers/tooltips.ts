import { computePosition, flip, shift, offset, Placement } from "@floating-ui/dom";
import { mainForm } from "../ref/main-form";


// let target;
// let popover;
// let position;
// let positionOffset;

// mainForm.addEventListener('mouseenter', (event) => {
//     const element = event.target as HTMLElement;


//     if(element.matches('[data-tooltip][popovertarget]')) {
//         console.log(element);

//         target = element.getAttribute("popovertarget");
//         popover = document.getElementById(target) as HTMLElement;
//         position = element.dataset.tooltip || 'top';
//         positionOffset = parseInt(element.dataset.offset) || 12;

//         popover.showPopover();

//         computePosition(element, popover, {
//             placement: position as Placement,
//             middleware: [
//                 offset(positionOffset),
//                 flip(),
//                 shift({ padding: positionOffset }) 
//             ]
//         }).then(({ x, y }) => {
//             Object.assign(popover.style, {
//                 left: `${x}px`,
//                 top: `${y}px`
//             });
//         });        
//     }
// }, true)

// mainForm.addEventListener('mouseenter', (event) => {
//     const element = event.target as HTMLElement;
//     if(element.matches('[data-tooltip][popovertarget]')) {
//         popover.hidePopover();
//     }
// }, true)

document.querySelectorAll("[data-tooltip][popovertarget]").forEach((element: HTMLElement) => {
    const target = element.getAttribute("popovertarget");
    const popover = document.getElementById(target) as HTMLElement;
    const position = element.dataset.tooltip || 'top';
    const positionOffset = parseInt(element.dataset.offset) || 12;

    // document.body.appendChild(popover);

    element.addEventListener("mouseenter", () => {
        popover.showPopover();
        computePosition(element, popover, {
            placement: position as Placement,
            middleware: [
                offset(positionOffset),
                flip(),
                shift({ padding: positionOffset }) 
            ]
        }).then(({ x, y }) => {
            Object.assign(popover.style, {
                left: `${x}px`,
                top: `${y}px`
            });
        });

    });

    element.addEventListener("mouseleave", () => {
        popover.hidePopover();
    });
});