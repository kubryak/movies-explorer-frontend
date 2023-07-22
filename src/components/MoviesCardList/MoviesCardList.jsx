import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({cards}) {
  return (
    <section>
      <ul className='movies__list'>
        {cards.map((card) => (
          <MoviesCard
            key={card.id}
            card={card} />
        ))}
      </ul>
    </section>
  );
};
