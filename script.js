// Simple Confetti
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 100; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 6 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    speed: Math.random() * 3 + 2,
    drift: Math.random() * 2 - 1,
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.speed;
    p.x += p.drift;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(draw);
}

draw();
