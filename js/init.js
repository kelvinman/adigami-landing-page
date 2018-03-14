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
        var $a = $(".nav_text");
        var $li = $(".landing_img");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $li.height()-50);
        $a.toggleClass('grey-text', $(this).scrollTop() > $li.height()-50);
      });
    });

