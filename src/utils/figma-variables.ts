function findVariableInCollection(variableName: string, collectionName: string): Variable {
    const figmaCollections = figma.variables.getLocalVariableCollections();
    const collection = figmaCollections.find(collection => collection.name === collectionName);

    let figmaVirable: Variable;

    if (collection) {
        collection.variableIds.forEach(id => {
            const figmaVariableInColleciton = figma.variables.getVariableById(id)
            const match = figmaVariableInColleciton.name === variableName;

            if (match) {
                figmaVirable = figmaVariableInColleciton;
                return true;
            }
            return  false;
        });
    }

    return figmaVirable;
}
export function findFigmaVariableByName(variableName: string, collectionName?: string): Variable {
    if (collectionName) {
        return findVariableInCollection(variableName, collectionName);
    }
    else {
        const figmaVariables = figma.variables.getLocalVariables();
        return figmaVariables.find(variable => variable.name === variableName);
    }
}

export function getFigmaCollection(name) {
    const figmaCollections = figma.variables.getLocalVariableCollections();

    let isNew = false;
    let collection = figmaCollections.find(collection => collection.name === name);

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

export function setFigmaVariable(
        collection: VariableCollection,
        modeId: string,
        type: VariableResolvedDataType,
        variableName: string,
        value = null,
        scopes: VariableScope[] = ['ALL_SCOPES'],
        description: string = null
    ): Variable {

    let figmaVariable = findFigmaVariableByName(variableName, collection.name);

    if (!figmaVariable) {
        try {
            figmaVariable = figma.variables.createVariable(variableName, collection.id, type);
        }
        catch (e) {
            debugger;
        }
    }

    if (type != figmaVariable.resolvedType) {
        debugger;
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