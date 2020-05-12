let scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  let scrollBlock = document.querySelector('.header_scroll');
  let navBarLinks = document.querySelectorAll('.navbar__item a');
  let navBarActive = document.querySelector('.navbar___active a');
  let [,...navBarItems] = document.querySelectorAll('.navbar__item');
  let navBarLang = document.querySelector('.navbar__language');
  let headerTop = document.querySelector('.header__top');
  let logo = document.querySelector('.logo');
  let secondLanguage = this.document.querySelector('.second-language');

  if (scrolled > 400) {
    scrollBlock.style.top = '0';
    headerTop.style.top = '15px';
    logo.src = 'img/A.I.K.svg';
    navBarLinks.forEach((i) => (i.style.color = '#2d5ec2'));
    navBarItems.forEach(i => i.style.borderLeft = '1px solid #2d5ec2');
    navBarLang.style.border = '1px solid #2d5ec2';
    secondLanguage.style.border = '1px solid #2d5ec2';

    if (window.screen.availWidth <= 1200 && window.screen.availWidth > 1024) {
        document.querySelector('nav.fixed').style.top = '60px';
    } else if (window.screen.availWidth <= 1024) {
        headerTop.style.top = '20px';
        document.querySelector('nav.fixed').style.top = '0';
        navBarItems.forEach(i => i.style.borderLeft = 'none');
        navBarLinks.forEach((i) => (i.style.color = '#fff'));
        navBarActive.style.color = '#fff';
        
    }
    
  } else if (scrolled < 400) {
    scrollBlock.style.top = '-200px';
    headerTop.style.top = '50px';
    logo.src = 'img/logo.png'
    navBarLinks.forEach((i) => (i.style.color = '#fff'));
    navBarItems.forEach(i => i.style.borderLeft = '1px solid #fff');
    navBarLang.style.border = '1px solid #fff';
    navBarActive.style.color = '#2d5ec2';
    secondLanguage.style.border = '1px solid #fff';
    if (window.screen.availWidth <= 1200 && window.screen.availWidth > 1024) {
        document.querySelector('nav.fixed').style.top = '95px';
    }else if (window.screen.availWidth <= 1024) {
        headerTop.style.top = '20px';
        document.querySelector('nav.fixed').style.top = '0';
        navBarItems.forEach(i => i.style.borderLeft = 'none');
        navBarLinks.forEach((i) => (i.style.color = '#fff'));
        navBarActive.style.color = '#fff';

    }
  }

  let convert = document.querySelector('.convert');
  if (scrolled > 20) {
    convert.style.top = '90vh';
  } else if (scrolled < 20) {
    convert.style.top = '620px';
  }
};

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
var backgrounds = [
'./img/main.jpg',
'img/main-bg-2.jpg',
'img/main-bg-3.jpg'
]
var BACKGROUND_IMAGE_CHANGE_INTERVAL = 5 * 1000
var currentImage = 0;
(function showNextImage() {
  document.querySelector('header').style.backgroundImage = 'url(' + backgrounds[currentImage] + ')'
  currentImage += 1
  if (currentImage >= backgrounds.length) {
    currentImage = 0
  }
  setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
}())