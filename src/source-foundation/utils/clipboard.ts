export async function clipboardPaste(element: HTMLFormElement) {
   try {
     const text = await navigator.clipboard.readText()
     element.value += text;
     console.log('Text pasted.');
   } catch (error) {
     console.log('Failed to read clipboard. Using execCommand instead.');
     element.focus();
     const result = document.execCommand('paste')
     console.log('document.execCommand result: ', result);
   }
};