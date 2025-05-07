const cardCarousel = document.getElementById('cardCarouse');


let startX, moveOffsetX = 0, startTranslateX, offsetTranslateX;

const cardWidth = cardCarousel.offsetWidth;
const parentWidth = cardCarousel.parentElement.offsetWidth;
const maxOffset = cardWidth/4;

function _mouseMove(e) {
    moveOffsetX = e.clientX - startX;
    offsetTranslateX = startTranslateX + moveOffsetX;

    console.log('move', {
        moveOffsetX,
        offsetTranslateX,
        maxOffset
    })

    if(Math.abs(offsetTranslateX) < maxOffset) {
        cardCarousel.style.setProperty('--move-offset', `${offsetTranslateX}px`)
    }


}

function _mouseUp(e) {
    console.log(moveOffsetX)

    cardCarousel.classList.remove('dragging');
    cardCarousel.removeEventListener('mousemove', _mouseMove);
    cardCarousel.removeEventListener('mouseup', _mouseUp);
    cardCarousel.removeEventListener('mouseleave', _mouseUp);
}

cardCarousel.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    moveOffsetX = 0;
    startTranslateX = parseInt(cardCarousel.style.getPropertyValue('--move-offset') || '0');

    console.log('start', {
        startX,
        moveOffsetX,
        startTranslateX
    })

    cardCarousel.addEventListener('mousemove', _mouseMove);
    cardCarousel.addEventListener('mouseleave', _mouseUp);
    cardCarousel.addEventListener('mouseup', _mouseUp);
    cardCarousel.classList.add('dragging');
})

cardCarousel.addEventListener("wheel", (event) => {
    let delta = event.deltaX || event.deltaY;
    const startTranslateX = parseInt(cardCarousel.style.getPropertyValue('--move-offset') || '0');
    offsetTranslateX = startTranslateX - delta;

    if(Math.abs(offsetTranslateX) < maxOffset) {
        cardCarousel.style.setProperty('--move-offset', `${offsetTranslateX}px`)
    }

    event.preventDefault();
    event.stopPropagation();
})


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
