document.querySelectorAll('[data-tabs]').forEach((el: HTMLDivElement) => {
    const tabs = el.querySelectorAll('[data-tab]') as NodeListOf<HTMLInputElement>;
    setActiveTab(tabs);

    tabs.forEach(tabRadioButton => {
        tabRadioButton.addEventListener('click', (e) => {
            setActiveTab(tabs);
        });
    })
});

function setActiveTab(tabs: NodeListOf<HTMLInputElement>) {
    tabs.forEach(tabRadioButton => {
        const tabID = tabRadioButton.dataset.tab;
        const tab = document.getElementById(tabID);
        tab.style.display = tabRadioButton.checked ? '' : 'none';
    })
};
