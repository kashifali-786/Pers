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
