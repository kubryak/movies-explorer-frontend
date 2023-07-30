import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import { useState, useEffect } from 'react';
import { MEDIUM_SCREEN, LARGE_SCREEN, } from '../../utils/screenConstants';

export default function Movies({ isLoading, allMovies, movieError, setMovieError }) {
  const [searchResult, setSearchResult] = useState([]);
  const [valueCheckbox, setValueCheckbox] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState(12);
  const [notFound, setNotFound] = useState('');
  const [previousSearch, setPreviousSearch] = useState([]);

  const isAllMoviesShown = moviesToShow >= searchResult.length;

  useEffect(() => {
    if (searchResult.length > 0) {
      filterMovies();
    } else {
      setSearchResult(previousSearch);
      setNotFound('');
    }
  }, [valueCheckbox]);

  useEffect(() => {
    const savedResult = localStorage.getItem('searchResult');
    if (savedResult) {
      setSearchResult(JSON.parse(savedResult))
    }
    const savedValueCheckbox = localStorage.getItem('valueCheckbox')
    if (savedValueCheckbox) {
      setValueCheckbox(JSON.parse(savedValueCheckbox))
    }

    function handleResize() {
      const screenWidth = window.innerWidth;
      updateMoviesToShow(screenWidth)
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function filterMovies() {
    if (valueCheckbox) {
      setPreviousSearch(searchResult)
      const shortFilm = searchResult.filter((movie) => movie.duration <= 40);
      setSearchResult(shortFilm);
      setNotFound(shortFilm.length === 0 ? 'Ничего не найдено' : '')
    } else {
      setSearchResult(previousSearch);
    }
    localStorage.setItem('valueCheckbox', JSON.stringify(valueCheckbox));
  }

  function updateMoviesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= LARGE_SCREEN) {
      setMoviesToShow(12);
    } else if (screenWidth >= MEDIUM_SCREEN) {
      setMoviesToShow(8);
    } else {
      setMoviesToShow(5);
    }
  }

  function handleLoadMoreClick() {
    if (window.innerWidth >= LARGE_SCREEN) {
      setMoviesToShow((prevCount) => prevCount + 3);
    } else if (window.innerWidth >= MEDIUM_SCREEN) {
      setMoviesToShow((prevCount) => prevCount + 2);
    } else {
      setMoviesToShow((prevCount) => prevCount + 1);
    }
  }

  function searchMovies(query) {
    const result = allMovies.filter(
      (movie) =>
        typeof movie.nameRU === 'string' &&
        movie.nameRU.toLowerCase().includes(query.film.toLowerCase())
    );
    if (result.length === 0) {
      setSearchResult([]);
      setNotFound('Ничего не найдено')
      setMovieError('')
      localStorage.removeItem('searchResult');
    } else {
      if (valueCheckbox) {
        const shortFilm = result.filter((movie) => movie.duration <= 40);
        setSearchResult(shortFilm);
      } else {
        setSearchResult(result);
      }
      const screenWidth = window.innerWidth;
      updateMoviesToShow(screenWidth)
      setNotFound('')
      localStorage.setItem('searchResult', JSON.stringify(result));
    }
  }

  return (
    <main className='movies'>
      <SearchForm
        allMovies={allMovies}
        setValueCheckbox={setValueCheckbox}
        searchMovies={searchMovies}
        valueCheckbox={valueCheckbox}
      />
      <section>
        {isLoading ? <Preloader /> : <MoviesCardList movies={searchResult.slice(0, moviesToShow)} />}
        <p className='button-error button-error_active'>{movieError ? movieError : ''}</p>
        <p className='button-error button-error_active'>{notFound ? notFound : ''}</p>
        {!isAllMoviesShown && (
          <button
            type='button'
            className='button movies__load-movies'
            onClick={handleLoadMoreClick}>
            Ещё
          </button>
        )}
      </section>
    </main>
  );
}
