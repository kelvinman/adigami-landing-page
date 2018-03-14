$(document).ready(function(){
      $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
      $(".button-collapse").sideNav({
        closeOnClick: true,
        edge: 'right'
      });
    });

$(function () {
      $(document).scroll(function () {
        var $nav = $(".fixed_nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });

