import theme1 from './presets/default.json';
import theme2 from './presets/royal-blue.json';
import theme3 from './presets/cyan.json';
import { ImportFormData } from './import';


export function getPresets(): ImportFormData[] {
    return [
        theme1 as ImportFormData, 
        theme2 as ImportFormData, 
        theme3 as ImportFormData
    ]
}

export function getPresetContentTemplate(index) {
    return `
        <input type="radio" name="theme" value="${index}" />
        <span class="text-base hidden">Theme ${index}</span>
        <span class="info">
            <span class="info-item">
                <span class="icon icon__spacing" title="Spacing"></span>                
                <span class="text-text-base-600" data-value="spacing"></span>
            </span>
            <span class="info-item">
                <span class="icon icon__radii" title="Radii"></span>
                <span class="text-text-base-600" data-value="radii"></span>
            </span>
            <span class="info-item">
                <span class="icon icon__typography" title="Typography"></span>
                <span class="text-text-base-600" data-value="typeScale"></span> / 
                <span class="text-text-base-600" data-value="baseFontSize"></span>
            </span>
        </span>
        <span class="swatches neutral-swatches">
            <span class="swatch swatch-1"></span>
            <span class="swatch swatch-2"></span>
            <span class="swatch swatch-3"></span>
            <span class="swatch swatch-4"></span>
            <span class="swatch swatch-5"></span>
        </span>
        <span class="swatches semantic-swatches">
            <span class="swatch swatch-1"></span>
            <span class="swatch swatch-2"></span>
            <span class="swatch swatch-3"></span>
            <span class="swatch swatch-4"></span>
            <span class="swatch swatch-5"></span>
        </span>
    `;
}
