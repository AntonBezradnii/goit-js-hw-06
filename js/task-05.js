

const inputEl = document.querySelector('#name-input');
const nameInputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputTargetName)

function onInputTargetName(_event) {
     nameInputEl.textContent = _event.currentTarget.value;
};