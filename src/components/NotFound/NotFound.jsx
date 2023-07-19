import { Link } from 'react-router-dom'
import './NotFound.css';

export default function NotFound() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className='link not-found__button' onClick={goBack}>Назад</Link>
    </div>
  );
};
