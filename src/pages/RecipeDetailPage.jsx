import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useFavorites } from "../context/FavoriteContext"; 


const mockRecipes = [
  {
    _id: '1',
    name: 'Spaghetti Carbonara',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1603133872878-c6d1fa0fa1f4?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
    instructions:
      'Boil pasta. Fry pancetta. Mix eggs and cheese. Combine all with pasta and pepper.',
  },
  {
    _id: '2',
    name: 'Chicken Biryani',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1608757017619-5023b5c8f2a2?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    ingredients: ['Chicken', 'Rice', 'Yogurt', 'Spices', 'Onions'],
    instructions:
      'Marinate chicken. Cook rice. Layer and slow cook in a sealed pot.',
  },
 
];

const RecipeDetailPage = ()=>{

    const {id} = useParams();
   const {addToFav, removeFav, isFav} =useFavorites();
    
   const recipe = mockRecipes.find(rec => rec._id === id );
   
      if (!recipe) {
    return <div className="p-6 text-red-500">Recipe not found.</div>;
  }

    const favorited = isFav(recipe._id)
    const toggleFav= () =>{
      favorited ? removeFav(recipe._id) : addToFav(recipe);   
    }

    return(
        <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      
      <button
  onClick={toggleFav}
  className={`mb-4 px-4 py-2 rounded-md font-medium transition ${
    favorited ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
  }`}
>
  {favorited ? 'Remove from Favorites ❤️' : 'Add to Favorites 🤍'}
</button>


      <img
        src={recipe.thumbnailUrl}
        alt={recipe.name}
        className="w-full max-w-2xl mb-6 rounded-xl object-cover"
      />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetailPage;