const inputRef = document.querySelector("input");

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === parseInt(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
  } else {
      inputRef.classList.add("invalid");
  }
})