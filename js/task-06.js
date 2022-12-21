const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onLostFocus);

function onLostFocus(event) {
    inputEl.classList.remove("invalid");
    if (inputEl.value.length === Number(inputEl.dataset.length)){
        inputEl.classList.add("valid");
    }
    else {
        inputEl.classList.add("invalid");
    }
}