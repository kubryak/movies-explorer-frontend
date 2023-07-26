import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Profile.css';

export default function Profile({ user, editUser, onLogOut, isError, setError }) {

  const location = useLocation();

  const { values, handleChange, errors, isValid, setIsValid, setValues } = useFormAndValidation();

  useEffect(() => {
    setValues({ name: user.name, email: user.email })
  }, [])

  const { name, email } = values;

  useEffect(() => {
    if (!email && !name) {
      setIsValid(false)
    }
  }, [email, name])

  useEffect(() => {
    setError('')
  }, [location.pathname])

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(values.name, values.email)
    setIsValid(false)
    setError('');
  }

  return (
    <main>
      <section className='profile'>
        <h1 className='profile__title'>Привет, {user.name}</h1>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
          <div className='profile__input-container'>
            <label className='profile__input-label'>Имя</label>
            <input
              type='text'
              className='profile__input'
              name='name'
              value={name || ''}
              onChange={handleChange}
              required
              minLength='2'
              maxLength='30'
              placeholder='Имя'
            />
          </div>
          <span className="input-error input-error_active">
            {errors.name}
          </span>
          <div className='profile__input-container'>
            <label className='profile__input-label'>E-mail</label>
            <input
              type='email'
              className='profile__input'
              name='email'
              value={values.email || ''}
              onChange={handleChange}
              required
              placeholder='E-mail'
            />
          </div>
          <div className='profile__buttons'>
            <span className="button-error button-error_active">
              {isError}
            </span>
            <button type='submit' className={!isValid ? 'profile__button_type_disabled' : 'link profile__button profile__button_type_edit'} disabled={!isValid}>Редактировать</button>
            <button className='profile__button profile__button_type_exit' onClick={onLogOut} to='/'>
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
