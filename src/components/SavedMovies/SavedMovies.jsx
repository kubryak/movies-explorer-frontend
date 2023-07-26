import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import '../Movies/Movies.css'
import './SavedMovies.css';
import moviesDB from '../../utils/moviesDB';

export default function SavedMovies({ isLoading }) {
  return (
    <main className='movies'>
      <SearchForm />
      <section>
        {
          isLoading ? <Preloader /> : <MoviesCardList cards={moviesDB} />
        }
        <div className='saved-movies__devider' />
      </section>
    </main>
  );
};
