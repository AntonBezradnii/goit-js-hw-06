

const inputEl = document.querySelector('#validation-input');
const atribute = Number(inputEl.getAttribute('data-length'))

inputEl.addEventListener('blur', onInputValueNumber)

function onInputValueNumber() {
    if (inputEl.value.length === atribute) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
}
