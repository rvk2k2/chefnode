import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { token, isLoggedIn } = useAuth();

  useEffect(() => {
  const fetchFavorites = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const recipeIds = await res.json();
      console.log("favorites data in Favcontext:", recipeIds); // Confirm it's array of IDs

      // Now fetch full recipe details for each ID
      const recipePromises = recipeIds.map((id) =>
        fetch(`http://localhost:5000/api/recipes/${id}`).then((res) => res.json())
      );

      const fullRecipes = await Promise.all(recipePromises);
      setFavorites(fullRecipes);
    } catch (err) {
      console.log("failed to load favorites: ");
      console.log("error message: ", err);
    }
  };

  if (isLoggedIn) fetchFavorites();
  else setFavorites([]);
}, [isLoggedIn, token]);



const addToFavorites = async (recipeId) => {
  try {
    const res = await fetch('http://localhost:5000/api/favorites/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ recipeId })
    });

    const updatedIds = await res.json();

    if (res.ok) {
      // Fetch full recipe objects from the updated list
      const recipePromises = updatedIds.map((id) =>
        fetch(`http://localhost:5000/api/recipes/${id}`).then(res => res.json())
      );

      const fullRecipes = await Promise.all(recipePromises);
      setFavorites(fullRecipes);
    }
  } catch (err) {
    console.log(" error in adding a recipe to favorites");
    console.log("Error message:", err);
  }
};



const removeFromFavorites = async (recipeId) => {
  try {
    const res = await fetch('http://localhost:5000/api/favorites/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ recipeId })
    });

    const updatedIds = await res.json();

    if (res.ok) {
      const recipePromises = updatedIds.map((id) =>
        fetch(`http://localhost:5000/api/recipes/${id}`).then(res => res.json())
      );

      const fullRecipes = await Promise.all(recipePromises);
      setFavorites(fullRecipes);
    }
  } catch (err) {
    console.log(" failed to remove recipe from favorites ");
    console.log(" error message ", err);
  }
};
2
 
const isFavorites = (recipeId) => favorites.some(recipe => recipe._id === recipeId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
