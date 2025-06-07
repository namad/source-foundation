let markup = [];
for(let x = 99; x >= 0; x--) {
    markup.push(`
        <div class="color-cell" style="background-color: var(--grey-${x})" title="grey-${x}"  data-tooltip="top" data-offset="8">
            <span class="value">${x}%</span>
        </div>
    `)
}
document.getElementById('gloablNeutralsPreview').innerHTML = markup.join('');