const { Recipe } = require('../models');

const recipeData = [
  {
    name: 'Martini',
    recipe: '3 oz gin or vodka, 5 oz dry vermouth, Lemon peel or olive',
    category_id: 1,
  },
  {
    name: 'French 75',
    recipe: '2 oz gin, 2 dashes simple syrup, .5 oz lemon juice, Champagne',
    category_id: 2,
  },
  {
    name: 'Whiskey Sour',
    recipe: ' 2 oz whiskey, 1 oz lemon juice, 1 tsp sugar, 1 egg white (optional)',
    category_id: 3,
  },
 
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;
