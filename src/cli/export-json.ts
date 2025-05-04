#!/usr/bin/env node

import { getReferenceName } from "../utils/token-references";
import { parseColorValue } from "../utils/figma-colors";
import { getGlobalNeutrals, getThemeColors, resolveColorTokenValue } from "../color-tokens";
import { ImportFormData } from "../import-ui";
import { DesignToken, DesignTokensRaw } from "../import-tokens";
import defaultSettings from "../presets/default.json";

import * as defaults from '../defaults';
import * as spacing from '../spacing-tokens';
import * as radii from '../radii-tokens';
import * as typescale from '../typography-tokens';
import * as sizing from '../sizing-tokens';
import * as effects from '../effect-tokens';
import { opacity } from '../opacity-tokens';

import fs from 'fs';
import path from "path";
import { EffectTokenValue } from "../effect-tokens";
import { makeFolder, writeTheFileIntoDirectory } from "./export-css";
import { variableNameToObject } from "../utils/figma-variables";

function isAlias(value) {
    return value.toString().trim().charAt(0) === "{";
}

interface CollectionExportRecord {
    collection: string,
    mode: string,
    tokens: DesignToken | DesignTokensRaw
}

function collectColorVariables(theme: 'lightBase' | 'darkBase' | 'darkElevated', settings: ImportFormData) {
    let themeColors = getThemeColors(theme, settings);
    let globalNeutrals = getGlobalNeutrals();


    const collection = { collection: defaults.collectionNames.get("themeColors"), mode: theme, tokens: {} } as CollectionExportRecord;

    Object.entries(themeColors as DesignTokensRaw).forEach(([name, token]) => {
        if(!token['$value']) {
            return;
        }

        if (typeof token.$value !== 'string' || token.$type !== 'color') return;

        let tokenData = variableNameToObject({name, targetObject: collection.tokens});

        tokenData.$type = token.$type;

        if (token.$value.indexOf('grey') != -1) {
            tokenData.$value = resolveColorTokenValue(token as DesignToken, globalNeutrals, 'hsl');
        }
        else if (token.$value.startsWith('rgba(#')) {
            tokenData.$value = parseColorValue(token.$value, token.adjustments).hsl;
        }
        else {
            // console.log(name);
            // console.log(token.$value);
            tokenData.$value = resolveColorTokenValue(token as DesignToken, themeColors, 'hsl');
            // console.log(value)
        }
    })

    return collection;
}

function collectSizingVariables(name, sizes, tokens): CollectionExportRecord[] {
    let collections = [];
    sizes.forEach(size => {
        const collection = { collection: name, mode: size, tokens: {} } as CollectionExportRecord;

        let tokeSet = tokens[size];
        Object.entries(tokeSet as DesignTokensRaw).forEach(([name, token]) => {
            let tokenData = collection.tokens;
            name.split("/").forEach((groupName) => {
                tokenData[groupName] = tokenData[groupName] || {};
                tokenData = tokenData[groupName];
            });

            tokenData.$type = token.$type;
            tokenData.$value = token.$value;
        })


        collections.push(collection)

    });

    return collections;
}

function collectElevationVariables(name, settings: ImportFormData): CollectionExportRecord {
    const tokens = effects.getElevationTokens(settings.shadowsStyle)
    const collection = { collection: name, mode: 'default', tokens: {} } as CollectionExportRecord;

    Object.entries(tokens as DesignTokensRaw).forEach(([name, token]) => {
        let tokenData = collection.tokens;
        name.split("/").forEach((groupName) => {
            tokenData[groupName] = tokenData[groupName] || {};
            tokenData = tokenData[groupName];
        });

        tokenData.$type = token.$type;
        tokenData.$value = token.$value;
    })

    return collection;
}


const configName = 'source.config.json';
const configFilePath = path.resolve(`./${configName}`);

const defaultOutputFolder = "./dist";
const defaultOutputName = 'source.tokens.json';

let settings = Object.apply({}, defaultSettings);

let command = process.argv.slice(2)[0] || `${defaultOutputFolder}/${defaultOutputName}`;

try {
    let configData = fs.readFileSync(configFilePath, 'utf8');
    settings = JSON.parse(configData) as ImportFormData;
}
catch (e) {
    console.warn('No config available, using default settings', defaultSettings);
}

(async () => {

    console.log()

    let output = command;

    let data: CollectionExportRecord[] = [];

    data.push(collectColorVariables('lightBase', settings as ImportFormData));
    data.push(collectColorVariables('darkBase', settings as ImportFormData));
    data.push(collectColorVariables('darkElevated', settings as ImportFormData));

    data = data.concat(collectSizingVariables('Spacing', defaults.spacingSizeName, spacing));
    data = data.concat(collectSizingVariables('Radii', defaults.radiiSizeName, radii));
    data = data.concat(collectSizingVariables('Typography', defaults.typographySizeName, typescale));

    data.push({ collection: 'Opacity', mode: 'default', tokens: opacity })
    data.push(collectElevationVariables('Elevation', settings as ImportFormData))

    if (!path.extname(output)) {
        console.warn('No output file specified, using default name instead', defaultOutputName)
        output += `/${defaultOutputName}`;
    }

    makeFolder(output);
    const stream = fs.createWriteStream(output);

    await writeTheFileIntoDirectory(stream, () => {

        stream.write(JSON.stringify(data, null, 4));

        stream.close()
    })
    console.log('✅ Done!', output)
})();
