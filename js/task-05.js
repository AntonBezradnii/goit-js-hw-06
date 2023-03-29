

const inputEl = document.querySelector('#name-input');
const nameInputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputTargetName)

function onInputTargetName(_event) {
     if (_event.currentTarget.value.length != 0) {
          nameInputEl.textContent = _event.currentTarget.value;
     }
     else { nameInputEl.textContent = 'Anonymous' }
     
     
};

