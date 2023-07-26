class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkApi(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getAllMovies() {
    return fetch(this._baseUrl + '/beatfilm-movies', {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => this._checkApi(res))
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
});
