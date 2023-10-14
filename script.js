document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.querySelector('.background-video');

    // Set video volume to 50%
    videoElement.volume = 0.5;

    // Try to play the video (this might be blocked by some browsers without user interaction)
    videoElement.play().catch(error => {
        console.warn("Reproducción automática del video bloqueada:", error);
    });

    // You had code related to background music which is commented out in HTML, 
    // so this is not needed unless you want to use it later.
    // const music = document.getElementById('background-music');
    // music.volume = 0.2;
    // music.play().catch(error => {
    //     console.warn("Reproducción automática bloqueada:", error);
    // });
});
