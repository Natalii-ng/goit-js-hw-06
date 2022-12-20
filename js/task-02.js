const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUlEl = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  const LiEl = document.createElement('li');
  LiEl.classList.add('item');
  LiEl.textContent = ingredient;
  return LiEl;
});

ingredientsUlEl.append(...elements);