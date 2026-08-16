$(document).ready(function(){
  var altura = $('.Cbar').offset().top;

  $(window).on('scroll', function(){
     if ( $(window).scrollTop() > altura + 50){
        $('.Cbar').addClass('iconomono');
     } else {
        $('.Cbar').removeClass('iconomono');
     }
  });

});
