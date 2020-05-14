function openBurger() {
  document.querySelector('.burger').classList.toggle('burger_open');
  document.querySelector('nav.fixed').classList.toggle('nav_open');
}
document.querySelector('.burger').addEventListener('click', openBurger);

function searchToggle(e) {
let searchInput = document.querySelector('.navbar__search');
let searchButton = document.querySelector('.navbar__search + a');
searchButton.classList.toggle('search-show');
searchInput.classList.toggle('search-show');
}

function popUp() {
let popup = document.querySelector('.popup-wrapper');
popup.classList.toggle('show');
}
// var backgrounds = [
// './img/main.jpg',
// 'img/main-bg-2.jpg',
// 'img/main-bg-3.jpg'
// ]
// var BACKGROUND_IMAGE_CHANGE_INTERVAL = 5 * 1000
// var currentImage = 0;
// (function showNextImage() {
// document.querySelector('header').style.backgroundImage = 'url(' + backgrounds[currentImage] + ')'
// currentImage += 1
// if (currentImage >= backgrounds.length) {
//   currentImage = 0
// }
// setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
// }())

let menuRight = document.querySelector('.fixed-right');
menuRight.style.right = (window.outerWidth - 1140) / 2 + 'px';

window.addEventListener('resize', () => {
	menuRight.style.right = (window.outerWidth - 1140) / 2 + 'px';
});