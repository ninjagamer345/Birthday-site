
function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

window.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play();
    }
});
