$(document).ready(function(){

	intro();

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

	$('.heat-ctrl').click(function(){
		changeHeat(this);
	});

	displayDate();
	displayTime();
	setInterval(function(){
		displayTime();
	}, 1000)

});

function intro(){

	setTimeout(function(){
		$('.title-intro').slideToggle(200);
	}, 1000)

	setTimeout(function(){
		$('.intro').fadeOut(400);
	}, 3000)

	setTimeout(function(){
		$('.screen').css({ display : 'flex'});
	}, 3500);

}

function changeHeat(button){

	var action = $(button).text();
	var heat = Number($(button).parent().children('p').children().text());
	if(action == '-')
		heat -= 1;
	else
		heat += 1;
	$(button).parent().children('p').children().text(heat);
	if($(button).parent().attr('id') == 'heat-livingroom')
		changeHeatScreen(heat);

}

function changeHeatScreen(heat){

	if(heat < 0){
		$('.freeze-bg').css({opacity: 0.4});
	}
	else if(heat <= 15){
		var x = ((15-heat)*0.4)/15;
		$('.freeze-bg').css({opacity: x});
	}
	else if(heat >= 25){
		var x = ((heat-25)*0.4)/15;
		$('.droplet-bg').css({opacity: x});
	}
	else if(heat > 40){
		$('.droplet-bg').css({opacity: 0.4});
	}
	else{
		$('.freeze-bg').css({opacity: 0});
		$('.droplet-bg').css({opacity: 0});
	}

}

function displayDate(){

	var date 	= new Date(Date.now());
	var days	= ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
	var months  = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
	var day 	= date.getDay();
	var fullday = date.getDate();
	var month 	= date.getMonth();
	$('.date').html(days[day] + ' ' + fullday + ' ' + months[month]);

}

function displayTime(){

	var date 	= new Date(Date.now());
	var hour 	= date.getHours();
	var min 	= date.getMinutes();
	var sec 	= date.getSeconds();
	$('.time').html(hour + ':' + min + ':' + sec);

}


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