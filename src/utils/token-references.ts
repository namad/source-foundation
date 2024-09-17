import { findFigmaVariableByName } from "./figma-variables";

const aliasRegex = /\{(.+?)(.+?)\}/g;

export function findTokenReferences(tokenValue: string) {
    return tokenValue?.toString().match(aliasRegex)
};
export function getReferenceName(reference: string) {
    let name = reference.replace(/{/g, "");
    name = name.replace(/}/g, "");
    return name;
}

export async function findVariableByReferences(value: string): Promise<Variable> {
    let references = findTokenReferences(value);
    let results = [];
    

    for(const reference of references || []) {
        let name = getReferenceName(reference);
        name = name.replace(/\./g, "/");

        const figmaVariable = await findFigmaVariableByName(name);

        if (figmaVariable) {
            results.push(figmaVariable);
        }
        else {
            console.warn(`findVariableByReferences() call failed -> cannot find value for ${reference}`);
        }
    }

    return results[0];
}

function findGlobalTokenByName(name, dictionary) {
    name = name.replace(/\./g, "/")
    const token = dictionary[name];

    if(!token) {
        const msg = `Cannot find token ${name}`;
        figma.notify(msg, {error: true});
        throw new Error(msg);
    };

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