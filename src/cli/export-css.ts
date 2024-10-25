#!/usr/bin/env node

import { getReferenceName } from "../utils/token-references";
import { parseColorValue } from "../utils/figma-colors";
import { getGlobalNeutrals, getThemeColors, resolveColorTokenValue } from "../color-tokens";
import { ImportFormData } from "../import-ui";
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
import { DesignToken, DesignTokensRaw } from "../import-tokens";

function isAlias(value) {
    return value.toString().trim().charAt(0) === "{";
}

export function makeFolder(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    makeFolder(dirname);
    fs.mkdirSync(dirname);
}



export function writeCSSChunk(stream, append = '', data) {
    stream.write(`${append} {\n`);
    data.forEach(({ name, value }) => {
        stream.write(`    --${name.replace(/\//g, "-")}: ${value};\n`);
    })
    stream.write("}\n");
}

export function writeJSONChunk(stream, data) {
    stream.write(`{\n`);

    let output = Object.entries(data).map(([key, value], i) => {
        return `    "${key}": "${value}"`;
    })

    stream.write(output.join(',\n'));
    stream.write("\n}\n");
}

function collectColorVariables(theme: 'lightBase' | 'darkBase' | 'darkElevated', settings: ImportFormData) {

    let themeColors = getThemeColors(theme, settings);


    let globalNeutrals = getGlobalNeutrals();
    return Object.entries(themeColors as DesignTokensRaw).map(([name, token]) => {
        if (typeof token.$value !== 'string' || token.$type !== 'color') return;

        let value = token.$value;

        if (token.$value.indexOf('grey') != -1) {
            value = resolveColorTokenValue(token as DesignToken, globalNeutrals, 'hsl');
        }
        else if (isAlias(value)) {
            const aliasName = getReferenceName(value);
            value = `var(--${aliasName.replace(/\./g, "-")})`;
        }
        else if (value.startsWith('rgba(#')) {
            value = parseColorValue(value, token.adjustments).hsl;
        }
        else {
            value = resolveColorTokenValue(token as DesignToken, {}, 'hsl');
        }

        return { name, value };
    })
}

function writeSizingVariables(stream, type, sizes, tokens) {
    sizes.forEach(size => {
        const token = tokens[size] as DesignTokensRaw;
        const data = Object.entries(token).map(([name, token]) => {
            return { name, value: `${token.$value}px` };
        })
        writeCSSChunk(stream, `[data-${type}=${size}], .${type}-${size}`, data);
    });
}

function writeOpacityVariables(stream) {

    const data = Object.entries(opacity).map(([name, token]) => {
        return { name, value: `${token.$value}` };
    })
    writeCSSChunk(stream, `:root`, data);
}

function writeTypographyVariables(typeScale: string, stream) {
    defaults.typographySizeName.forEach(size => {
        const tokens = typescale.getTypographyTokens(size, typeScale) as DesignTokensRaw;
        const data = Object.entries(tokens).filter(([name, token]) => {
            return token.$type == 'number';
        }).map(([name, token]) => {
            return { name, value: `${token.$value}px` };
        })

        writeCSSChunk(stream, `[data-typography=${size}], .typography-${size}`, data);
    });
}

export function writeTheFileIntoDirectory(stream, dataFn) {
    return new Promise((resolve, reject) => {
        stream.on('open', dataFn).on('close', () => resolve(true));
    });
}

function writeElevationVariables(stream) {
    const tokens = effects.getElevationTokens();
    
    const data = Object.keys(tokens).map((name, index) => {
        const variants = tokens[name];
        const [ shade, token ] = Object.entries(variants)[0];
        const settings = token['$value'] as EffectTokenValue[];

        const cssString = settings.map((shadowSettings) => {
            return `${shadowSettings.offsetX}px ${shadowSettings.offsetY}px ${shadowSettings.radius}px ${shadowSettings.spread}px var(--box-shadow-color)`
        }).join(', ');

        return { name: `shadow-${index}`, value: cssString}
    });

    writeCSSChunk(stream, `:root`, data);

    return data;
}

const configName = 'source.config.json';
const configFilePath = path.resolve(`./${configName}`);

const defaultOutputFolder = "./dist";
const defaultOutputName = 'variables.css';

let settings = { ...defaultSettings};

const { 
    hue,
    saturation,
    distance,
    primary,
    info,
    success,
    warning,
    danger,
    red,
    amber,
    brown,
    green,
    teal,
    blue,
    indigo,
    violet,
    purple,
    pink,
    typeScale,
    accentSaturation,
    accentMaxLuminance,
    accentMidLuminance,
    accentMinLuminance,
} = defaultSettings;

let command = process.argv.slice(2)[0] || `${defaultOutputFolder}/${defaultOutputName}`;

try {
    let configData = fs.readFileSync(configFilePath, 'utf8');
    settings = JSON.parse(configData) as ImportFormData;
}
catch (e) {
    console.warn('No config available, using default settings', defaultSettings);
}

(async() => {


    if (command === 'init') {
        const isConfigThere = fs.existsSync(configFilePath);
        console.log(command, isConfigThere);
        if (isConfigThere != true) {
            console.log('No config yet, working with these settings', settings);
            let stream = fs.createWriteStream(`./${configName}`);

            await writeTheFileIntoDirectory(stream, () => {
                writeJSONChunk(stream, settings);
                stream.close()
            })
            process.exit();
        }
        else {
            console.log('Config file already exist, cya!');
            process.exit();
        }
    }
    else {
        let output = command;

        if (!path.extname(output)) {
            console.warn('No output file specified, using default name instead', defaultOutputName)
            output += `/${defaultOutputName}`;
        }

        makeFolder(output);
        const stream = fs.createWriteStream(output);
        
        await writeTheFileIntoDirectory(stream, () => {
            writeCSSChunk(stream, '[data-theme=light], .theme-light', collectColorVariables('lightBase', settings as ImportFormData));
            writeCSSChunk(stream, '[data-theme=dark-base], .theme-dark-base', collectColorVariables('darkBase', settings as ImportFormData));
            writeCSSChunk(stream, '[data-theme=dark-elevated], .theme-dark-elevated', collectColorVariables('darkElevated', settings as ImportFormData));

            writeSizingVariables(stream, 'radii', defaults.radiiSizeName, radii);
            writeSizingVariables(stream, 'spacing', defaults.spacingSizeName, spacing);
            writeSizingVariables(stream, 'typography', defaults.typographySizeName, typescale);
            writeSizingVariables(stream, 'iconSize', defaults.iconSizeName, sizing);
            writeOpacityVariables(stream);
            writeElevationVariables(stream);

            stream.close()
        })
        console.log('✅ Done!', output)    
    }
})();
