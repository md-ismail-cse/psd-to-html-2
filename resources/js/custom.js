//Mean Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




$(document).ready(function(){
    
    //STICKY  MENU
    $('.features-section').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass("sticky");
            $('.back-to-top').show();
        }
        else{
            $('nav').removeClass("sticky");
            $('.back-to-top').hide();
        }
    });
});


/*=============================================
                Slider
===============================================*/
$(function() {
  $('.skitter-large').skitter({
      dots: false
  });
});


/*=============================================
                Portfolio
===============================================*/
$(function () {
    $(".portfolio-slider").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 481 up
            321: {
                items: 2
            },
            // breakpoint from 481 up
            481: {
                items: 3
            },
            // breakpoint from 769 up
            769: {
                items: 4
            }
        }
    });
});


















