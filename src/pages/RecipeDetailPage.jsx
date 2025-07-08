import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useFavorites } from "../context/FavoriteContext"; 




const RecipeDetailPage = ()=>{
  const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { addToFavorites, removeFromFavorites, isFavorites, favorites } = useFavorites();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error('Error fetching recipe:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const favorited = useMemo(() => {
  return recipe ? isFavorites(recipe._id) : false;
}, [favorites, recipe]);

const toggleFav = () => {
  favorited ? removeFromFavorites(recipe._id) : addToFavorites(recipe);
};

  if (loading) return <p className="text-center mt-10">Loading recipe...</p>;
  if (!recipe) return <p className="text-center mt-10">Recipe not found.</p>;






  return (
  <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-4">
    <img src={recipe.foodImage} alt={recipe.foodName} className="w-full h-64 object-cover rounded" />
    
    <h2 className="text-2xl font-bold mt-4">{recipe.foodName}</h2>
    
    <p className="text-gray-600 italic text-sm mb-2">Usually eaten with {recipe.eatenWith}</p>

    <p className="mt-2 text-gray-700">{recipe.foodDescription}</p>

    <div className="mt-4">
      <h3 className="font-semibold">Key Ingredients:</h3>
      <ul className="list-disc pl-6">
        {recipe.keyIngredients.map((ing, i) => (
          <li key={i}>
            {ing.name}
           <img src={ing.image} alt={ing.name} className="inline h-6 w-6 ml-2" /> 
          </li>
        ))}
      </ul>
    </div>

<button 
  onClick={toggleFav}
  className={`mb-4 mt-6 px-4 py-2 rounded-md font-medium transition ${
    favorited ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
  }`}
>
  {favorited ? 'Remove from Favorites ❤️' : 'Add to Favorites 🤍'}
</button>

  </div>
);

};

export default RecipeDetailPage;