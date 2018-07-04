// is el in view
function isInView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;

    // Only completely visible elements return true:
    var isVisible = (elemTop <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function click_scrollspy(el) {
	if (el == "#contact-us_hash") {
		$('li:contains("About us")').removeClass("active");
		$('li:contains("Contact us")').addClass("active");
	}
	else if (el = "#about_us_content_hash") {
		$('li:contains("Contact us")').removeClass("active");
		$('li:contains("About us")').addClass("active");
	}
	$(el)[0].click();
}

function isInNavbar(el) {
	return $.contains($('.nav-wrapper')[0], el);
}
// do stuff
	
$(document).ready(function(){
	$(window).on('resize', function() {
		// re-init parallax so it repositions itself properly	
		$('.parallax').parallax();
	})
	$(window).on('load', function() {
		$('.row').each(function() {
			$(this).css("opacity", 1);
			if (isInView(this) && !isInNavbar(this)) {
				$(this).addClass('fadeInDown');
			}
		})
	});
	// initialize parralax effect
	$('.parallax').parallax();
	// initialize scrollspy
	// initialize slider

	$('.slider').slider({
		interval: 15000
	});
	// use slider buttons
	$('.slider_left').click(function(){
			$('.slider').slider('prev');
		});
	$('.slider_right').click(function(){
			$('.slider').slider('next');
		});
	// fix scrollspy
	$('.scrollspy').scrollSpy({
		scrollOffset: 200
	});

	$('.table-of-contents').pushpin({
		// push below navbar
		offset: 200
	});
	//intialize side nav
	$('.sidenav').sidenav();
	// if hash location exists, sroll there
	var hash_location = false;

	if (location.hash) {
		hash_location = window.location.hash;
		setTimeout(function() {
			hash_location = window.location.hash
		}, 1); // double check
	}

	if (hash_location) {
		//wait for browser to catch up; this is asynchronous...
		setTimeout(function() {
			if (hash_location.indexOf('_hash') < 0) {
				hash_location += '_hash';  // add the suffix
			}
			// click scrollspy
			click_scrollspy(hash_location);
		}, 100);
	}
});