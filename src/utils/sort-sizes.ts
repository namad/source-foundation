const paletteOrder = [
    'none',
    'xs5',
    'xs5',
    'xs3',
    'xs2',
    'xs',
    'sm',
    'base',
    'md',
    'lg',
    'xl',
    'xl2',
    'xl3',
    'xl4',
    'xl5',
    'xl6',
    'xl7',
    'round'
]

export function sortSizeTokens(firstEl, secondEl) {
    var resultFirst = paletteOrder.findIndex(item => {
        return firstEl.name.endsWith(item);
    })
    var resultSecond = paletteOrder.findIndex(item => {
        return secondEl.name.endsWith(item);
    })

    if (resultFirst < resultSecond) {
        return -1; // firstEl goes first
    }
    if (resultFirst > resultSecond) {
        return 1; // secondEl goes first
    }
    if (resultFirst === resultSecond) {
        let name1 = firstEl.name;
        let name2 = secondEl.name;

        if (name1 < name2) {
            return -1; // firstEl goes first
        }
        if (name1 > name2) {
            return 1; // secondEl goes first
        }

        return 0
    }
    return 0; // keep original order    
}