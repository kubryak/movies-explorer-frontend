import Movie from '../../images/movies-card__image.png';
import './MoviesCard.css';

export default function MoviesCard() {
  return (
    <div className="movies-card">
      <img src={Movie} alt="Обложка фильма" className="movies-card__image" />
      <button className="button movies-card__like movies-card__like" />
      <div className="movies-card__info">
        <h2 className="movies-card__title">33 слова о дизайне</h2>
        <p className='movies-card__duration'>1ч 17м</p>
      </div>
    </div>
  )
};
