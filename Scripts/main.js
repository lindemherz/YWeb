// Main jQuery, for mainpage.

// Animation for before it is loaded
var $logoIntro = $('.center-img');
$('.page-wrap, .sidemenu').hide();
$logoIntro.fadeIn('slow', 4000).animate(
	);

$(document).ready(function() {
//sizing of background
//get sizing for logo then get proportions for the background
	var $centerWidth = $('.center-img').width();
	var $centerHeight = $('.center-img').height();
	var $backgroundLogoRatio = (101.94/16); // ratio = 6.37
	var $backgroundWidth = $centerWidth * $backgroundLogoRatio;
	var $vhString = $backgroundWidth+"vh"
	$('.background').css({
		'width': $vhString,
		'height': $vhString
	});

//must add the transition times on jQuery, after positioning and before animation
//get logo position and calculate from it the correct possition of background
	var $centerTop = $('.center-img').position().top;
	var $centerLeft = $('.center-img').position().left;
	var $backgroundTop = $centerTop + ($centerHeight / 2)
	var $backgroundTopString = $backgroundTop+"vw"
	var $backgroundLeft = $centerLeft;
	var $backgroundLeftString = $backgroundLeft+"vh"
	$('.backgound').css({
		'top': $backgroundTopString,
		'left': $backgroundLeftString
	});


// Animations and stuff when page is loaded

	$('.page-wrap').fadeOut('slow', 5000);
	$('.background').css({
		'transform': 'rotate(720deg)'
	});

});

//Animation of the big balls on front page
var $formamosLevel  = $('.formamos-level');
var $creamosLevel = $('.creamos-level');
var $bubble = $('.bubble');
$bubble.append($('.bubble2'));
function bubbles() {
	$bubble.animate({
		opacity: 0.50,
		width: '15.4vh',
		height: '15.4vh'}, 500);
	$formamosLevel.animate({
		opacity: 0.50,
		height: '13.2vh',
		width: '13.2vh'}, 500);
	$creamosLevel.animate({
		opacity: 0.50,
		height: '13.2vh',
		width: '13.2vh'}, 500);
	};

// Moving bubbles and shit :/ also, notice the awkwardness in the naming of these things, why is this one called balls????
//function balls() {

//};
