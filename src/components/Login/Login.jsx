import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo';
import './Login.css';

export default function Login() {
  return (
    <section className='authorization'>
      <div className='authorization__logo'>
        <Logo />
      </div>
      <h2 className='authorizatin__title'>Рады видеть!</h2>
      <form className='authorization__form'>
        <div className='authorization__input-container'>
          <label className='authorization__input-label'>E-mail</label>
          <input type='email' className='authorization__input' value='pochta@yandex.ru' />
        </div>
        <div className='authorization__input-container'>
          <label className='authorization__input-label'>Пароль</label>
          <input type='password' className='authorization__input' value='' />
          <span className='authorization__error'></span>
        </div>
        <div className='authorization__buttons'>
          <button className='button authorization__button'>Войти</button>
          <p className='authorization__text'>Еще не зарегистрированы?
            <Link className='link authorization__link' to='/signup'> Зарегистрироваться</Link>
          </p>
        </div>
      </form>
    </section>
  );
};
