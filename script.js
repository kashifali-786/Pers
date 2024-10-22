function showMessage(photoIndex) {
    const message = document.getElementById(`message-${photoIndex}`);
    message.style.opacity = 1;
    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000); // Message fades after 3 seconds
}

function showSurpriseMessage(message) {
    alert(message);  // Show the message as an alert pop-up
}

// Function to toggle music play/pause and change button text
function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const musicButton = document.querySelector('button[onclick="toggleMusic()"]');

    if (music) {
        if (music.paused) {
            music.play();
            musicButton.textContent = 'Stop Music';
        } else {
            music.pause();
            musicButton.textContent = 'Start Music';
        }
    }
}

// Automatically stop music when returning to the home page (index.html)
window.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('index.html')) {
        stopMusic();  // Stop the music when navigating to the home page
    }
});
