const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGJkZGU5ZmI1NTM1ODc4ZTRmNTI2Yzc1NjUyYzgwZCIsIm5iZiI6MTc2OTkxNzAxNy43NjcsInN1YiI6IjY5N2VjYTU5NjljMGMzNDJmYjZmNzEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1w67b0TAg23ar71kyeJ2xGT10pZe-Ud0S7iZEgfKqVs";
const url = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

const api = async () => {
  try {
    const response = await fetch(`${url}/authentication/token/new`, options);
    const data = await response.json();
    console.log(data);
  } catch {
    console.error(Error, response.status);
  }
};
api();

export const moviePopularity = async () => {
  try {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
      options,
    );
    const data = await resp.json();
    return data.results;
  } catch {
    console.error("Error", error);
  }
};

export const genres = async (genreId) => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
      options,
    );
    const data = await resp.json();
    return data.results;
  } catch {
    console.error("Error", error);
  }
};
