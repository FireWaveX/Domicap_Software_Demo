$(document).ready(function(){

	$('#light-app').click(function(){
		$('.main-wrapper').toggleClass('light-on');
		$('body').toggleClass('light-on');
		$('header h1').toggleClass('light-on');
	});

});