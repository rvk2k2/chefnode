import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { token, isLoggedIn } = useAuth();

  useEffect(()=>{
    const fetchFavorites = async ()=>{
       
      try{

        const res = await fetch("http://localhost:5000/api/favorites",{
          headers:{
            Authorization: `Bearer ${token}`,
          }
        });
        const data = await res.json();
        if(res.ok) setFavorites(data);

      }catch(err){
        console.log("failed to load favorites: ");
        console.log("error message: ",err);
      }
      
    };

    if(isLoggedIn) fetchFavorites();
    else setFavorites([]);
  
  },[isLoggedIn, token])


  const addToFavorites = async (recipeId) =>{
    try{
      const res = await fetch('http://localhost:5000/api/favorites/add', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          Authorization : `Bearer ${token}`,
        },
        body: JSON.stringify({ recipeId })
      });
      const data = await res.json();
      if(res.ok) setFavorites(data);
            
    }catch(err){
      console.log(" error in adding a recipe to favorites");
      console.log("Error message:",err);
    }
  };


const removeFromFavorites = async (recipeId) =>{
  try{
       const res = await fetch('http://localhost:5000/api/favorites/remove',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ recipeId })
       })     
      const data = await res.json();
      if(res.ok) setFavorites(data);

      }
  catch(err){
    console.log(" failed to remove recipe from favorites ")
    console.log(" error message ", err);
  }
}
 
    const isFavorites = (recipeId) => favorites.includes(recipeId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
