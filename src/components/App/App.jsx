import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement.jsx';
import * as auth from '../../utils/auth.js';
import { mainApi } from '../../utils/MainApi.js';
import { moviesApi } from '../../utils/MoviesApi.js';

export default function App() {
  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({ email: '', name: '' });
  const [userMovies, setUserMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  const [isError, setError] = useState('');
  const [movieError, setMovieError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('userId');
    if (jwt) setToken(jwt)
    mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  }, [isLoggedIn])

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true)
      Promise.all([mainApi.getMovies(), moviesApi.getAllMovies()])
        .then(([movies, allMovies]) => {
          setUserMovies(movies)
          setAllMovies(allMovies)
          setMovieError(false);
        })
        .catch((err) => {
          console.log(err)
          setMovieError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен')
        })
        .finally(() => setIsLoading(false))
    }
  }, [isLoggedIn])

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        closePopup()
      }
    }
    if (isPopupOpen) {
      document.addEventListener('keydown', close)
    }
    return () => {
      document.removeEventListener('keydown', close)
    }
  }, [isPopupOpen])

  useEffect(() => {
    const jwt = localStorage.getItem('userId');
    if (jwt) {
      auth.checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            navigate('/movies', { replace: true })
          }
        })
        .catch(err => console.log(err))
    }
  }, [token])

  function likeMovie(movieData) {
    mainApi.addMovies(movieData)
      .then((movie) => {
        setUserMovies([movie, ...userMovies])
      })
      .catch((err) => console.log(err))
  };

  function deleteMovie(movieData) {
    mainApi.deleteMovies(movieData._id)
      .then(() => {
        setUserMovies((cards) => cards.filter((c) => c._id !== movieData._id))
      })
      .catch(err => console.log(err))
  }

  function handlePopupClick() {
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  function registerUser({ email, password, name }) {
    auth.signUp(email, password, name)
      .then((res) => {
        auth.signIn(email, password)
          .then((data) => {
            console.log(data)
            localStorage.setItem('userId', data.jwt)
            setToken(data.jwt)
            navigate('/movies', { replace: true });
          })
          .catch(err => {
            console.log(err)
            setError(err)
          });
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
  }

  function loginUser({ email, password }) {
    auth.signIn(email, password)
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('userId', data.jwt)
          setToken(data.jwt)
          setIsLoggedIn(true)
          navigate('/movies', { replace: true });
        }
      })
      .catch(err => {
        console.log(err)
        setError(err)
      });
  }

  function logOutUser() {
    auth.signOut();
    setIsLoggedIn(false);
    localStorage.removeItem('searchResult')
    localStorage.removeItem('lastSearch')
    navigate('/');
  }

  function editUser(name, email) {
    mainApi.setUserInfo(name, email)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email
        });
      })
      .catch(err => {
        console.log(err);
        setError(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {headerPaths.includes(path) && (
          <Header
            isLoggedIn={isLoggedIn}
            isOpen={isPopupOpen}
            onClose={closePopup}
            onPopupClick={handlePopupClick}
          />
        )}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies'
            element={
              <ProtectedRouteElement element={Movies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                allMovies={allMovies}
                movieError={movieError}
                setMovieError={setMovieError}
                likeMovie={likeMovie}
                userMovies={userMovies}
              />}
          />
          <Route path='/saved-movies'
            element={
              <ProtectedRouteElement element={SavedMovies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                cards={userMovies}
                deleteMovie={deleteMovie}
              />}
          />
          <Route path='/profile'
            element={
              <ProtectedRouteElement element={Profile}
                isLoggedIn={isLoggedIn}
                user={currentUser}
                editUser={editUser}
                onLogOut={logOutUser}
                isError={isError}
                setError={setError}
              />}
          />
          <Route path='/signin' element={
            <Login
              onLogin={loginUser}
              isError={isError}
              setError={setError}
            />}
          />
          <Route path='/signup' element={
            <Register
              onRegister={registerUser}

              isError={isError}
              setError={setError}
            />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {footerPaths.includes(path) && (
          <Footer />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
};
