import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'
import svgToMiniDataURI from 'mini-svg-data-uri';
import fs from 'fs';
import path from "path";
import { makeFolder, writeCSSChunk, writeTheFileIntoDirectory } from './export';

const icons = globSync('./icons-parsed/*.svg')

const dataURIs = icons.map((iconPath) => {
    const attributes = iconPath.replace('icons-parsed/', '').replace('.svg', '').split(', ');
    const name = attributes[0].replace('name=', '');
    const size = attributes[1]?.replace('glyph-size=', '') || 'base';
    const svg = fs.readFileSync(iconPath, 'utf8');

    let iconName = name;

    if (size == 'sm') {
        iconName += '-sm'
    }

    return {name: `${iconName}`, value: `"${svgToMiniDataURI(svg)}"`};
});

(async() => {

    const output = './css/icons.css';

    makeFolder(output);
    const stream = fs.createWriteStream(output);

    await writeTheFileIntoDirectory(stream, () => {
        writeCSSChunk(stream, ':root', dataURIs);
        stream.close()
    })
    console.log('✅ Done!')
})();