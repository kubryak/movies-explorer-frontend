// export const BASE_URL = 'https://api.qbrk.nomoreparties.sbs';
export const BASE_URL = 'http://localhost:3000';

function checkApi(res) {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((data) => {
      return Promise.reject(`Ошибка: ${data.message}`);
    })
  }
}

export const signUp = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email, password: password, name: name })
  })
    .then(res => checkApi(res))
    .catch(err => { throw err })
}

export const signIn = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email, password: password })
  })
    .then(res => checkApi(res))
    .then((data) => {
      localStorage.setItem('userId', data.jwt)
      return data;
    })
    .catch(err => { throw err })
}

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
  })
    .then(res => checkApi(res))
    .then((data) => {
      localStorage.removeItem('userId');
      return data;
    })
    .catch(err => console.log(err))
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    }
  })
    .then(res => checkApi(res))
    .then(data => data)
    .catch(err => console.log(err))
}
