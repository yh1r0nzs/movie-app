import { getPopularMovies, getMoviesByGenre, searchMovies } from "./api/api.js";
import { renderHero } from "./ui/hero.js";
import { renderMovies } from "./ui/movies.js";
import { splitFeaturedMovie } from "./states/moviesState.js";
import { renderSearchResults } from "./ui/search.js";
import { debounce } from "./utils/debounce.js";
import { hideLoading, showLoading } from "./states/loading.js";
import { showErrorMovies } from "./states/error.js";

const heroContainer = document.querySelector("#hero");
const moviesContainer = document.querySelector("#movies");
const genreInputs = document.querySelectorAll(".genresBtn");
const openSearchBtn = document.querySelector(".btn-search");
const modal = document.getElementById("searchModal");
const closeBtn = document.querySelector(".close-search");
const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");
const loader = document.getElementById("page-loader");

openSearchBtn.addEventListener("click", () => {
  modal.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

async function loadHome() {
  showLoading(loader);
  try {
    const movies = await getPopularMovies();

    if (movies.length === 0) {
      showErrorMovies(moviesContainer, "Nenhum filme encontrado.");
      return;
    }
    const { featured, list } = splitFeaturedMovie(movies);
    renderHero(featured, heroContainer);
    renderMovies(list, moviesContainer);
  } catch (erro) {
    console.error("Erro", erro);
    showErrorMovies(moviesContainer, "Erro na API");
  } finally {
    hideLoading(loader);
  }
}

genreInputs.forEach((input) => {
  input.addEventListener("change", async () => {
    showLoading(loader);
    try {
      const movies = await getMoviesByGenre(input.value);

      if (movies.length === 0) {
        showErrorMovies(moviesContainer, "Nenhum filme encontrado.");
        return;
      }

      const { featured, list } = splitFeaturedMovie(movies);
      renderHero(featured, heroContainer);
      renderMovies(list, moviesContainer);
    } catch (erro) {
      showErrorMovies(moviesContainer, "Erro na API, tente novamente.");
    } finally {
      hideLoading(loader);
    }
  });
});
const handleSearchInput = debounce(async (event) => {
  const query = event.target.value.trim();
  if (!query) {
    renderSearchResults([], results);
    return;
  }
  try {
    const movies = await searchMovies(query);
    renderSearchResults(movies, results);

    if (movies.length === 0) {
      showErrorMovies(results, "Nenhum filme encontrado.");
      return;
    }
  } catch {
    showErrorMovies(results, "Erro na API");
  }
}, 900);
input.addEventListener("input", handleSearchInput);

loadHome();
