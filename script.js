document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

function playSurprise() {
    document.getElementById("surprise").style.display = "block";
}
