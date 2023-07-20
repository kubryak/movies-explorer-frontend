import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

export default function App() {
  const CARDS = 8;
  const CARDS_LIKE = 3;

  const cards = Array(CARDS).fill(null);
  const likeCards = Array(CARDS_LIKE).fill(null);

  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  return (
    <div className='page'>
      {headerPaths.includes(path) && (
        <Header />
      )}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies'
          element={
            <Movies
              cards={cards}
            />}
        />
        <Route path='/saved-movies'
          element={
            <SavedMovies
              cards={likeCards}
            />}
        />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {footerPaths.includes(path) && (
        <Footer />
      )}
    </div>
  );
};
