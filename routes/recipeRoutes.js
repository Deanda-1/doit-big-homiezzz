const router = require('express').Router();
const { User, Category, Recipe } = require('../models');


// GET one category
router.get('/category/:id', async (req, res) => {
  try {
    const dbrecipe = await recipe.findByPk(req.params.id);

    const recipe = dbrecipe.get({ plain: true });

    res.render('recipes', { recipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

// router.get("/:category/:id")