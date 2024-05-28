document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        const size = Math.random() * 10 + 5 + 'px';
        confetti.style.width = size;
        confetti.style.height = size;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        
        confettiContainer.appendChild(confetti);
        
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}
