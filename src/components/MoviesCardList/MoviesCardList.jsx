import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ cards }) {
  return (
    <div className="movies__list">
      {cards.map((card, index) => (
        <MoviesCard key={index} />
      ))}
    </div>
  );
};
