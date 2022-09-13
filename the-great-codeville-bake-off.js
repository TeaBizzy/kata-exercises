const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for(let recipe = 0; recipe < recipes.length; recipe++) {
    let aHasIngredients = false;
    let bHasIngredients = false;
    for(let aIngredients = 0; aIngredients < bakeryA.length; aIngredients++){
      if(bakeryA[aIngredients] === recipes[recipe].ingredients[0] || bakeryA[aIngredients] === recipes[recipe].ingredients[1]) {
        aHasIngredients = true;
      }
    }
    for(let bIngredients = 0; bIngredients < bakeryB.length; bIngredients++) {
      if(bakeryB[bIngredients] === recipes[recipe].ingredients[0] || bakeryB[bIngredients] === recipes[recipe].ingredients[1]) {
        bHasIngredients = true;
      }
    }
    if(aHasIngredients && bHasIngredients) {
      return recipes[recipe].name;
    }
  }
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
