const inputEl = document.querySelector('#font-size-control');
const nameLabelEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameLabelEl.style.fontSize = event.currentTarget.value + "px";
}