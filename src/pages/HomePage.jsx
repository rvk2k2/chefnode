import React from "react";
import RecipeCard from "../components/RecipeCard";

 const mockRecipes = [
    {
      _id: "1",
      name: "Spaghetti Carbonara",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1603133872878-c6d1fa0fa1f4?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
    },
    {
      _id: "2",
      name: "Chicken Biryani",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1608757017619-5023b5c8f2a2?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
    },
    {
      _id: "3",
      name: "Avocado Toast",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80",
      rating: 4.2,
    },
    {
      _id: "4",
      name: "Pancakes with Berries",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
  ];

const HomePage = () => {
 

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-2xl font-semibold mb-6"> ALL Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
