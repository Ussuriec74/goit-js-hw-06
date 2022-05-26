const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", (event) => {
  const textFontSize = event.currentTarget.value;
  textRef.style.fontSize = `${textFontSize}px`;
})