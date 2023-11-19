import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile({ editUser, onLogOut, isError, setError }) {
  const location = useLocation();

  const currentUser = useContext(CurrentUserContext);

  const [isEditing, setIsEditing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { values, handleChange, errors, isValid, setIsValid, setValues } = useFormAndValidation();

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, []);

  useEffect(() => {
    if (!errors.name && !errors.email) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors, setIsValid]);

  useEffect(() => {
    if (isSuccess) {
      setError('');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setIsSuccess(false);
    }
  }, [isError]);

  useEffect(() => {
    setError('');
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(values.name, values.email);
    setIsValid(false)
    setIsSuccess(true); // Устанавливаем флаг успеха после успешного сохранения
    setIsEditing(false);
  };

  return (
    <main>
      <section className='profile'>
        <h1 className='profile__title'>Привет, {currentUser.name}</h1>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
          <div className='profile__input-container'>
            <label className='profile__input-label'>Имя</label>
            <input
              type='text'
              className='profile__input'
              name='name'
              value={values.name || ''}
              onChange={handleChange}
              required
              minLength='2'
              maxLength='30'
              placeholder='Имя'
              disabled={!isEditing}
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
              value={values.email}
              onChange={handleChange}
              required
              placeholder='E-mail'
              disabled={!isEditing}
            />
          </div>
          <span className="input-error input-error_active">
            {errors.email}
          </span>
          <div className='profile__buttons'>
            {isError && ( // Проверяем isError для отображения ошибки
              <span className="button-error button-error_active">
                {isError}
              </span>
            )}
            {isSuccess && !isError && ( // Проверяем isSuccess и отсутствие isError для отображения сообщения об успешном сохранении
              <span className="button-succsess button-succsess_type_active">
                Данные профиля успешно изменены!
              </span>
            )}
            {isEditing ? (
              <button
                type='submit'
                className={!isValid || (values.name === currentUser.name && values.email === currentUser.email) ? 'profile__button profile__button_type_disabled' : 'button profile__button profile__button_type_save'}
                disabled={!isValid || (values.name === currentUser.name && values.email === currentUser.email)}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  type='button'
                  className='link profile__button profile__button_type_edit'
                  onClick={() => setIsEditing(true)}
                >
                  Редактировать
                </button>
                <button className='profile__button profile__button_type_exit' onClick={onLogOut} to='/'>
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </main >
  );
};
