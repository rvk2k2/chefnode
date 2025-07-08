import './App.css'
import './index.css'
import HomePage from './pages/HomePage'
import { Routes,Route } from 'react-router-dom';
import RecipeDetailPage from './pages/RecipeDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import ProtectedRoute from './components/ProtectedRoute';
import SettingsPage from './pages/SettingPage';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/favorites" element={ 
      <ProtectedRoute>
      <FavoritesPage />
      </ProtectedRoute> } />
      <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
     <Route path='/setting' element={
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
     } />
     </Routes>
    </>
  );
}

export default App
