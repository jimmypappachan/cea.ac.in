import "bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import 'animate.css/animate.css'
import "./sass/main.scss";

/* CAROUSELS
  1. Student
  2. News
  3. Organisation
*/

$(document).ready(function () {
  $(".student_carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    smartSpeed: 350,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $(".news_carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  });
  $(".organisation_carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav:false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: false
      }
    }
  });
});

/* STICKY NAVBAR ON SCROLL */

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });
});

/* DROPDOWN NAVBAR */

$( document ).ready( function() {
  $('.navbar-nav').hover(function(){
    $('.overlay-nav').animate({height:'600px'});
  },
  function(){
    $('.overlay-nav').animate({height:'0px'});
  }
  )
  $( '.dropdown' ).on( 'show.bs.dropdown mouseover', function() {
    $( this ).find( '.dropdown-menu' ).first().stop( true, true ).fadeIn(1400);
    $('nav').addClass('nav-change');
    
  } );
  $('.dropdown').on( 'hide.bs.dropdown mouseleave', function(){
    $( this ).find( '.dropdown-menu' ).first().stop( true, true ).fadeOut(220);
    $('nav').removeClass('nav-change');
  } );
} );
