import './App.css'
import './index.css'
import HomePage from './pages/HomePage'
import { Routes,Route } from 'react-router-dom';
import RecipeDetailPage from './pages/RecipeDetailPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App
