import { moviePopularity } from "./api.js";
import { genres } from "./api.js";
import { renderGenres, renderMoviesPopular } from "./ui.js";
import { scroll } from "./scroll.js";
const moviesContainer = document.querySelector("#movies");
const inputs = document.querySelectorAll(".genresBtn");

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
scroll();
