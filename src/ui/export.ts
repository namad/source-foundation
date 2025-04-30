import "./styles/source-variables.css";
import "./styles/utils.css";
import "./styles/styles.css";
import "./styles/icons.css";
import "./styles/dialog.css";
import { CollectionExportRecord } from "../import-export-json";


window.onmessage = ({ data: { pluginMessage } }) => {
  if (pluginMessage.type === "EXPORT_RESULT_JSON") {
    const data = pluginMessage.files as CollectionExportRecord[];
    document.querySelector("textarea").innerHTML = JSON.stringify(data, null, 2);
  }
};

document.getElementById("export").addEventListener("click", () => {

  const colorFormat = document.querySelector("input[name=colorFormat]:checked") as HTMLInputElement;
  parent.postMessage({ pluginMessage: { type: "EXPORT", format: colorFormat.value.trim() } }, "*");
});