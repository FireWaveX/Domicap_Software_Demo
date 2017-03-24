$(document).ready(function(){

	$(function() {
		$( ".tablet" ).draggable();
	});

	// $('.light-on').click(function(){
	// 	$('.main-wrapper').toggleClass('light-on');
	// 	$('body').toggleClass('light-on');
	// 	$('header h1').toggleClass('light-on');
	// });

	$('.app').click(function(){
		toggleApp(this.id);
	});

	$('.quit-icon').click(function(){
		toggleApp($(this).parent().parent().attr('id'));
	});

	$('.light-on').click(function(){
		toogleLight(this.id);
	});

});


function toggleApp(app){

	app = app.split('-')[0];
	$('#' + app + '-content').toggle('slide', {direction: 'left'}, 250);

}

function toogleLight(room){

	var selector = '.light-bg.' + room;
	$(selector).toggle();

}


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