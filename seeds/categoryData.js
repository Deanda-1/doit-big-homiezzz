const { Category } = require('../models');

const categoryData = [
  {
    name: 'Vodka',
  },
  {
    name: 'Gin',
  },
  {
    name: 'Whiskey',
  },
  {
    name: 'Bourbon',
  },
  {
    name: 'Tequila',
  },
  {
    name: 'Rum',
  },
  {
    name: 'Wine',
  },
  {
    name: 'Brandy',
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
