const row = document.querySelector(".movies-row");
const btnLeft = document.querySelector(".arrow.left");
const btnRight = document.querySelector(".arrow.right");

export const scroll = () => {
  // ===== SETAS =====
  const scrollAmount = row.clientWidth * 0.8;

  btnRight.addEventListener("click", () => {
    row.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  btnLeft.addEventListener("click", () => {
    row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  function updateArrows() {
    btnLeft.style.display = row.scrollLeft > 0 ? "flex" : "none";
    btnRight.style.display =
      row.scrollLeft + row.clientWidth < row.scrollWidth ? "flex" : "none";
  }

  row.addEventListener("scroll", updateArrows);
  window.addEventListener("load", updateArrows);

  // ===== SWIPE / DRAG =====
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;

  function startDrag(x) {
    isDown = true;
    startX = x;
    scrollStart = row.scrollLeft;
  }

  function moveDrag(x) {
    if (!isDown) return;
    const walk = startX - x;
    row.scrollLeft = scrollStart + walk;
  }

  function endDrag() {
    if (!isDown) return;
    isDown = false;

    // SNAP POR CARD
    const card = row.querySelector(".card");
    if (!card) return;

    const gap = 16;
    const snap = card.offsetWidth + gap;

    row.scrollTo({
      left: Math.round(row.scrollLeft / snap) * snap,
      behavior: "smooth",
    });
  }

  // ===== TOUCH =====
  row.addEventListener("touchstart", (e) => startDrag(e.touches[0].pageX));

  row.addEventListener("touchmove", (e) => {
    moveDrag(e.touches[0].pageX);
  });

  row.addEventListener("touchend", endDrag);

  // ===== MOUSE =====
  row.addEventListener("mousedown", (e) => {
    e.preventDefault();
    startDrag(e.pageX);
  });

  row.addEventListener("mousemove", (e) => {
    e.preventDefault();
    moveDrag(e.pageX);
  });

  ["mouseup", "mouseleave"].forEach((evt) =>
    row.addEventListener(evt, endDrag),
  );
};
