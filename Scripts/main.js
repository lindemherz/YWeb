// Main jQuery, for mainpage.

// Animation for before it is loaded
var $logoIntro = $('.center-img');
$('.page-wrap, .sidemenu').hide();
$logoIntro.fadeIn('slow', 4000).animate(
	);

$(document).ready(function() {
//Gets the right width for the background
	var $docHeight = $(window).height();
	var $docWidth = $(window).width();
	var $ratio = ($docWidth / $docHeight).toFixed(2);
	$ratio = (28.66 * $ratio) / 1.77;
	$ratio = $ratio.toFixed(2);
	var $vwString = $ratio+"vw"
	$('.background').css({
		'left': $vwString
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
