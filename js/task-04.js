const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const cointerRef = document.querySelector('#value');
let counterValue = 0;

btnDecrementRef.addEventListener('click', () => {
  counterValue -= 1;
  cointerRef.textContent = counterValue;
 });
btnIncrementRef.addEventListener('click', () => {
  counterValue += 1;
  cointerRef.textContent = counterValue;
});
 
