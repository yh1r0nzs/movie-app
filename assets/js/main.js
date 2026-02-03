import { moviePopularity, genres, searchMovies } from "./api.js";
import {
  renderGenres,
  renderMoviesPopular,
  renderSearchResults,
} from "./ui.js";
import { scroll } from "./scroll.js";

const moviesContainer = document.querySelector("#movies");
const inputs = document.querySelectorAll(".genresBtn");
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

let timeout;

input.addEventListener("input", () => {
  clearTimeout(timeout);

  timeout = setTimeout(async () => {
    if (input.value.length < 2) {
      results.innerHTML = "";
      return;
    }

    const movies = await searchMovies(input.value);
    renderSearchResults(movies, results);
  }, 400);
});

async function init() {
  const movies = await moviePopularity();
  renderMoviesPopular(movies, moviesContainer);
}
inputs.forEach((input) => {
  input.addEventListener("change", async () => {
    const movies = await genres(input.value);
    renderMoviesPopular(movies, moviesContainer);
  });
});

init();
setTimeout(() => {
  scroll();
}, 0);
