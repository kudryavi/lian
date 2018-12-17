$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	arrows: true
  });

  $('.mobile-menu').click(function() {
  	$('.mobile-menu__list').toggleClass('mobile-menu__list--open')
  });

  $('.search__icon').click(function() {
  	$('.search__form').toggleClass('search__form--open')
  })
});

//   function handler(e) {
//     e.preventDefault();
//     largeimage.setAttribute("src", this.getAttribute("href"));
//     largeimage.setAttribute("alt", this.querySelector("img").getAttribute("alt"));
//     largeimage.animate([
//       { opacity: '0'},
//       { opacity: '1'}
//   ], {
//     duration: 500
//     });
//   }

//   var jgallery = document.getElementById("javascript-gallery"),
//   largeimagecontainer = document.getElementById("fullimagecontainer"),
// links = jgallery.getElementsByTagName('a'),
// largeimage = document.createElement("img");

// largeimage.setAttribute("id", "fullimage");
// largeimagecontainer.appendChild(largeimage);

// for (var i=0; i<links.length; i++) {
// links[i].onclick = handler;
// }

// links[0].focus();
// links[0].click();





