const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUlRef = document.querySelector('#ingredients');

const ingredientsItems = ingredients
  .map((item) => {
    const ingredient = document.createElement('li');
    ingredient.textContent = item;
    ingredient.classList.add('item');
    return ingredient;
  })

ingredientsUlRef.append(...ingredientsItems);

