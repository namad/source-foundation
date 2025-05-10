const el = document.querySelector(".card-sticky");
const sentinal = document.querySelector('.sentinal');

const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .sentinal node.
    // Here observe whether or not that node is in the viewport
    if (!entries[0].isIntersecting) {
        el.classList.add('is-pinned')
    } else {
        el.classList.remove('is-pinned')
    }
});

observer.observe(sentinal);