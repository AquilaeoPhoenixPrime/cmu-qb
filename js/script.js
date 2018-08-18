function isInView(el){var rect=el.getBoundingClientRect();var elemTop=rect.top;var isVisible=(elemTop<=window.innerHeight);return isVisible}
function click_scrollspy(el){if(el=="#contact-us_hash"){$('li:contains("About us")').removeClass("active");$('li:contains("Contact us")').addClass("active")}
else if(el=="#about_us_content_hash"){$('li:contains("Contact us")').removeClass("active");$('li:contains("About us")').addClass("active")}
$(el)[0].click()}
function isInNavbar(el){return $.contains($('.nav-wrapper')[0],el)}
function toggleHidden(el){$(el).fadeToggle();$(el).each(function(index){$(this).css('height',$(window).height())})}
$(document).ready(function(){$(window).on('resize',function(){$('.parallax').parallax()})
$(window).on('load',function(){$('.row').each(function(){$(this).css("opacity",1);if(isInView(this)&&!isInNavbar(this)){$(this).addClass('fadeInDown')}})});$('.parallax').parallax();$('.slider').slider({interval:15000,height:500});$('.slider_left').click(function(){$('.slider').slider('prev')});$('.slider_right').click(function(){$('.slider').slider('next')});$('.scrollspy').scrollSpy({scrollOffset:200});$('.table-of-contents').pushpin({offset:200});$('.sidenav').sidenav();var hash_location=!1;if(location.hash){hash_location=window.location.hash;setTimeout(function(){hash_location=window.location.hash},1)}
if(hash_location){setTimeout(function(){if(hash_location.indexOf('_hash')<0){hash_location+='_hash'}
click_scrollspy(hash_location)},100)}
$('input#firstname, input#lastname, input#subject, input#title').characterCounter()})