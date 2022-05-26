const changeColorBtnRef = document.querySelector(".change-color");
const changeColorTextRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", onClickBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onClickBtn() {
  const newColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = newColor;
  changeColorTextRef.textContent = newColor;
}
