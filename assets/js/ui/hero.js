const IMAGE_BASE_URL =
  window.innerWidth >= 1024
    ? "https://image.tmdb.org/t/p/original"
    : "https://image.tmdb.org/t/p/w780";

export const renderHero = (movie, container) => {
  document.querySelector("#bg").style.backgroundImage =
    `url(${IMAGE_BASE_URL + movie.backdrop_path})`;
  container.innerHTML = `<section class="hero glass">
  <div class="hero-content">
    <span class="tag">EM DESTAQUE</span>
        <h2>${movie.title}</h2>
        <p>
          ${movie.overview}
        </p>

        <button class="btn-primary">
        <span>ℹ</span> Ver detalhes
      </button> 
    </div>
  </section>`;
};
