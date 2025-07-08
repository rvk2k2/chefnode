const express = require('express');

const router = express.Router();
const {handleParticularRecipe, handleRecipes} = require("../controllers/recipeController");

router.get('/',handleRecipes);
router.get('/:id',handleParticularRecipe);

module.exports = router;

