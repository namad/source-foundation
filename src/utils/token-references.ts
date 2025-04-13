import { DesignTokensRaw } from "../import-tokens";
import { designTokenAliasToFigma, findFigmaVariableByName, getDefaultVariableValue } from "./figma-variables";

let globalTokens = {};

export function getGlobalTokensDictionary() {
    return globalTokens;
}

export function addToGlobalTokensDictionary(data) {
    globalTokens = {
        ...globalTokens,
        ...data
    }
}

const aliasRegex = /\{(.+?)(.+?)\}/g;

export function findTokenReferences(tokenAlias: string) {
    return tokenAlias?.toString().match(aliasRegex)
}

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
        name = designTokenAliasToFigma(name);

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
            
    name = designTokenAliasToFigma(name);
    const token = dictionary[name];

    if(!token) {
        const msg = `Cannot find token ${name} in global disctionary:`;
        console.warn(msg, dictionary);
        // figma.notify(msg, {error: true});
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

export async function findVariableAlias(name: string): Promise<VariableAlias|null>{
    let referenceVar = await findVariableByReferences(name.trim());
    if (referenceVar) {
        return {
            type: "VARIABLE_ALIAS",
            id: referenceVar.id,
        }
    }
    else {
        return null;
    } 
}

export async function resolveAliasOrValue(value: string, dictionary): Promise<VariableAlias|string> {
    let variableAlias = await findVariableAlias(value.trim());
    if (variableAlias) {
        return variableAlias
    }

    return resolveGlobalTokenValue(value, dictionary);
}