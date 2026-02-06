const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const renderMovies = (movies, container) => {
  container.innerHTML = "";
  movies.forEach((m) => {
    if (!m.backdrop_path) return;

    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `<img src="${IMAGE_BASE_URL + m.poster_path}" alt="poster do filme ${m.title}">
    `;
    card.addEventListener("click", () => {
      window.location.href = `./pages/movie.html?id=${m.id}`;
    });
    container.appendChild(card);
  });
};
