import { DesignToken, DesignTokensRaw } from "../main";
import { findFigmaVariableByName, getDefaultVariableValue } from "./figma-variables";

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
        const msg = `Failed to find global token ${name}`;
        figma.notify(msg, {error: true});
        throw new Error(msg);
    };

    return token;
}

export function resolveGlobalAliasValue(value: string, dictionary): string {
    let references = findTokenReferences(value);
    let result = value;
    
    references?.forEach(reference => {
        let name = getReferenceName(reference);

        const globalToken = findGlobalTokenByName(name, dictionary);
        result = result.replace(reference, globalToken.$value);
    });

    const check = findTokenReferences(result);
    
    if (check != null) {
        return resolveGlobalAliasValue(result, dictionary);
    }
    else {
        return result;
    }
}

export async function findVariableAlias(value: string): Promise<VariableAlias|null>{
    let referenceVar = await findVariableByReferences(value.trim());
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
        const variable = await figma.variables.getVariableByIdAsync(variableAlias.id);
        const defaultValue = await getDefaultVariableValue(variable);

        return variableAlias
    }

    return resolveGlobalAliasValue(value, dictionary);
}
