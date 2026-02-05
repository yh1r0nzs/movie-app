import { getMovieDetails } from "../assets/js/api/api.js";
const params = new URLSearchParams(window.location.search);
const movieId = Number(params.get("id"));

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const htmlTitle = document.querySelector("title");
const poster = document.getElementById("movie-poster");
const title = document.getElementById("movie-title");
const overview = document.getElementById("movie-overview");
const rating = document.getElementById("movie-rating");
const runtime = document.getElementById("movie-runtime");
const year = document.getElementById("movie-year");
const genresContainer = document.getElementById("movie-genres");
const hero = document.querySelector(".movie-hero");

async function loadMovie() {
  if (!movieId) return;

  try {
    const movie = await getMovieDetails(movieId);

    hero.style.backgroundImage = `url(${IMAGE_BASE_URL}${movie.backdrop_path})`;
    poster.src = `${IMAGE_BASE_URL}${movie.poster_path}`;

    title.textContent = movie.title;
    overview.textContent = movie.overview;
    rating.textContent = `⭐ ${movie.vote_average.toFixed(1)}`;
    runtime.textContent = `⏱ ${movie.runtime} min`;
    year.textContent = `📅 ${movie.release_date.split("-")[0]}`;

    genresContainer.innerHTML = "";
    movie.genres.forEach((g) => {
      const span = document.createElement("span");
      span.textContent = g.name;
      genresContainer.appendChild(span);
    });
  } catch (error) {
    console.error("Erro ao carregar filme", error);
  }
}
const backBtn = document.querySelector(".btn-back");

backBtn.addEventListener("click", () => {
  window.history.back();
});

loadMovie();
