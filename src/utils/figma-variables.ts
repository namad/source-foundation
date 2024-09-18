async function findVariableInCollection(variableName: string, collectionName: string): Promise<Variable> {
    const figmaCollections = await figma.variables.getLocalVariableCollectionsAsync();
    const collection = figmaCollections.find(collection => collection.name === collectionName);

    let figmaVirable: Variable;

    if (collection) {
        for(const id of collection.variableIds) {
            const figmaVariableInColleciton = await figma.variables.getVariableByIdAsync(id)
            const match = figmaVariableInColleciton?.name === variableName ;
            if (match) {
                figmaVirable = figmaVariableInColleciton;
                break;
            }
        };
    }

    return figmaVirable;
}
export async function findFigmaVariableByName(variableName: string, collectionName?: string): Promise<Variable> {
    if (collectionName) {
        return await findVariableInCollection(variableName, collectionName);
    }
    else {
        const figmaVariables = await figma.variables.getLocalVariablesAsync();
        return figmaVariables.find(variable => variable.name === variableName);
    }
}

export async function findFigmaVariableCollectionByName(name:string): Promise<VariableCollection|null> {
    const figmaCollections = await figma.variables.getLocalVariableCollectionsAsync();
    const collection = figmaCollections.find(collection => collection.name === name);

    return collection || null;
}

export async function getFigmaCollection(name) {
    let isNew = false;
    let collection = await findFigmaVariableCollectionByName(name);

    if (!collection) {
        isNew = true;
        collection = figma.variables.createVariableCollection(name);
    }

    return {collection, isNew};
}

export function resolveVariableType(typeName): VariableResolvedDataType {
    switch (typeName) {
        case 'color': return 'COLOR';
        case 'boolean': return 'BOOLEAN';
        case 'number': return 'FLOAT';
        default: return 'STRING';
    }
}

export async function setFigmaVariable(
        collection: VariableCollection,
        modeId: string,
        type: VariableResolvedDataType,
        variableName: string,
        value = null,
        scopes: VariableScope[] = ['ALL_SCOPES'],
        description: string = null
    ): Promise<Variable> {

    let figmaVariable = await findFigmaVariableByName(variableName, collection.name);

    if (!figmaVariable) {
        try {
            figmaVariable = figma.variables.createVariable(variableName, collection, type);
        }
        catch (e) {
            debugger;
        }
    }

    if (value) {
        figmaVariable.setValueForMode(modeId, value);
    }

    figmaVariable.scopes = scopes;

    if (description != null) {
        figmaVariable.description = description;
    }

    return figmaVariable;
}

export async function getAliasName(id): Promise<string> {
    const variable = await figma.variables.getVariableByIdAsync(id);
    return `{${variable.name.replace(/\//g, ".")}}`;
}

export function variableNameToObject(name, target): any {
    let obj = target;
    name.split("/").forEach((groupName) => {
        obj[groupName] = obj[groupName] || {};
        obj = obj[groupName];
    });

    return obj;
}

export async function getDefaultVariableValue(figmaVariable: Variable) {
    const collectionID = figmaVariable.variableCollectionId;
    const collection = await figma.variables.getVariableCollectionByIdAsync(collectionID);
    const defaultMode = collection.modes[0].modeId;
    const defaultValue: VariableValue = figmaVariable.valuesByMode[defaultMode];

    if(defaultValue['type'] == "VARIABLE_ALIAS") {
        const variable = await figma.variables.getVariableByIdAsync(defaultValue['id']);
        return await getDefaultVariableValue(variable);
    }
    else {
        return defaultValue;
    }
}