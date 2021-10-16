const rootElement = document.querySelector('body');
const toggleHolder = document.querySelector('.toggle-th');
const toggleBall = document.querySelector('.toggle-bl');

toggleHolder.addEventListener('click', function() {
    toggleBall.classList.toggle('clicked-bl');
    rootElement.classList.toggle('dark-th');
    toggleHolder.classList.toggle('bg-green');
});