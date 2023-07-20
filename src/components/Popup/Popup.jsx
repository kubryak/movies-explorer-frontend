import { NavLink, useLocation } from 'react-router-dom';
import AccountIcon from '../../images/nav-auth__acc-image.svg';
import './Popup.css';

export default function Popup({ isOpen, onClose }) {
  const location = useLocation();

  function handleClickClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      onClose();
    }
  }
  return (
    <section className={`popup ${isOpen && ('popup_opened')}`} onMouseDown={handleClickClose}>
      <nav className='popup__nav'>
        <button type='button' className='button popup__close-btn' onClick={onClose} />
        <ul className='popup__list'>
          <li className='popup__list-item'><NavLink className={({ isActive }) => isActive ? 'link popup__link popup__link_type_active' : 'link popup__link'} to="/">Главная</NavLink></li>
          <li className='popup__list-item'><NavLink className={({ isActive }) => isActive ? 'link popup__link popup__link_type_active' : 'link popup__link'} to="/movies">Фильмы</NavLink></li>
          <li className='popup__list-item'><NavLink className={({ isActive }) => isActive ? 'link popup__link popup__link_type_active' : 'link popup__link'} to="/saved-movies">Сохраненные фильмы</NavLink></li>
          <NavLink className='popup__link popup__link_type_acc-btn' to='/profile'>
            Аккаунт
            <img className='popup__acc-image' src={AccountIcon} alt='Иконка аккаунта' />
          </NavLink>
        </ul>
      </nav>
    </section >
  );
};
