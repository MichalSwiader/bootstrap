$(function() {
    'use strict';	
	
//	Efekt Smooth Scroll
	
	//wybieram wszytkie a o hrefie z id i dodaje funckcje on click	
	$('a[href^="#"]').on('click', function() {
		
		//tworze zmienna linkTarget ktora wybiera cel z idkiem z obecnego hrefa
		var linkTarget = $(this.getAttribute('href'));
		
		//dla wszystkich tworzymy animacje ktora przenosi nam koordynanty celu na gore okna w czasie 5s
		$('html, body').animate({
			scrollTop: linkTarget.offset().top - 50
		}, 500);		
	});
	
	if($(window).scrollTop () >= 50) {
		$('#main-menu').addClass('scroll');
	}

	
	$(window).scroll(function (){
		//	dodanie klasy scroll do menu po scrollu o jego wysokosci badz wiekszynm
		if($(window).scrollTop() >= 50) {
			$('#main-menu').addClass('scroll');
			$('#main-menu').css({"transition": "all 0.3s"});
		} else {
			$('#main-menu').removeClass('scroll');
		}
        //RESZTA W CSS 
	});	
});