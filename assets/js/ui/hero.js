function getBackdropBaseURL() {
  if (window.innerWidth >= 1024) return "original";
  if (window.innerWidth >= 640) return "w1280";
  return "w780";
}
const size = getBackdropBaseURL();
const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${size}`;

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

        <button class="btn-primary" data-id="${movie.id}">
         Ver detalhes
      </button> 
    </div>
  </section>`;
  const button = document.querySelector(".btn-primary");
  button.addEventListener("click", () => {
    window.location.href = `./pages/movie.html?id=${movie.id}`;
  });
};
