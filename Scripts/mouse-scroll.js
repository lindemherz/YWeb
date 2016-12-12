$(function(){

	$(window).load(function(){
  
		var $gal   = $("#nav-container"),
			galW   = $gal.outerWidth(true),
			galSW  = $gal[0].scrollWidth,
			wDiff  = (galSW/galW)-1,  // widths difference ratio
			mPadd  = 60,  // Mousemove Padding
			damp   = 20,  // Mousemove response softness
			mX     = 0,   // Real mouse position
			mX2    = 0,   // Modified mouse position
			posX   = 0,
			mmAA   = galW-(mPadd*2), // The mousemove available area
			mmAAr  = (galW/mmAA);    // get available mousemove fidderence ratio

		$gal.mousemove(function(e) {
			mX = e.pageX - $(this).parent().offset().left - this.offsetLeft;
			mX2 = Math.min( Math.max(0, mX-mPadd), mmAA ) * mmAAr;
		});

		setInterval(function(){
			posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"	
			$gal.scrollLeft(posX*wDiff);
		}, 10);
	
	});

});