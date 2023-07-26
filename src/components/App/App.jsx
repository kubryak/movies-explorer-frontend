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
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement.jsx';
import * as auth from '../../utils/auth.js';
import { mainApi } from '../../utils/MainApi.js';

export default function App() {
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);

  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [isRegister, setRegister] = useState(false);

  const [currentUser, setCurrentUser] = useState({ email: '', name: '' });

  const [isError, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('userId');
    if (jwt)
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email
          });
        })
        .catch(err => console.log(err));
  }, [isLoggedIn])



  const [isPopupOpen, setPopupOpen] = useState(false);

  function handlePopupClick() {
    setPopupOpen(true);
  }

  function handleInfoTooltipClick() {
    setInfoTooltipPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
    setInfoTooltipPopupOpen(false);
  }

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
    navigate('/');
  }

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

  function editUser(name, email) {
    mainApi.setUserInfo(name, email)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email
        });
      })
      .catch(err => {
        console.log(err)
        setError(err)
      });
  }

  // useEffect(() => {
  //   const handleTokenCheck = () => {
  //     const jwt = localStorage.getItem('userId');
  //     if (jwt) {
  //       auth.checkToken(jwt)
  //         .then((data) => {
  //           if (data) {
  //             setIsLoggedIn(true);
  //             navigate('/', { replace: true })
  //           }
  //         })
  //         .catch(err => console.log(err))
  //     }
  //   }
  //   handleTokenCheck();
  // }, [token])



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
              />}
          />
          <Route path='/saved-movies'
            element={
              <ProtectedRouteElement element={SavedMovies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
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
              onInfoTooltip={handleInfoTooltipClick}
              isError={isError}
              setError={setError}
            />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {footerPaths.includes(path) && (
          <Footer />
        )}
        <InfoTooltip
          name={'info-tooltip'}
          isOpen={isInfoTooltipPopupOpen}
          onClose={closePopup}
          isRegister={isRegister}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};
