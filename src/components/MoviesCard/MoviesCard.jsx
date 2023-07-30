import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { useState } from 'react';

export default function MoviesCard({ card, likeMovie, deleteMovie, userMovies }) {
  const [isLiked, setIsLiked] = useState(false);

  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies') {
      setIsLiked(userMovies.some((savedMovie) => savedMovie.movieId === card.id));
    }
  }, [userMovies, card]);

  const handleButtonClick = () => {
    if (location.pathname === '/movies') {
      likeMovie(card);
      setIsLiked(true)
    } else if (location.pathname === '/saved-movies') {
      deleteMovie(card);
    }
  };

  return (
    <li className='movies-card'>
      <a className='movies-card__link' href={card.trailerLink} target='_blank'>
        <img src={location.pathname === '/saved-movies' ? `${card.image}` : `https://api.nomoreparties.co/${card.image.url}`} alt={`Название фильма ${card.nameRU}`} className='movies-card__image' />
      </a>
      <button type='button'
        className={location.pathname === '/saved-movies' ? 'movies-card__delete' : isLiked ? 'movies-card__like movies-card__like_type_active' : 'button movies-card__like'}
        onClick={handleButtonClick}
        disabled={isLiked}
      />
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{card.nameRU}</h2>
        <p className='movies-card__duration'>{hours}ч {minutes}м</p>
      </div>

    </li>
  )
};
