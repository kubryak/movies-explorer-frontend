import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';
import Header from '../Header/Header';

export default function Movies({ cards }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <main className='movies'>
        <SearchForm />
        {
          isLoading ? <Preloader /> : <MoviesCardList cards={cards} />
        }
        <button type='button' className='button movies__load-movies'>Ещё</button>
      </main>
    </>
  );
};
