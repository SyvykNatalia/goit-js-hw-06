const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainer = document.querySelector('#ingredients')
const elements = [];
ingredients.forEach(ingredient => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  elements.push(liElement)
})
console.log(elements)
ingredientsContainer.append(...elements)

