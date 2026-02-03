const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

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
