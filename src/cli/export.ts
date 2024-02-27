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
import { EffectToken } from "../effect-tokens";

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

const configName = 'source.config.json';
const configFilePath = path.resolve(`./${configName}`);

const defaultOutputFolder = "./dist";
const defaultOutputName = 'variables.css';

let settings = Object.apply({}, defaultSettings);

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

function writeSizingVariables(stream) {
    defaults.iconSizeName.forEach(size => {
        const tokens = sizing[size] as DesignTokensRaw;
        const data = Object.entries(tokens).map(([name, token]) => {
            return { name, value: `${token.$value}px` };
        })
        writeCSSChunk(stream, `[data-icons=${size}], .icons-${size}`, data);
    });
}

function writeRadiiVariables(stream) {
    defaults.radiiSizeName.forEach(size => {
        const tokens = radii[size] as DesignTokensRaw;
        const data = Object.entries(tokens).map(([name, token]) => {
            return { name, value: `${token.$value}px` };
        })
        writeCSSChunk(stream, `[data-radii=${size}], .radii-${size}`, data);
    });
}

function writeSpacingVariables(stream) {
    defaults.spacingSizeName.forEach(size => {
        const tokens = spacing[size] as DesignTokensRaw;
        const data = Object.entries(tokens).map(([name, token]) => {
            return { name, value: `${token.$value}px` };
        })
        writeCSSChunk(stream, `[data-spacing=${size}], .spacing-${size}`, data);
    });
}

function writeTypographyVariables(typeScale: string, stream) {
    defaults.typographySizeName.forEach(size => {
        const tokens = typescale.getTypograohyTokens(size, typeScale) as DesignTokensRaw;
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
        const settings = token['$value'] as EffectToken[];

        const cssString = settings.map((shadowSettings) => {
            return `${shadowSettings.x}px ${shadowSettings.y}px ${shadowSettings.blur}px ${shadowSettings.spread}px var(--box-shadow-color)`
        }).join(', ');

        return { name: `shadow-${index}`, value: cssString}
    });

    writeCSSChunk(stream, `.shadow`, data);

    return data;
}

(async() => {
    if (command === 'init') {
        const isConfigThere = fs.existsSync(configFilePath);
        if (isConfigThere != true) {
            console.log('No config yet, working...');
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

            writeRadiiVariables(stream);
            writeSpacingVariables(stream);
            writeElevationVariables(stream);
            writeSizingVariables(stream);
            writeTypographyVariables(typeScale, stream);

            stream.close()
        })
        console.log('✅ Done!', output)    
    }
})();
