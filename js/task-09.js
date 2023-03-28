function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonEl = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');
const bodyColourEl = document.querySelector('body')

buttonEl.addEventListener('click', onChangeColorBodyClick)

function onChangeColorBodyClick() {
  bodyColourEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = bodyColourEl.style.backgroundColor;
}