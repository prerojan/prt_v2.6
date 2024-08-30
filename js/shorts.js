const videos = [
    "znaprysVl9I",
    "ZwbS26ieuDw",
    "RfLh3uCDHPM"
];

let currentVideoIndex = 0;
const videoFrame = document.getElementById('video-frame');

// Função para carregar o vídeo atual com loop
function loadVideo(index) {
    const videoID = videos[index];
    const playlist = videos.join(',');
    videoFrame.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${playlist}`;
}

// Carregar o primeiro vídeo
loadVideo(currentVideoIndex);

// Evento de rolagem do mouse
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Rolar para baixo, próximo vídeo
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    } else {
        // Rolar para cima, vídeo anterior
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    }
    loadVideo(currentVideoIndex);
});
