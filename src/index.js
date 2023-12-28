const menu = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');
const artist = document.getElementById('artist');

const toggleButton = () => {
    nav.classList.toggle('show');
    artist.classList.toggle('hide');
}
menu.addEventListener('click', toggleButton);