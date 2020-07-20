$(document).ready(function(){
	$('.sidebarBtn').click(function(){
		$('.sidebar').toggleClass("active-menu");
		$('.sidebarBtn').toggleClass("toggle");
	})
});

$(function(){
  $('.scrollToTop').hide()
});

$(window).scroll(function() {
	if($(this).scrollTop() > 500){
		$('.scrollToTop').fadeIn();
	}
	else {
		$('.scrollToTop').fadeOut();
	}
});



