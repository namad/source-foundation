import theme1 from './presets/default.json';
import theme2 from './presets/royal-blue.json';
import theme3 from './presets/cyan.json';
import theme4 from './presets/indigo.json';
import theme5 from './presets/pink.json';

import { ImportFormData } from './import';


export function getPresets(): ImportFormData[] {
    return [
        theme1 as ImportFormData, 
        theme2 as ImportFormData, 
        theme3 as ImportFormData,
        theme4 as ImportFormData,
        theme5 as ImportFormData,
    ]
}

export function getPresetContentTemplate(index) {
    return `
        <input type="radio" name="theme" value="${index}" />
        <span class="col-info">
            <span class="info-item">
                <span class="icon icon-16 icon-colors" title="Color pattern"></span>                
                <span>
                    <span class="text-text-base-600" data-value="distance">2</span><span class="text-text-base-400">%</span>
                </span>
            </span>
            <span class="info-item">
                <span class="icon icon-16 icon-typography" title="Typography"></span>
                <span>
                    <span class="text-text-base-600" data-value="typeScale">Minor Third</span> / 
                    <span class="text-text-base-600" data-value="baseFontSize">Base</span>
                </span>
            </span>
            <span class="flex flex-row gap-sx-base">
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
