export function findFigmaVariableByName(name): Variable {
    const figmaVariables = figma.variables.getLocalVariables();
    const matches = figmaVariables.filter(vairable => vairable.name === name);
    return figmaVariables.find(vairable => vairable.name === name);
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

export function setFigmaVariable(
        collection: VariableCollection,
        modeId: string,
        type: VariableResolvedDataType,
        name: string,
        value,
        scopes = [],
        description: string = null
    ): Variable {

    let figmaVariable: Variable;

    let figmaVariableId = collection.variableIds.find(id => {
        let figmaVariable = figma.variables.getVariableById(id)
        return figmaVariable.name === name;
    });

    if (figmaVariableId) {
        figmaVariable = figma.variables.getVariableById(figmaVariableId);
    }
    else {
        figmaVariable = figma.variables.createVariable(name, collection.id, type);
    }

    console.log(`{type: ${type}}`);
    console.log(`{var type: ${figmaVariable.resolvedType}}`);

    if(type != figmaVariable.resolvedType) {
        debugger;
    }

    figmaVariable.setValueForMode(modeId, value);

    if(scopes.length) {
        figmaVariable.scopes = scopes
    }

    if(description != null) {
        figmaVariable.description = description;
    }

    return figmaVariable;
}