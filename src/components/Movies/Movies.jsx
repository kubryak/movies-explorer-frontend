import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import moviesDB from '../../utils/moviesDB';

export default function Movies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <main className='movies'>
      <SearchForm />
      <section>
        {
          isLoading ?
            <Preloader /> : <MoviesCardList cards={moviesDB} />
        }
        <button type='button' className='button movies__load-movies'>Ещё</button>
      </section>
    </main>
  );
};
