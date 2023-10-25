import { findFigmaVariableByName } from "./figma-variables";

const aliasRegex = /\{(.+?)(.+?)\}/g;

export function findTokenReferences(tokenValue: string) {
    return tokenValue?.toString().match(aliasRegex)
};
function getReferenceName(reference: string) {
    let name = reference.replace(/{/g, "");
    name = name.replace(/}/g, "");
    return name;
}

export function findVariableByReferences(value: string): Variable {
    let references = findTokenReferences(value);
    let results = [];
    
    references?.forEach(reference => {
        let name = getReferenceName(reference);
        name = name.replace(/\./g, "/");

        const figmaVariable = findFigmaVariableByName(name);

        if (figmaVariable) {
            results.push(figmaVariable);
        }
        else {
            console.warn(`findVariableByReferences() call failed -> cannot find value for ${reference}`);
        }
    })

    return results[0];
}

function findGlobalTokenByName(name, dictionary) {
    name = name.replace(/\./g, "/")
    const token = dictionary[name];
    if(!token) debugger;
    return token;
}

export function parseReferenceGlobal(value, dictionary) {
    let references = findTokenReferences(value);
    let result = value;
    
    references?.forEach(reference => {
        let name = getReferenceName(reference);

        const globalToken = findGlobalTokenByName(name, dictionary);

        if (globalToken) {
            result = result.replace(reference, globalToken.$value);
        }
        else {
            debugger;
            console.warn(`parseReferenceGlobal() call failed -> cannot find reference for ${value}`);
        }
    });

    const check = findTokenReferences(result);
    
    if (check != null) {
        return parseReferenceGlobal(result, dictionary);
    }
    else {
        return result;
    }

}