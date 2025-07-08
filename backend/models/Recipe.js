const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
}, { _id: false });


const recipeSchema = new mongoose.Schema({
  foodName: { type: String, required: true, unique: true },
  foodImage: { type: String },
  foodDescription: { type: String },
  keyIngredients: [ingredientSchema],
  eatenWith: { type: String },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

