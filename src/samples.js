const menu = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');
const artist = document.getElementById('artist');

const firstVideo = document.querySelector('.first-article');
const secondVideo = document.querySelector('.second-article');
const thirdVideo = document.querySelector('.third-article');
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');

const toggleButton = () => {
    nav.classList.toggle('show');
    artist.classList.toggle('hide');
}
menu.addEventListener('click', toggleButton);

const displayVideo = (videoButton) => {
    if (videoButton === 1 && firstVideo.classList.contains('hidden-video')) {
        firstVideo.classList.remove('hidden-video');
        secondVideo.classList.add('hidden-video');
        thirdVideo.classList.add('hidden-video');
    } else if (videoButton === 2 && secondVideo.classList.contains('hidden-video')) {
        firstVideo.classList.add('hidden-video');
        secondVideo.classList.remove('hidden-video');
        thirdVideo.classList.add('hidden-video');
    } else if (videoButton === 3 && thirdVideo.classList.contains('hidden-video')) {
        firstVideo.classList.add('hidden-video');
        secondVideo.classList.add('hidden-video');
        thirdVideo.classList.remove('hidden-video');
    }
}
btnOne.addEventListener('click', (e) => {
    e.preventDefault();
    displayVideo(1);
})
btnTwo.addEventListener('click', (e) => {
    e.preventDefault();
    displayVideo(2);
})
btnThree.addEventListener('click', (e) => {
    e.preventDefault();
    displayVideo(3);
})