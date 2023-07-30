import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export default function MoviesCard({ card }) {
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;

  const location = useLocation();

  return (
    <li className='movies-card'>
      <a className='movies-card__link' href={card.trailerLink} target='_blank'>
        <img src={`https://api.nomoreparties.co/${card.image.url}`} alt={`Название фильма ${card.nameRU}`} className='movies-card__image' />
      </a>
      <button type='button' className={location.pathname === '/saved-movies' ? 'movies-card__delete' : 'button movies-card__like'} />
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{card.nameRU}</h2>
        <p className='movies-card__duration'>{hours}ч {minutes}м</p>
      </div>

    </li>
  )
};
