const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const renderMoviesPopular = (movies, container) => {
  container.innerHTML = "";
  movies.forEach((m) => {
    if (!m.backdrop_path) return;

    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `<img src="${IMAGE_BASE_URL + m.backdrop_path}" alt="poster do filme ${m.title}">
    <h2>${m.title ?? m.original_title}</h2>
    <p>${m.vote_average.toFixed(1)}</p>
    `;
    container.appendChild(card);
  });
};
export const renderGenres = (genres, container) => {
  container.innerHTML = "";
  genres.forEach((g) => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `<img src="${IMAGE_BASE_URL + g.backdrop_path}" alt="poster do filme ${g.title}">
    <h2>${g.title ?? g.original_title}</h2>
    <p class="card-content">${g.vote_average.toFixed(1)}</p>
    `;
    container.appendChild(card);
  });
};
export function renderSearchResults(movies, container) {
  container.innerHTML = ""; // limpa resultados anteriores

  movies.slice(0, 6).forEach((movie) => {
    if (!movie.poster_path) return;

    // Criar elemento card corretamente
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" 
           alt="${movie.title ?? movie.original_title}" />
    `;

    // Adiciona ao container
    container.appendChild(card);
  });
}
