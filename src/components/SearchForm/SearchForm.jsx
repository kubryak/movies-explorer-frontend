import './SearchForm.css';

export default function SearchForm() {
  return (
    <form className="search__form">
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          name='search-input'
        />
        <button className="button search__button">
          Поиск
        </button>
      </div>
      <div className="search__checkbox-container">
        <input
          className='search__checkbox'
          type='checkbox'
          value='yes'
          id='search__checkbox'
          name='search__checkbox'
        />
        <label className='search__checkbox-label' for='search__checkbox'>Короткометражки</label>
      </div>
    </form>
  );
};
