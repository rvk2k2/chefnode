import React from 'react';
import { createContext, useContext, useState } from 'react';

const FavoritesContext=createContext();

export const FavoritesProvider = ({children}) =>{

   const [favorites, setFavorites] = useState([]);

   const addToFav = (recipe) =>{
          setFavorites((prev) => [...prev,recipe])
   }

   const removeFav = (recipeId) =>{
    setFavorites( (prev)=> prev.filter( rec => rec._id !== recipeId ));
   }

   const isFav =(recipeId)=>{
    return favorites.some((rec)=> rec._id === recipeId)


   }

   return(
     <FavoritesContext.Provider
     value={{favorites, addToFav, removeFav, isFav}}
     >
{children}
     </FavoritesContext.Provider>
   )

}

export const useFavorites = () => useContext(FavoritesContext);
