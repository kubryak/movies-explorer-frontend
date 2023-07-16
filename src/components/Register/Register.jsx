import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo';
import './Register.css';

export default function Register() {
  return (
    <section className='registration'>
      <div className='registration__logo'>
        <Logo />
      </div>
      <h2 className='authorizatin__title'>Добро пожаловать!</h2>
      <form className='registration__form'>
        <div className='registration__input-container'>
          <label className='registration__input-label'>Имя</label>
          <input type='text' className='registration__input' value='Виталий' />
        </div>
        <div className='registration__input-container'>
          <label className='registration__input-label'>E-mail</label>
          <input type='email' className='registration__input' value='pochta@yandex.ru' />
        </div>
        <div className='registration__input-container'>
          <label className='registration__input-label'>Пароль</label>
          <input type='password' className='registration__input' value='11111111' />
          <span className='registration__error'></span>
        </div>
        <div className='registration__buttons'>
          <button className='button registration__button'>Зарегистрироваться</button>
          <p className='registration__text'>Уже зарегистрированы?
            <Link className='link registration__link' to='/signin'> Войти</Link>
          </p>
        </div>
      </form>
    </section>
  );
};
