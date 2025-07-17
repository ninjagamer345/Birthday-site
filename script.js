function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// 🎉 Confetti on load
const confettiCanvas = document.getElementById('confetti');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
const myConfetti = confetti.create(confettiCanvas, { resize: true, useWorker: true });

myConfetti({
  particleCount: 250,
  spread: 180,
  origin: { y: 0.6 }
});

// 🐱 Floating Cats
const catUrls = [
  "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
  "https://cdn2.thecatapi.com/images/MTY3ODIyMw.jpg",
  "https://cdn2.thecatapi.com/images/MTY3ODIyMg.jpg"
];

for (let i = 0; i < 10; i++) {
  const img = document.createElement("img");
  img.src = catUrls[Math.floor(Math.random() * catUrls.length)];
  img.className = "cat";
  img.style.top = Math.random() * 80 + "vh";
  img.style.left = Math.random() * 90 + "vw";
  document.body.appendChild(img);
}
