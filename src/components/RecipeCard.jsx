import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipes/${recipe._id}`)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={recipe.foodImage}
        alt={recipe.foodName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{recipe.foodName}</h2>
        <p className="text-sm text-gray-600">
          {recipe.rating ? `⭐ ${recipe.rating}` : 'No ratings yet'}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;