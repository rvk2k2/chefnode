import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
      const [recipes, setRecipes] = useState([]);
      const [loading, setLoading] = useState(true);
      const [filtered, setFiltered] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');

      useEffect(()=>{
        const fetchRecipes = async ()=>{
            try{
              const res = await fetch('http://localhost:5000/api/recipes');
              const data = await res.json();
              setRecipes(data);
              setFiltered(data);
        }catch(err){
          console.error('error fetching recipes on HomePage', err );
        }finally{
          setLoading(false);
        }
        };
      fetchRecipes();
      }, [])

     useEffect(() => {
  console.log('Filtering recipes with searchTerm:', searchTerm);
  console.log('Original recipes:', recipes);

  const filteredData = recipes.filter(
    (recipe) =>
      recipe.foodName &&
      recipe.foodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Filtered recipes:', filteredData);
  setFiltered(filteredData);
}, [searchTerm, recipes]);

      if(loading) return <p className="text-center mt-10" >Loading Recipes....</p>

  return (
     <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-2xl font-semibold mb-6">ALL Recipes</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center mt-10">Loading recipes...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;
