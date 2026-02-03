export function renderSearchResults(movies, container) {
  container.innerHTML = ""; // limpa resultados anteriores

  movies.slice(0, 6).forEach((movie) => {
    if (!movie.poster_path) return;

    // Criar elemento card corretamente
    const card = document.createElement("div");
    card.classList.add("card-search");

    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="search-img" 
           alt="${movie.title ?? movie.original_title}" />
    `;

    // Adiciona ao container
    container.appendChild(card);
  });
}
