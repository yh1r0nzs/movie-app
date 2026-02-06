import { getMovieDetails } from "../assets/js/api/api.js";
import { showLoading, hideLoading } from "../assets/js/states/loading.js";

const params = new URLSearchParams(window.location.search);
const movieId = Number(params.get("id"));
const loader = document.querySelector("#page-loader");
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const poster = document.getElementById("movie-poster");
const title = document.getElementById("movie-title");
const overview = document.getElementById("movie-overview");
const rating = document.getElementById("movie-rating");
const runtime = document.getElementById("movie-runtime");
const year = document.getElementById("movie-year");
const genresContainer = document.getElementById("movie-genres");
const hero = document.querySelector(".movie-hero");

function setMetaDescription(content) {
  let meta = document.querySelector('meta[name="description"]');

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function setOG(tag, content) {
  let meta = document.querySelector(`meta[property="${tag}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", tag);
    document.head.appendChild(meta);
  }
  meta.content = content;
}
function setTwitterCard(name, content) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}
function setStructuredData(movie) {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: movie.title,
    image: IMAGE_BASE_URL + movie.poster_path,
    description: movie.overview,
    datePublished: movie.release_date,
    genre: movie.genres.map((g) => g.name),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: movie.vote_average.toFixed(1),
      ratingCount: movie.vote_count,
    },
  };

  script.textContent = JSON.stringify(data);
}

async function loadMovie() {
  if (!movieId) return;
  showLoading(loader);
  try {
    const movie = await getMovieDetails(movieId);

    hero.style.backgroundImage = `url(${IMAGE_BASE_URL}${movie.backdrop_path})`;
    hero.setAttribute("aria-label", `Imagem de fundo do filme ${movie.title}`);

    poster.src = `${IMAGE_BASE_URL}${movie.poster_path}`;
    poster.alt = `Poster do filme ${movie.title}`;

    document.title = `${movie.title} | MovieBase`;
    setMetaDescription(movie.overview || `Detalhes do filme ${movie.title}`);
    setOG("og:title", movie.title);
    setOG("og:description", movie.overview);
    setOG("og:image", IMAGE_BASE_URL + movie.poster_path);
    setOG("og:type", "movie");
    setOG("og:url", window.location.href);

    setTwitterCard("twitter:card", "summary_large_image");
    setTwitterCard("twitter:title", movie.title);
    setTwitterCard("twitter:description", movie.overview);
    setTwitterCard("twitter:image", IMAGE_BASE_URL + movie.poster_path);

    setStructuredData(movie);

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
  } finally {
    hideLoading(loader);
  }
}
const backBtn = document.querySelector(".btn-back");

backBtn.addEventListener("click", () => {
  window.history.back();
});

loadMovie();
