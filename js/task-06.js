const inputRef = document.querySelector("input");

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === parseInt(inputRef.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
      inputRef.classList.remove("valid");
      inputRef.classList.add("invalid");
  }
})