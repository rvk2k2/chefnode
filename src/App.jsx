import './App.css'
import './index.css'
import HomePage from './pages/HomePage'
import { Routes,Route } from 'react-router-dom';
import RecipeDetailPage from './pages/RecipeDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/recipes/:id" element={<RecipeDetailPage />} />
    </Routes>
    </>
  );
}

export default App
