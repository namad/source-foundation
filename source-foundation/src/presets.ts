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

export function getPresetContentTemplate(index: number, parent: HTMLElement): Element {
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ("content" in document.createElement("template")) {
        const template = document.querySelector("#presetItemTemplate") as HTMLTemplateElement;
        let presetItem = document.importNode(template.content, true);
        const radio = presetItem.querySelector('[name="theme"]');
        const label = presetItem.querySelector('.theme-item')
        radio.setAttribute('value', index.toString());
        parent.appendChild(presetItem);
        return label;
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.

        debugger;
    }
}
