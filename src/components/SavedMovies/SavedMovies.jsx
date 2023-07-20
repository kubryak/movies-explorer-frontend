import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import '../Movies/Movies.css'
import './SavedMovies.css';
import Header from '../Header/Header';

export default function SavedMovies({ cards }) {
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
        <div className='movies__devider' />
      </section>
    </>
  );
};
