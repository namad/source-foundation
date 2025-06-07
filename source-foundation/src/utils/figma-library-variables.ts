const store: Map<string, LibraryVariable[]> = new Map();
let selectedLibraryName: string;

export const LOCAL_LIB_NAME = "Local variables";

export async function getStoreData(refresh = false) {
    if(refresh === true) {
        store.clear();
    }
    
    store.set(LOCAL_LIB_NAME, [])

    if (store.size > 1) { // which means we already got other libraries read
        return store;
    }

    // read 
    const libraryCollections: LibraryVariableCollection[] = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync().catch(e => {
        throw e;
    });

    await Promise.all(libraryCollections.map(async (collection) => {
        return await figma.teamLibrary.getVariablesInLibraryCollectionAsync(collection.key).then((data: LibraryVariable[]) => {
            let variables: LibraryVariable[] = store.get(collection.libraryName) || [];
            variables = variables.concat(data);
            store.set(collection.libraryName, variables);
        });
    }));

    return store;
}

async function collectLocalVariables() {
    const variables = await figma.variables.getLocalVariablesAsync().catch(err => {
        throw (err);
    });

    if(variables.length == 0) {
        return null;
    }

    return {
        name: LOCAL_LIB_NAME,
        libraryVariables: []
    }


    // const libraryVariables: LibraryVariable[] = variables.map(variable => {
    //     const {
    //         key, resolvedType, name
    //     } = variable;

    //     return { name, key, resolvedType };
    // })

    // if(libraryVariables.length) {
    //     return {name: LOCAL_LIB_NAME, libraryVariables}
    // }
    // else {
    //     return null;
    // }
}

let importedVariablesLibrary: Variable[] = [];

async function importLibraryVariables(libraryName: string) {
    const data = store.get(libraryName) || [];
    

    if(importedVariablesLibrary.length == 0) {
        await Promise.all(data.map(async (record) => {
            return await figma.variables.importVariableByKeyAsync(record.key).then(variable => {
                importedVariablesLibrary.push(variable)
            });
        }));
    }

    return importedVariablesLibrary;
}

interface StoredData {
    [key: string]: LibraryVariable[]
}

export function serialize(): StoredData {
    let result = {};

    store.forEach((value, key) => {
        result[key] = value;
    })

    return result;
}

export function getSelectedLibrary() {
    return selectedLibraryName || LOCAL_LIB_NAME;
}

export function setSelectedLibrary(name: string) {
    selectedLibraryName = name;
    return selectedLibraryName;
}

async function getLibVars(libraryName?: string): Promise<Variable[]> {
    libraryName = libraryName || getSelectedLibrary();
    if(libraryName == LOCAL_LIB_NAME) {
        return await figma.variables.getLocalVariablesAsync();
    }
    else {
        const store = await getStoreData();
        return await importLibraryVariables(libraryName);    
    }
}

export async function findVariableByName(variableName:string) {
    const variables = await getLibVars()

    return variables.find(variable => {
        return variable.name == variableName
    });
}

async function set(name: string, data: LibraryVariable[]) {
    store.set(name, data)
    return store;
}

function get(name) {
    return store.get(name)
}

async function remove(name) {
    store.delete(name)
    return store;
}

function clearStore() {
    store.clear();
    return store;
}