import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import moviesDB from '../../utils/moviesDB';

export default function Movies({ isLoading }) {
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
