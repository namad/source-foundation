#!/usr/bin/env node

import { getReferenceName } from "../utils/token-references";
import { parseColorValue, parseColorToken } from "../utils/figma-colors";
import { getGlobalNeutrals, getThemeColors } from "../color-tokens";
import { ImportFormData } from "../import-ui";
import { DesignTokensRaw } from "../main";
import defaultSettings from "../presets/default.json";

import * as defaults from '../defaults';
import * as spacing from '../spacing-tokens';
import * as radii from '../radii-tokens';
import * as typescale from '../typescale-tokens';
import * as sizing from '../sizing-tokens';
import * as effects from '../effect-tokens';

import fs from 'fs';
import path from "path";

function isAlias(value) {
    return value.toString().trim().charAt(0) === "{";
}

function makeFolder(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    makeFolder(dirname);
    fs.mkdirSync(dirname);
}

let defaultOutputFolder = "./dist";
let defaultOutputName = 'variables.css'
let settings = defaultSettings as ImportFormData
let output = process.argv.slice(2)[0] || `${defaultOutputFolder}/${defaultOutputName}`;

try {
    let configFile = path.resolve(`./source.config.json`);
    let configData = fs.readFileSync(configFile, 'utf8');
    settings = JSON.parse(configData) as ImportFormData;
}
catch (e) {
    console.warn('No config available, using default settings', defaultSettings);
}

/*
console.log(themeColors);

var stream = fs.createWriteStream(output);
stream.once('open', function (fd) {
    stream.write(":root {\n");

    Object.entries(themeColors as DesignTokensRaw).forEach(([name, token]) => {
        let value = token.$value;

        if (typeof token.$value != 'string') return;

        if (isAlias(token.$value)) {
            const aliasName = getReferenceName(token.$value);
            value = `var(--${aliasName.replace(/\./g, "-")})`;
        }

        else if (token.$value.startsWith('rgba(#')) {
            value = convertToFigmaColor(token.$value, token.adjustments).hsl;
        }
        else {
            value = parseColor(token, {}, 'hsl');
        }

        stream.write(`--${name.replace(/\//g, "-")}: ${value};\n`);
    })

    stream.write("}\n");
    stream.end();
});
*/

function writeChunk(stream, className, data, output) {

    stream.write(`.${className} {\n`);

    data.forEach(({ name, value }) => {
        stream.write(`    --${name.replace(/\//g, "-")}: ${value};\n`);
    })

    stream.write("}\n");
}

function collectColorVariables(theme: 'lightBase' | 'darkBase' | 'darkElevated', settings: ImportFormData) {
    let themeColors = getThemeColors(theme, settings);
    let globalNeutrals = getGlobalNeutrals();
    return Object.entries(themeColors as DesignTokensRaw).map(([name, token]) => {
        if (typeof token.$value !== 'string' || token.$type !== 'color') return;

        let value = token.$value;

        if (token.$value.indexOf('grey') != -1) {
            value = parseColorToken(token, globalNeutrals, 'hsl');
        }
        else if (isAlias(value)) {
            const aliasName = getReferenceName(value);
            value = `var(--${aliasName.replace(/\./g, "-")})`;
        }
        else if (value.startsWith('rgba(#')) {
            value = parseColorValue(value, token.adjustments).hsl;
        }
        else {
            value = parseColorToken(token, {}, 'hsl');
        }

        return { name, value };
    })
}

function writeRadiiVariables(stream, output) {
    defaults.radiiSizeName.forEach(size => {
        const tokens = radii[size] as DesignTokensRaw;
        const data = Object.entries(tokens).map(([name, token]) => {
            return { name, value: `${token.$value}px` };
        })
        writeChunk(stream, `radii-${size}`, data, output);
    });
}

function writeSpacingVariables(stream, output) {
    defaults.spacingSizeName.forEach(size => {
        const tokens = spacing[size] as DesignTokensRaw;
        const data = Object.entries(tokens).map(([name, token]) => {
            return { name, value: `${token.$value}px` };
        })
        writeChunk(stream, `spacing-${size}`, data, output);
    });
}

function writeTypographyVariables(settings: ImportFormData, stream, output) {
    defaults.typographySizeName.forEach(size => {
        const tokens = typescale.getTypograohyTokens(size, settings.typeScale) as DesignTokensRaw;
        const data = Object.entries(tokens).filter(([name, token]) => {
            return token.$type == 'number';
        }).map(([name, token]) => {
            return { name, value: `${token.$value}px` };
        })

        writeChunk(stream, `typography-${size}`, data, output);
    });
}

if (!path.extname(output)) {
    console.warn('No output file specified, using default name instead', defaultOutputName)
    output += `/${defaultOutputName}`;
}

makeFolder(output);
var stream = fs.createWriteStream(output);

writeChunk(stream, 'theme-light', collectColorVariables('lightBase', settings), output);
writeChunk(stream, 'theme-dark-base', collectColorVariables('darkBase', settings), output);
writeChunk(stream, 'theme-dark-elevated', collectColorVariables('darkElevated', settings), output);

writeRadiiVariables(stream, output);
writeSpacingVariables(stream, output);
writeTypographyVariables(settings, stream, output);

stream.close();

console.log();

console.log('✅ Done!', output)

