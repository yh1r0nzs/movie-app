export function renderSearchResults(movies, container) {
  container.innerHTML = "";

  movies.slice(0, 6).forEach((movie) => {
    if (!movie.poster_path) return;

    const card = document.createElement("div");
    card.classList.add("card-search");

    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="search-img" 
           alt="${movie.title ?? movie.original_title}" />
    `;

    card.addEventListener("click", () => {
      window.location.href = `./pages/movie.html?id=${movie.id}`;
    });
    container.appendChild(card);
  });
}
