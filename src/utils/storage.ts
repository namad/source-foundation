export const store: Map<string, LibraryVariable[]> = new Map();

export async function getStoreData() {
    const keys = await figma.clientStorage.keysAsync();
    const data = {};

    await Promise.all(keys.map(async (key) => {
        const result = await figma.clientStorage.getAsync(key);
        data[key] = result;
    }));

    return data;
}



export async function set(name, data) {
    const result = await figma.clientStorage.setAsync(name, data);
    return result;
}

export async function get(name) {
    return await figma.clientStorage.getAsync(name);
}

export async function remove(name) {
    return await figma.clientStorage.deleteAsync(name);
}

export async function clearStore() {
    const keys = await figma.clientStorage.keysAsync();

    await Promise.all(keys.map(async (key) => {
        await figma.clientStorage.deleteAsync(key);
    }));
}