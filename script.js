const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const yayCard = document.getElementById("yayCard");
const againBtn = document.getElementById("againBtn");
const buttons = document.getElementById("buttons");

function moveNo() {
  const area = buttons.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const maxX = area.width - btn.width;
  const maxY = area.height - btn.height;

  const x = Math.random() * Math.max(0, maxX);
  const y = Math.random() * Math.max(0, maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "translate(0,0)";
}

// Runaway NO
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
}, { passive: false });

// YES -> yay
yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  yayCard.classList.remove("hidden");
});

// Reset
againBtn.addEventListener("click", () => {
  yayCard.classList.add("hidden");
  card.classList.remove("hidden");

  noBtn.style.left = "60%";
  noBtn.style.top = "70%";
  noBtn.style.transform = "translate(-50%, -50%)";
});
