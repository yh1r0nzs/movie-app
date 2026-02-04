import { getPopularMovies, getMoviesByGenre, searchMovies } from "./api/api.js";

import { renderHero } from "./ui/hero.js";
import { renderMovies } from "./ui/movies.js";
import { splitFeaturedMovie } from "./states/moviesState.js";
import { renderSearchResults } from "./ui/search.js";

const heroContainer = document.querySelector("#hero");
const moviesContainer = document.querySelector("#movies");
const genreInputs = document.querySelectorAll(".genresBtn");
const openSearchBtn = document.querySelector(".btn-search");
const modal = document.getElementById("searchModal");
const closeBtn = document.querySelector(".close-search");
const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

openSearchBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

async function loadHome() {
  const movies = await getPopularMovies();
  const { featured, list } = splitFeaturedMovie(movies);

  renderHero(featured, heroContainer);
  renderMovies(list, moviesContainer);
}

genreInputs.forEach((input) => {
  input.addEventListener("change", async () => {
    const movies = await getMoviesByGenre(input.value);
    const { featured, list } = splitFeaturedMovie(movies);

    renderHero(featured, heroContainer);
    renderMovies(list, moviesContainer);
  });
});
input.addEventListener("input", async () =>
  renderSearchResults(await searchMovies(input.value), results),
);
//renderSearchResults(search(input.value), results); CORRIGIR
loadHome();
