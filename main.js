$(document).ready(function() {
	$('.fa').on('click', function() {
		var display = $('.head-drop').css('display');
		if(display === 'none'){
			$('.head-drop').slideDown();
		} else {
			$('.head-drop').slideUp();
		}
	});
	  $('li').click(function() {
  
    var a = $(this).text();
    console.log(a);
    if (a === 'ABOUT') {
      $(".head-drop").slideUp();
      $('html, body').animate({
        scrollTop: ($(".about").offset().top)-50
      }, 700);
     
    }
    if (a === 'PORTFOLIO') {
      $(".head-drop").slideUp();
      $('html, body').animate({
	     scrollTop: ($(".projects").offset().top)-70
      }, 700);
     
    }
    if (a === 'CONTACT') {
      $(".head-drop").slideUp(); 
      $('html, body').animate({
        scrollTop: ($(".contact").offset().top)-50
      }, 700);
      
    }
  });
	
});
