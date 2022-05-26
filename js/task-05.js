const inputRef = document.querySelector("#name-input");
const spanTextRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  spanTextRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    spanTextRef.textContent = "Anonymous";
  }
})