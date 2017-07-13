$('.slider-slick').on('init', function(event, slick){
  $('.slider-slick').find('.slick-track').append('<div class="slider-wave"></div>');
});
$('.slider-slick').slick({
	dots: true,
	arrows: false,
	//infinite: false
});
