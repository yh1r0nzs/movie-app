const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGJkZGU5ZmI1NTM1ODc4ZTRmNTI2Yzc1NjUyYzgwZCIsIm5iZiI6MTc2OTkxNzAxNy43NjcsInN1YiI6IjY5N2VjYTU5NjljMGMzNDJmYjZmNzEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1w67b0TAg23ar71kyeJ2xGT10pZe-Ud0S7iZEgfKqVs";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

async function request(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}&language=pt-BR`, options);
  const data = await res.json();
  return data.results;
}

export const getPopularMovies = () => request("/movie/popular?");

export const getMoviesByGenre = (genreId) =>
  request(`/discover/movie?with_genres=${genreId}`);

export const searchMovies = (query) => request(`/search/movie?query=${query}`);
