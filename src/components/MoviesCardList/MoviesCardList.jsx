import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({movies}) {
  return (
    <section>
      <ul className='movies__list'>
        {movies.map((card, index) => (
          <MoviesCard
            key={index}
            card={card} />
        ))}
      </ul>
    </section>
  );
};
