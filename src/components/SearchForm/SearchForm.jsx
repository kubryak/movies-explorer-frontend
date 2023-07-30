import { useEffect, useState } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm({ valueCheckbox, setValueCheckbox, searchMovies }) {

  const [savedSearch, setSavedSearch] = useState('');

  const { values, handleChange, errors, isValid, setIsValid, setValues } = useFormAndValidation();

  const { film } = values;

  useEffect(() => {
    const savedSearch = localStorage.getItem('lastSearch');
    if (savedSearch) {
      setSavedSearch(JSON.parse(savedSearch))
    }
  }, []);

  useEffect(() => {
    if (!film) {
      setIsValid(false)
    }
  }, [film])

  function handleCheckboxChange(evt) {
    setValueCheckbox(evt.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(values)
    localStorage.setItem('lastSearch', JSON.stringify(values.film));
    setIsValid(false)
  }

  return (
    <section>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__container'>
          <input
            type='text'
            className='search__input'
            name='film'
            defaultValue={savedSearch}
            onChange={handleChange}
            required
            placeholder='Введите ключевое слово'
          />
          <button type='submit' className={!isValid ? 'search__button_type_disabled' : 'button search__button'} disabled={!isValid}>
            Поиск
          </button>
        </div>
        <span className={isValid ? 'input-error' : 'input-error input-error_active'}>
          {errors.film}
        </span>
        <FilterCheckbox
          value={valueCheckbox}
          onChange={handleCheckboxChange}
        />
      </form>
    </section>
  );
};
