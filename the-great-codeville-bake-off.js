const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Loop through each recipe.
  for(let recipeIdx = 0; recipeIdx < recipes.length; recipeIdx++) {
    if(findIngredients(bakeryA,recipes[recipeIdx]) && findIngredients(bakeryB,recipes[recipeIdx])) {
      return recipes[recipeIdx].name;
    }
  }
}

function findIngredients(bakery, recipe) {
  for(let ingredients = 0; ingredients < bakery.length; ingredients++){
    if(bakery[ingredients] === recipe.ingredients[0] || bakery[ingredients] === recipe.ingredients[1]) {
      return true;
    }
  }

  return false;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
