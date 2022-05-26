const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUlRef = document.querySelector('#ingredients');
const ingredientsItems = [];

ingredients.forEach(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList.add('item');
  ingredientsItems.push(ingredient);
})
ingredientsUlRef.append(...ingredientsItems);

