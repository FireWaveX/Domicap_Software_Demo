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
	}, 1000);

	$('#contact-btn').click(function(){
		$('#light-contact').fadeIn(200).css('display', 'flex');
	});

	$('.action-btn').click(function(e){
		e.preventDefault();
	});

	$('#clr-btn').click(function(){

		$('#name').val('');
		$('#mail').val('');
		$('#subject').val('');
		$('#descr').val('');

	});

	$('.lightbox').click(function(){
		removeLightbox($(this));
	});

	setInterval(function(){
		var bpm = Math.random() * (80 - 70) + 70;
		bpm = Math.round(bpm);
		$('.rythme').text(bpm);
	},2000);

	updateEnergyColor();

	$('.stop-shutter').css({
		backgroundColor : '#699933',
		color : 'white'
	});
	$('.shutter-ctrl input').click(function(){
		$(this).parent().children().css({
			backgroundColor : 'white',
			color : 'black'
		});
		$(this).css({
			backgroundColor : '#699933',
			color : 'white'
		})
	});

	$('.arret').css({
		backgroundColor : '#d35400',
		color : 'white'
	});
	$('.alarm-ctrls div').click(function(){
		$(this).parent().children().css({
			backgroundColor : '#FFB300',
			color : 'black'
		});
		$(this).css({
			backgroundColor : '#d35400',
			color : 'white'
		});
	});

});

function updateEnergyColor(){

	$('.conso span').each(function(){
		if($(this).text() < 10)
			$(this).parent().css({color : '#65DCFF'});
		else if($(this).text() > 20)
			$(this).parent().css({color : '#c0392b'});
		else
			$(this).parent().css({color : '#e67e22'});
	});

}

function intro(){

	setTimeout(function(){
		$('.title-intro').slideToggle(200);
	}, 10)

	setTimeout(function(){
		$('.intro').fadeOut(400);
	}, 30)

	setTimeout(function(){
		$('.screen').css({ display : 'flex'});
	}, 35);

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

	console.log($('#'+room));
	var src = ($('#'+room).attr('src') == 'images/white-light-bulb.png')
		? 'images/red-light-bulb.png'
		: 'images/white-light-bulb.png';

	$('#'+room).attr('src', src);
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

function removeLightbox($lightbox){

	var hov = false;

	$lightbox.children().each(function(){

		if($(this).is(':hover'))	
			hov = true;

	});

	if(!hov){
		$('.mailInfo').remove();
		$('.lightbox').fadeOut(200);
	}

}