<<<<<<< HEAD
$('.btn').click(function(){
	$(this).parent().parent().parent().find(".services__block__content-click").fadeToggle(100);
}); 
$('.slicks').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear'
});

$('.header__menu').click(function(){
	$(this).parent().find(".fade-menu").fadeToggle(100, "swing");
}); 

$('.close-menu').click(function(){
	$(this).parent().parent().fadeToggle(100, "swing");
}); 
=======
$('.btn').click(function(){
	$(this).parent().parent().parent().find(".services__block__content-click").fadeToggle(100);
}); 
$('.slicks').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear'
});

$('.header__menu').click(function(){
	$(this).parent().find(".fade-menu").fadeToggle(100, "swing");
}); 

$('.close-menu').click(function(){
	$(this).parent().parent().fadeToggle(100, "swing");
}); 
>>>>>>> 57452eebcddfab2d31d6f5fa8a32fc19db60048c
