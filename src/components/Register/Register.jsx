import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Logo from '../Logo/Logo';
import './Register.css';

export default function Register({ onRegister, setError, isError }) {

  const location = useLocation();

  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();

  const { email, password, name } = values;

  useEffect(() => {
    if (!email && !password && !name) {
      setIsValid(false)
    }
  }, [email, password, name])

  useEffect(() => {
    setError('')
  }, [location.pathname])

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
    setError('');
  }

  return (
    <main>
      <section className='registration'>
        <div className='registration__logo'>
          <Logo />
        </div>
        <h1 className='registration__title'>Добро пожаловать!</h1>
        <form className='registration__form' onSubmit={handleSubmit}>
          <div className='registration__input-container'>
            <label className='registration__input-label'>Имя</label>
            <input
              type='text'
              className='input registration__input'
              name='name'
              value={name || ''}
              onChange={handleChange}
              required
              minLength='2'
              maxLength='30'
              placeholder='Имя'
            />
            <span className="input-error input-error_active">
              {errors.name}
            </span>
          </div>
          <div className='registration__input-container'>
            <label className='registration__input-label'>E-mail</label>
            <input
              type='email'
              className='input registration__input'
              name='email'
              value={email || ''}
              onChange={handleChange}
              required
              placeholder='E-mail'
            />
            <span className="input-error input-error_active">
              {errors.email}
            </span>
          </div>
          <div className='registration__input-container'>
            <label className='registration__input-label'>Пароль</label>
            <input
              type='password'
              className='input registration__input'
              name='password'
              value={password || ''}
              onChange={handleChange}
              required
              minLength='5'
              maxLength='12'
              placeholder='Пароль'
            />
            <span className="input-error input-error_active">
              {errors.password}
            </span>
            <span className='registration__error'></span>
          </div>
          <div className='registration__buttons'>
            <span className="button-error button-error_active">
              {isError}
            </span>
            <button disabled={!isValid} type='submit' className='button registration__button'>Зарегистрироваться</button>
            <p className='registration__text'>Уже зарегистрированы?
              <Link className='registration__link' to='/signin'> Войти</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};
