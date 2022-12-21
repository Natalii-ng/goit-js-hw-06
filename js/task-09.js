function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refButton = document.querySelector('.change-color');
const refColor = document.querySelector('.color');
const body = document.body;

refButton.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  let changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  refColor.textContent = changeColor;

};