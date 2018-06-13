$(document).ready(function(){
	$('.slider').slick({
		dots: true
	});
	$('.testimonials__slider').slick({
		dots: true,
		arrows: false,
	});
	$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() > 660) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
$("a[rel='m_PageScroll2id']").mPageScroll2id();
 
});
});	

