import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <form className='search__form'>
      <div className='search__container'>
        <input
          className='search__input'
          type='text'
          placeholder='Фильм'
          name='search-input'
        />
        <button className='button search__button'>
          Поиск
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
};
