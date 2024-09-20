import { DesignTokensRaw } from "../main";
import { findFigmaVariableByName } from "./figma-variables";

const aliasRegex = /\{(.+?)(.+?)\}/g;

export function findTokenReferences(tokenAlias: string) {
    return tokenAlias?.toString().match(aliasRegex)
};
export function getReferenceName(reference: string) {
    let name = reference.replace(/{/g, "");
    name = name.replace(/}/g, "");
    return name;
}

export async function findVariableByReferences(alias: string): Promise<Variable> {
    let references = findTokenReferences(alias);
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

        return null;
    };

    return token;
}

export function resolveGlobalTokenValue(alias, dictionary: DesignTokensRaw) {
    let references = findTokenReferences(alias);
    let result = alias;
    
    references?.forEach(reference => {
        let name = getReferenceName(reference);

        const globalToken = findGlobalTokenByName(name, dictionary);

        if(globalToken) {
            result = result.replace(reference, globalToken.$value);
        }
        else {
            result = null;
        }
    });

    const check = findTokenReferences(result);
    
    if (check != null) {
        return resolveGlobalTokenValue(result, dictionary);
    }
    else {
        return result;
    }

}