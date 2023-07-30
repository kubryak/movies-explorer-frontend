export function searchMovies(
  movies,
  search,
  valueCheckbox,
  setSerchResult,
  setNotFound) {
  const foundedMovies = movies.filter((movie) =>
    Object.values(movie).some((value) =>
      typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
    )
  )
  setSerchResult(foundedMovies);
  setNotFound(false);
  if (valueCheckbox) {
    const shortFilm = foundedMovies.filter((movie) => movie.duration <= 40);
    if (shortFilm.length === 0) {
      setNotFound(true)
    }
    setSerchResult(foundedMovies);
    setNotFound(false)
  }
  if (foundedMovies.length === 0) {
    setNotFound(true);
  }
}
