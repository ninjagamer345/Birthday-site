// Basic confetti burst
const startConfetti = () => {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  const colors = ['#ff69b4', '#00bfff', '#ffff00', '#7cfc00'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

window.addEventListener('load', startConfetti);
