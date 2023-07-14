import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

export default function SavedMovies({ cards }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <section className='saved-movies'>
      <SearchForm />
        {
          isLoading ? <Preloader /> : <MoviesCardList cards={cards} />
        }
        <div className="saved-movies__devider" />
      </section>
      <Footer />
    </>
  );
};
