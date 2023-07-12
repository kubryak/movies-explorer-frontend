export default function SearchForm() {
  return (
    <form className="search">
      <div className="search__container">
        <label className="search__label">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            name='search-input'
          />
        </label>
        <button className="search__button">
          Поиск
        </button>
      </div>
    </form>

  )
}