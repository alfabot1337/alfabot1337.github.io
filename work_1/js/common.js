$(document).ready(function(){
  $('.slider').slick({
  	dots: true
  });
   $("a[rel='m_PageScroll2id']").mPageScroll2id();
   $('.team__block > a, .contacts__a > a').hover(
     function() {
      $(this).addClass('animated rubberBand'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('animated rubberBand'); // Убираем класс
     }
    )
});