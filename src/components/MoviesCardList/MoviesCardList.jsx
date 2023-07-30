import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ movies, likeMovie, deleteMovie, userMovies }) {
  return (
    <section>
      <ul className='movies__list'>
        {movies.map((card, index) => (
          <MoviesCard
            key={index}
            card={card}
            likeMovie={likeMovie}
            deleteMovie={deleteMovie}
            userMovies={userMovies}
          />
        ))}
      </ul>
    </section>
  );
};
