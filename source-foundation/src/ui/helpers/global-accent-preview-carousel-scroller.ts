import { systemAccentList } from "@foundation/defaults";
import { debounce } from "@foundation/utils/debounce";

const carouselGrid = document.getElementById('globalAccentsPreview');
const dragTarget = carouselGrid.parentElement;

const globalAccentRampPreviewTemplate = document.querySelector("#globalAccentRampPreviewTemplate") as HTMLTemplateElement;
const globalAccentContrastPreviewTemplate = document.querySelector("#globalAccentContrastPreviewTemplate") as HTMLTemplateElement;

const contrastPresetItem = document.importNode(globalAccentContrastPreviewTemplate.content, true);

systemAccentList.forEach(colorName => {   
    const rampPresetItem = document.importNode(globalAccentRampPreviewTemplate.content, true);
    const colorCellDiv = rampPresetItem.querySelectorAll('.color-cell') as NodeListOf<HTMLDivElement>;
    const colorNameSpan = rampPresetItem.querySelectorAll('.color-name') as NodeListOf<HTMLSpanElement>;

    colorCellDiv.forEach(div => {
        const shadeNumber = div.dataset.shade;
        div.style.backgroundColor = `var(--global-accent-${colorName}-${shadeNumber})`;
    })
    colorNameSpan.forEach(span => {
        span.textContent = colorName
    })

   carouselGrid.appendChild(rampPresetItem);
});

carouselGrid.appendChild(contrastPresetItem);


let startX, moveOffsetX = 0, startTranslateX, offsetTranslateX;

let carouselWidth = carouselGrid.offsetWidth;
let parentWidth = dragTarget.parentElement.offsetWidth;
let maxOffset = (carouselWidth - parentWidth) / 2;

carouselGrid.style.setProperty('--move-offset', `${-maxOffset}px`)

function _mouseMove(e) {
    moveOffsetX = e.clientX - startX;
    offsetTranslateX = startTranslateX + moveOffsetX;

    console.log('move', {
        moveOffsetX,
        offsetTranslateX,
        maxOffset
    })

    carouselGrid.style.setProperty('--move-offset', `${offsetTranslateX}px`)

}

function _mouseUp(e) {
    console.log(moveOffsetX)

    const deltaK = offsetTranslateX < 0 ? -1 : 1;

    dragTarget.classList.remove('dragging');

    if(Math.abs(offsetTranslateX) > maxOffset) {
        carouselGrid.style.setProperty('--move-offset', `${maxOffset * deltaK}px`)
    }

    dragTarget.removeEventListener('mousemove', _mouseMove);
    dragTarget.removeEventListener('mouseup', _mouseUp);
    dragTarget.removeEventListener('mouseleave', _mouseUp);
}

dragTarget.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    moveOffsetX = 0;
    startTranslateX = parseInt(carouselGrid.style.getPropertyValue('--move-offset') || '0');

    carouselWidth = carouselGrid.offsetWidth;
    parentWidth = carouselGrid.parentElement.offsetWidth;
    maxOffset = (carouselWidth - parentWidth) / 2;

    console.log('start', {
        startX,
        moveOffsetX,
        startTranslateX
    })

    dragTarget.addEventListener('mousemove', _mouseMove);
    dragTarget.addEventListener('mouseleave', _mouseUp);
    dragTarget.addEventListener('mouseup', _mouseUp);
    dragTarget.classList.add('dragging');
})

dragTarget.addEventListener("wheel", (event) => {

    let delta = event.deltaX || event.deltaY;
    const startTranslateX = parseInt(carouselGrid.style.getPropertyValue('--move-offset') || '0');
    offsetTranslateX = startTranslateX - delta * 1.1;

    carouselGrid.style.setProperty('--move-offset', `${offsetTranslateX}px`)

    trackWheelConstraints(event)


    event.preventDefault();
    event.stopPropagation();
})

const trackWheelConstraints = debounce((event) => {
    const deltaK = offsetTranslateX < 0 ? -1 : 1;
    if(Math.abs(offsetTranslateX) > maxOffset) {
        carouselGrid.style.setProperty('--move-offset', `${maxOffset * deltaK}px`)
    }
}, 100)

// cardCarousel.addEventListener('dragstart', (e) => {
//     startX = e.clientX;
//     moveOffsetX = 0;
//     startTranslateX = parseInt(cardCarousel.style.getPropertyValue('--move-offset') || '0');

//     console.log('start', {
//         startX,
//         moveOffsetX,
//         startTranslateX
//     })
//     cardCarousel.classList.add('dragging');
// })
