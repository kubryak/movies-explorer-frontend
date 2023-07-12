import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login';
import Register from '../Register/Register';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <>
      <Header isLoggedIn={isLoggedIn}></Header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes >
    </>
  );
};

export default App;