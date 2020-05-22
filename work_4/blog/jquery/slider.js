$(document).ready(function() {
  $('.posts__slider').slick({
    slidesToShow: 3,
	  slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
});
