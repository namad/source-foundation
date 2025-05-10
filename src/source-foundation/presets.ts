import blue from './presets/default.json';
import rolayBlue from './presets/royal-blue.json';
import cyan from './presets/cyan.json';
import indigo from './presets/indigo.json';
import pink from './presets/pink.json';
import green from './presets/green.json';
import amber from './presets/amber.json';
import deepPink from './presets/pink-deep.json';

import { ImportFormData } from './import-ui';


export function getPresets(): ImportFormData[] {
    return [
        amber as ImportFormData,
        green as ImportFormData,
        cyan as ImportFormData,
        blue as ImportFormData, 
        rolayBlue as ImportFormData, 
        indigo as ImportFormData,
        pink as ImportFormData,
        deepPink as ImportFormData,
    ]
}

export function getPresetContentTemplate(index) {
    return `
        <input type="radio" name="theme" value="${index}" />
        <span class="col-info">
            <span class="info-item">
                <span class="icon icon-16 icon-colors" title="Color pattern"></span>                
                <span>
                    <span class="text-text-base-600" data-value="distance" data-transform="IN">2</span><span class="text-text-base-400">%</span>
                </span>
            </span>
            <span class="info-item">
                <span class="icon icon-16 icon-typography" title="Typography"></span>
                <span>
                    <span class="text-text-base-600" data-value="typeScale">Minor Third</span> / 
                    <span class="text-text-base-600" data-value="baseFontSize">Base</span>
                </span>
            </span>
            <span class="flex flex-row gap-base">
                <span class="info-item">
                    <span class="icon icon-16 icon-spacing" title="Spacing"></span>                
                    <span class="text-text-base-600" data-value="spacing">Base</span>
                </span>
                <span class="info-item">
                    <span class="icon icon-16 icon-radii" title="Radii"></span>
                    <span class="text-text-base-600" data-value="radii">Base</span>
                </span>
            </span>                
        </span>
        <span class="col-swatches">
            <span class="swatches">
                <span class="swatch bg-fill-base-200"></span>
                <span class="swatch bg-fill-base-300"></span>
                <span class="swatch bg-fill-base-400"></span>
                <span class="swatch bg-fill-base-500"></span>
            </span>
            <span class="swatches">
                <span class="swatch bg-primary-500"></span>
                <span class="swatch bg-primary-400"></span>
                <span class="swatch bg-primary-300"></span>
                <span class="swatch bg-primary-200"></span>
            </span>
        </span>
    `;
}
