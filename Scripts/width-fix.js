//Gets the right width for the background 
	var $docHeight = $(document).css("height");
	var $docWidth = $(document).css("width");
	var $ratio = ($docHeight / $docWidth).toFixed(2);
	$ratio = (27.28 * $ratio) / 1.77
	var $background = $('.background');
	$background.css({
		left: ($ratio)
	});
