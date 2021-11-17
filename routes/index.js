const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./recipeRoutes');

router.use('/', recipeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
