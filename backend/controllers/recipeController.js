const Recipe = require('../models/Recipe');


const handleRecipes = async (req, res) =>{

    try{
          const recipes = await Recipe.find();
          res.json(recipes);
    }catch(err){
        res.status(500).json({message: "error in fetching recipes"})
    }

}

const handleParticularRecipe = async (req, res)=>{
    try {
           const recipe = await Recipe.findById(req.params.id);
           if (!recipe) return res.status(404).json({ error: "Not found" });
           res.json(recipe);
    }catch(err){
        res.status(500).json({message: " error in fetching individual recipe"})
    }
     
}

module.exports = {
    handleParticularRecipe,
    handleRecipes,
}

