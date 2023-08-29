import { findFigmaVariableByName } from "./figma-variables";

const aliasRegex = /\{(.+?)(.+?)\}/g;

export function findTokenReferences(tokenValue: string) {
    return tokenValue?.toString().match(aliasRegex)
};

export function parseVariableReferences(value: string): Variable {
    let references = findTokenReferences(value);
    let results = [];
    
    references?.forEach(refrence => {
        let name = refrence.replace(/{/g, "");
        name = name.replace(/}/g, "");
        name = name.replace(/\./g, "/")

        const figmaVariable = findFigmaVariableByName(name);

        if (figmaVariable) {
            results.push(figmaVariable);
        }
        else {
            console.warn(`parseReferences() call failed -> cannot find value for ${refrence}`);
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
        let name = reference.replace(/{/g, "");
        name = name.replace(/}/g, "");


        const globalToken = findGlobalTokenByName(name, dictionary);

        if (globalToken) {
            result = result.replace(reference, globalToken.$value);
        }
        else {
            debugger;
            console.warn(`parseReferences() call failed -> cannot find reference for ${value}`);
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