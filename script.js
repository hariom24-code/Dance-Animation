document.getElementById('danceButton').addEventListener('click', function() {
    const emoji = document.getElementById('emoji');
    emoji.style.opacity = 1;
    emoji.style.animationName = 'dance';
    
    setTimeout(() => {
        emoji.style.opacity = 0;
        emoji.style.animationName = '';
    }, 5000); // Stops animation after 5 seconds
});
