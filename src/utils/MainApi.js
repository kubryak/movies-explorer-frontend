class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkApi(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        return Promise.reject(`${data.message}`);
      })
    }
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then((res) => this._checkApi(res))
  }

  setUserInfo(name, email) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then((res) => this._checkApi(res))
  }

  getMovies() {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then((res) => this._checkApi())
  }

  addMovies(item) {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: item.country ? item.country : 'Не указана страна фильма',
        director: item.director ? item.director : 'Не указан режиссер фильма',
        duration: item.duration ? item.duration : 'Не указана длительность фильма',
        year: item.year ? item.year : 'Не указан год выпуска фильма',
        description: item.description ? item.description : 'Не указано описание фильма',
        image: `https://api.nomoreparties.co${item.image.url}`,
        trailerLink: item.trailerLink ? item.trailerLink : 'Не указана ссылка на трейлер фильма',
        thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
        owner: item.owner,
        movieId: item.id,
        nameRu: item.nameRu ? item.nameRu : 'Не указано название фильма на русском языке',
        nameEn: item.nameEn ? item.nameEn : 'Не указано название фильма на английском языке',
      })
    })
      .then((res) => this._checkApi())
  }

  deleteMovies(movieId) {
    return fetch(this._baseUrl + '/movies/' + movieId, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
      .then((res) => this._checkApi(res))
  }
}

export const mainApi = new MainApi({
  // baseUrl: 'https://api.qbrk.nomoreparties.sbs',
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});
