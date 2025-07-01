import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
      const [recipes, setRecipes] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(()=>{
        const fetchRecipes = async ()=>{
            try{
              const res = await fetch('http://localhost:5000/api/recipes');
              const data = await res.json();
              setRecipes(data);
        }catch(err){
          console.error('error fetching recipes on HomePage', err );
        }finally{
          setLoading(false);
        }
        };
      fetchRecipes();
      }, [])

      if(loading) return <p className="text-center mt-10" >Loading Recipes....</p>

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-2xl font-semibold mb-6"> ALL Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
