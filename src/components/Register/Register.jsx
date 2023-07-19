import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Logo from '../Logo/Logo';
import './Register.css';

export default function Register() {

  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();

  const { email, password, name } = values;

  useEffect(() => {
    if (!email && !password && !name) {
      setIsValid(false)
    }
  }, [email, password, name])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='registration'>
      <div className='registration__logo'>
        <Logo />
      </div>
      <h2 className='authorization__title'>Добро пожаловать!</h2>
      <form className='registration__form'>
        <div className='registration__input-container'>
          <label className='registration__input-label'>Имя</label>
          <input
            type='text'
            className='registration__input'
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
            className='registration__input'
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
            className='registration__input'
            name='password'
            value={password || ''}
            onChange={handleChange}
            required
            minLength='5'
            placeholder='Пароль'
          />
          <span className="input-error input-error_active">
            {errors.password}
          </span>
          <span className='registration__error'></span>
        </div>
        <div className='registration__buttons'>
          <button type='submit' className='button registration__button'>Зарегистрироваться</button>
          <p className='registration__text'>Уже зарегистрированы?
            <Link className='link registration__link' to='/signin'> Войти</Link>
          </p>
        </div>
      </form>
    </section>
  );
};
