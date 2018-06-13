$(document).ready(function() {
    $("a[rel='m_PageScroll2id']").mPageScroll2id();
    $('.parallax').parallax();
   $(function() {
          $.scrollify({
            section : ".scroll",
          });
        });
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
});