const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const renderMoviesPopular = (movies, container) => {
  container.innerHTML = "";
  movies.forEach((m) => {
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

    card.innerHTML = `<img src="${IMAGE_BASE_URL + g.backdrop_path}" alt="poster do filme ${m.title}">
    <h2>${g.title ?? g.original_title}</h2>
    <p>${g.vote_average.toFixed(1)}</p>
    `;
    container.appendChild(card);
  });
};
