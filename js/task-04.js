

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');

// console.log(valueEl.textContent)

let counterValue = 0;


function eventDecrementClick(event) {
   counterValue -= 1;
    valueEl.textContent = counterValue;
};


function eventIncrementClick(event) {
    counterValue += 1;
     valueEl.textContent = counterValue;
 };

decrementBtnEl.addEventListener('click', eventDecrementClick);

incrementBtnEl.addEventListener('click', eventIncrementClick);