$(document).ready(function() {
  $('.first-screen__footer__slider').slick({
    // lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
});
