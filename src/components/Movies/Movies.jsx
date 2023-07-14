import { useState, useEffect } from 'react';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

export default function Movies({ cards }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <section className='movies'>
      <SearchForm />
        {
          isLoading ? <Preloader /> : <MoviesCardList cards={cards} />
        }
        <button className='button movies__load-movies'>Ещё</button>
      </section>
      <Footer />
    </>
  );
};
