const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");
const dateScreen = document.getElementById("dateScreen");

// Yes button
yesBtn.addEventListener("click", () => {
  container.classList.add("hidden");
  dateScreen.classList.remove("hidden");
});

// No button runs away (mouse + touch)
function moveNoButton() {
  const x = Math.random() * 200;
  const y = Math.random() * 80;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);
