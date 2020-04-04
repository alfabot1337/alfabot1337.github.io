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
