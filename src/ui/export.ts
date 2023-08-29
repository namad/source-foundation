import "./styles.css";

window.onmessage = ({ data: { pluginMessage } }) => {
    if (pluginMessage.type === "EXPORT_RESULT") {
      document.querySelector("textarea").innerHTML = pluginMessage.files
        .map(
          ({ fileName, body }) =>
            `/* ${fileName} */\n\n${JSON.stringify(body, null, 2)}`
        )
        .join("\n\n\n");
    }
  };
  document.getElementById("export").addEventListener("click", () => {

    const colorFormat = document.querySelector("input[name=colorFormat]:checked") as HTMLInputElement;
  
    parent.postMessage({ pluginMessage: { type: "EXPORT", format: colorFormat.value.trim() } }, "*");
  });