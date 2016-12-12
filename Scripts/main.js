// Main jQuery, for mainpage.

// Animation for before it is loaded
var $logo-intro = $('.center-img');
$('.page-wrap, .sidemenu').hide();
$logo-intro.fadeIn('slow', 4000).animate(
	);

//Gets the right width for the background 
var $doc-height = $(document).get(heigth);
var $doc-width = $(document).get(width);
var $ratio = ($doc-height / $doc-width).toFixed(2);
$ratio = (27.28 * $ratio) / 1.77
var $background = $('.background');
$background.css({
	left: ($ratio)vw;
});


// Animations and stuff when page is loaded

$(document).ready(function() {
	$('.video').active();
	$('.page-wrap').fadeOut('slow', 5000);
	bubbles();
	balls();

});

//Animation of the big balls on front page
var $formamos-level  = $('.formamos-level');
var $creamos-level = $('.creamos-level');
var $bubble = $('.bubble');
$bubble.append($('.bubble2'));
function bubbles() {
	$bubble.animate({
		opacity: 0.50,
		width: '15.4vh',
		height: '15.4vh'}, 500);
	$formamos-level.animate({
		opacity: 0.50,
		height: '13.2vh', 
		width: '13.2vh'}, 500);
	$creamos-level.animate({
		opacity: 0.50,
		height: '13.2vh',
		width: '13.2vh'}, 500);
	};

// Moving bubbles and shit :/ also, notice the awkwardness in the naming of these things, why is this one called balls????
function balls() {

};

