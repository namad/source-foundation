export function delayAsync(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}