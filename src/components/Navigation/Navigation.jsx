import { Link, NavLink } from 'react-router-dom';
import AccountIcon from '../../images/nav-auth__acc-image.svg';
import './Navigation.css';

export default function Navigation({ isLoggedIn }) {
  return (
    <>
      {!isLoggedIn ? (
        <nav className='nav-auth'>
          <ul className='nav-auth__list'>
            <li className='nav-auth__list-item'>
              <Link className='link nav-auth__link' to='/signup'>
                Регистрация
              </Link>
            </li>
            <li className='button nav-auth__list-item'>
              <Link className='nav-auth__link nav-auth__link_active' to='/signin'>
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className='nav-auth nav-auth_type_login'>
          <ul className='nav-auth__list nav-auth__list_type_login'>
            <div className='nav-auth__films'>
              <li className='nav-auth__list-item'>
                <NavLink className='nav-auth__link' to='/movies'>
                  Фильмы
                </NavLink>
              </li>
              <li className='nav-auth__list-item'>
                <NavLink className='nav-auth__link' to='/saved-movies'>
                  Сохраненные фильмы
                </NavLink>
              </li>
            </div>
            <li className='nav-auth__list-item'>
              <NavLink className='nav-auth__link nav-auth__link_type_acc-btn' to='/profile'>
                Аккаунт
                <img className='nav-auth__acc-image' src={AccountIcon} />
              </NavLink>

            </li>
          </ul>
        </nav>
      )}

    </>
  );
};
