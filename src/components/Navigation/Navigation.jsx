import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ isLoggedIn }) {
  return (
    <nav className="nav-auth">
      <ul className="nav-auth__list">
        {!isLoggedIn ? (
          <>
            <li className="nav-auth__list-item">
              <Link className='nav-auth__link' to='/signup'>
                Регистрация
              </Link>
            </li>
            <li className="nav-auth__list-item">
              <Link className='nav-auth__link nav-auth__link_active' to='/signin'>
                Войти
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-auth__list-item">
              <NavLink className='nav-auth__link' to='/movies'>
                Фильмы
              </NavLink>
            </li>
            <li className="nav-auth__list-item">
              <NavLink className='nav-auth__link' to='/saved-movies'>
                Сохраненные фильмы
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
