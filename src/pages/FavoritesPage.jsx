import React from "react";
import { useFavorites } from "../context/FavoriteContext";
import RecipeCard from "../components/RecipeCard";

const FavoritesPage = ()=>{

     const { favorites } = useFavorites();

    return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">You haven’t added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
