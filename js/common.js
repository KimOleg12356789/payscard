$(function () {
	var tabContainers = $('div.tabs > div');
	tabContainers.removeClass('active').filter(':first').addClass('active');

	$('div.tabs ul.tabNavigation a').click(function () {
		tabContainers.removeClass('active');
		tabContainers.filter(this.hash).addClass('active');
		$('div.tabs ul.tabNavigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});

$(function() {
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;

		if(isMenuOpen) {
			$('.header__menu').addClass('open');
			$('.burger').addClass('open');
			document.documentElement.style.overflow = 'hidden';
		} else {
			$('.header__menu').removeClass('open');
			$('.burger').removeClass('open');
			document.documentElement.removeAttribute('style');
		}
	}
	$('.header .burger').click(function() {
		toggleMenu();
	});
	$('.tabs-block .tabNavigation li a').on('click', function() {
		$('.tabs-block .list').slick('setPosition');
	});
	$('.reviews-desktop-block .list').slick({
		variableWidth: true,
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
		  {
		    breakpoint: 768,
		    settings: {
		      variableWidth: false,
		      adaptiveHeight: true
		    }
		  }
		]
	});
	$('.reviews-mobile-block .list').slick({
		variableWidth: true,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					variableWidth: false,
					adaptiveHeight: true
				}
			}
		]
	});
	$('.tabs-block .list').slick({
	  dots: false,
	  arrows: false,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 576,
	      settings: {
	      	dots: true,
	        slidesToShow: 1,
	        adaptiveHeight: true
	      }
	    }
	  ]
	});
});