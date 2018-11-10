$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	arrows: true
  });

  $('.mobile-menu').click(function() {
  	$('.mobile-menu__list').toggleClass('mobile-menu__list--open')
  });

  $('.search').click(function() {
  	$('.search__form').toggleClass('search__form--open')
  })
});



