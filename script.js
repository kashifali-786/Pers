document.addEventListener("DOMContentLoaded", () => {
    const dynamicText = document.querySelector('.dynamic-text');
    const phrases = ["Welcome!", "Explore Her Gallery!", "Every Moment Counts!"];
    let index = 0;

    setInterval(() => {
        dynamicText.innerHTML = phrases[index];
        index = (index + 1) % phrases.length;
    }, 3000);

    // Add click event to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('flipped');
            const message = item.getAttribute('data-message');
            item.querySelector('.message').innerText = message;
        });
    });
});
