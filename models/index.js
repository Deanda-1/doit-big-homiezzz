const User = require('./user');
const Category = require('./category');
const Recipe = require('./recipe');

Category.hasMany(Recipe, {
  foreignKey: 'category_id',
});

module.exports = { User, Category, Recipe };
