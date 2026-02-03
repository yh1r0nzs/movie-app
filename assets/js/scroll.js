// scroll.js
export async function scroll() {
  await waitImages(); // garante que todas as imagens carregaram antes do scroll
  const cards = document.querySelectorAll(".card");
  const revealPoint = 150;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - revealPoint) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

// Função que espera imagens carregarem
function waitImages() {
  const imgs = document.querySelectorAll("img");
  const promises = Array.from(imgs).map((img) => {
    if (img.complete) return Promise.resolve();
    return new Promise((resolve) => (img.onload = img.onerror = resolve));
  });
  return Promise.all(promises);
}
