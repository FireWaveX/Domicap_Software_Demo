$(document).ready(function(){

	// $('.main-wrapper').toggleClass('light-on');
	// $('body').toggleClass('light-on');
	// $('header h1').toggleClass('light-on');

	$('#light-app').click(function(){

		$('#light-content').toggle('slide', {direction: 'left'}, 250);
	});

	$('.screen').click(function() {

		if(!clickOnApp($('#light-app')) 
			&& !$('.content').is(':hover')){

			$('#light-content').toggle('slide', {direction: 'left'}, 250);

		}	

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