import { LOCAL_LIB_NAME } from "@foundation/utils/figma-library-variables";

interface StoredData {
    [key: string]: LibraryVariable[]
}

LOCAL_LIB_NAME

export function getTokenLibrariesListMarkup(storedData: StoredData): string {
    const markup = [];
    const entries = Object.entries(storedData);

    if(entries.length == 1) {
        return `
            <input type="hidden" name="tokenLibraryName" value="${entries[0][0]}" />
            <span class="flex flex-row gap-sm">
                <span class="color-text-base-500 flex-1">Source library:</span>
                <span class="icon icon-book-open gap-xs2">${entries[0][0]}</span>
            </span>
        `
    }

    entries.forEach(([fileKey, value], index) => {
        markup.push(`
            <label class="flex flex-row gap-2">
                <input type="radio" name="tokenLibraryName" value="${fileKey}" ${index == 0 ? "checked" : ""} />
                <span>${fileKey}</span>
            </label>
        `);
    })

    return `
        <span class="color-text-base-500 flex-1">Select source library:</span>
        <div class="flex flex-col gap-minor-xs w-full">
            ${markup.join('')}
        </div>
    `
}