import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import '../Movies/Movies.css'
import './SavedMovies.css';

export default function SavedMovies({ isLoading, cards, deleteMovie }) {
  const [valueCheckbox, setValueCheckbox] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [notFound, setNotFound] = useState('');
  const [lastSearch, setLastSearch] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function filterMovies() {
    if (valueCheckbox) {
      if (lastSearch.length === 0) {
        const shortFilm = cards.filter((movie) => movie.duration <= 40);
        setSearchResult(shortFilm);
        setNotFound(shortFilm.length === 0 ? 'Ничего не найдено' : '')
      } else {
        const shortFilm = lastSearch.filter((movie) => movie.duration <= 40);
        setSearchResult(shortFilm);
        setNotFound(shortFilm.length === 0 ? 'Ничего не найдено' : '')
      }
    } else {
      setSearchResult(cards)
    }
  }

  useEffect(() => {
    if (valueCheckbox) {
      filterMovies();
    } else {
      if (lastSearch.length === 0) {
        setSearchResult(cards);
      } else {
        setSearchResult(lastSearch);
      }
      setNotFound('');
    }
  }, [valueCheckbox, lastSearch]);

  useEffect(() => {
    searchMovies(inputValue)
  }, [deleteMovie])

  function searchMovies(query) {
    try {
      const result = cards.filter(
        (movie) =>
          typeof movie.nameRU === 'string' &&
          movie.nameRU.toLowerCase().includes(query.film.toLowerCase())
      );

      if (result.length === 0) {
        setSearchResult([]);
        setNotFound('Ничего не найдено');
      } else {
        if (valueCheckbox) {
          const shortFilm = result.filter((movie) => movie.duration <= 40);
          setSearchResult(shortFilm);
        } else {
          setSearchResult(result);
        }
        setNotFound('');
        setLastSearch(result);
        setInputValue(query);
      }
    } catch (error) {
      setSearchResult(cards);
    }
  }

  return (
    <main className='movies'>
      <SearchForm
        valueCheckbox={valueCheckbox}
        setValueCheckbox={setValueCheckbox}
        searchMovies={searchMovies}
      />
      <section>
        {
          isLoading ?
            <Preloader /> :
            <MoviesCardList
              movies={searchResult}
              deleteMovie={deleteMovie}
            />
        }
        <p className='button-error button-error_active'>{notFound ? notFound : ''}</p>
        <div className='saved-movies__devider' />
      </section>
    </main>
  );
};
