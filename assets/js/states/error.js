export function showErrorMovies(container, message) {
  container.innerHTML = `
  <div class="page-error">
  <p class="content-error">${message}</p>
  </div>`;
}
