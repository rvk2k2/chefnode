import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
     const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        RecipeVault 🍽️
      </Link>

      <div className="space-x-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Favorites
        </Link>
        {isLoggedIn ? (
  <>
    <span className="text-sm text-gray-700">Hi, {user.userName}</span>
    <button
      onClick={logout}
      className="text-red-500 font-medium hover:underline ml-4"
    >
      Logout
    </button>
  </>
) : (
  <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition">
    Login
  </Link>
)}
      </div>
    </nav>
  );
};

export default Navbar;
