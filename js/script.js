/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */


// is el in view
function isInView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
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
// do stuff
$(document).ready(function(){

	AOS.init();
	var pageHeight;
	var footerHeight;
	var navHeight = 81
	var winHeight;

	$(window).on('load resize', function() {
		winHeight = $(this).height();
		pageHeight = $('#about_us_content').outerHeight();
		footerHeight = $('.page-footer').outerHeight();
		// account for navbar height
	});
	
	$(window).on('beforeunload', function(){
		$(window).scrollTop(0); // scroll to top
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
	
	$('.pulse').on('scroll', function() {
		// make arrows go away
		if(isInView($(this))) {
			$(this).removeClass()
		}
	});
	$('.table-of-contents').pushpin({
		// push below navbar
		offset: 200
	});
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