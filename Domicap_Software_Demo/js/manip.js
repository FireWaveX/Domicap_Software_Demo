$(document).ready(function(){

	$(function() {
		$( ".tablet" ).draggable();
	});

	$('#light-app').click(function(){
		$('#light-content').toggle('slide', {direction: 'left'}, 250);
	});

	$('.quit-icon').click(function(){
		$('#light-content').toggle('slide', {direction: 'left'}, 250);
	});

	$('.light-on').click(function(){
		$('.main-wrapper').toggleClass('light-on');
		$('body').toggleClass('light-on');
		$('header h1').toggleClass('light-on');
	});

});


function clickOnApp($app = null) {
	
	var hover = false;

	if($app == null)
		$app = $('.app');

	$app.each(function(){

		if($(this).is(':hover'))
			hover = true;

	});

	return hover;

}