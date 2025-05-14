export function roundTwoDigits(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function roundOneDigit(num) {
    return Math.round((num + Number.EPSILON) * 10) / 10;
}