const arrowButton = document.getElementById('arrow-button');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');

arrowButton.addEventListener('click', function() {
    overlay.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});
