import { collectValues, getFormData } from "@foundation/import-ui";
import { mainForm } from "../ref/main-form";
import { ImportEventParameters } from "@foundation/main";

document.getElementById('createUpdateElevationComponentsButton').addEventListener('click', (e) => {
    const modal = document.getElementById('manageElevationComponentsModal') as HTMLDialogElement;
    const options = collectValues(modal) as ImportEventParameters;
    const params = getFormData(mainForm);
    parent.postMessage({ 
        pluginMessage: { 
            type: "CREATE_ELEVATION_COMPONENTS", 
            params,
            options
        }
    }, "*");   

    modal.close();    
})