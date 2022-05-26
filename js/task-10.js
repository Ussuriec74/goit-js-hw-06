const inputNumberRef = document.querySelector("input");
const createCollectionBtnRef = document.querySelector("button[data-create]");
const destroyCollectionBtnRef = document.querySelector("button[data-destroy]");
const collectionBoxesRef = document.querySelector("#boxes");


createCollectionBtnRef.addEventListener("click", () => {
  const amount = inputNumberRef.value;
  createBoxes(amount);
});

const destroyBoxes = () => {
  collectionBoxesRef.innerHTML = "";
}
destroyCollectionBtnRef.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createBoxes = (amount) => {
  let collectionHtml = "";
  let backgroundColor = getRandomHexColor();
  let widthBox = 30;
  let heightBox = 30;
  for (let i = 0; i < amount; i += 1) {
    collectionHtml += `<div style = "background-color: ${backgroundColor}; width: ${widthBox}px; height: ${heightBox}px"></div>`;
    backgroundColor = getRandomHexColor();
    widthBox += 10;
    heightBox += 10;
  }
  collectionBoxesRef.innerHTML += collectionHtml;
}
