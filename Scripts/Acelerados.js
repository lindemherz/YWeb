// Acelerados jQuery, for aceleradora pages.
$(document).ready(function() {
  $('.video').css({
    'visibility':'visible'
  });

  function placeVideo() {
    var $docHeight = $(window).height();
    var $docWidth = $(window).width();
    var $videoYPos = (($docHeight - $('#video-container').height()) / 6).toFixed(2) - 20;
    var $videoXPos = (($docWidth - 960) / 2).toFixed(2);
    $("#video-container").css({
      'left' : $videoXPos,
      'top' : $videoYPos
    });
  }

  var videoOn = false;
  var videoIFrame= $('#vimeoVideo').clone(true);

  $('.video').on('click', function(){
    if (videoOn == false) {
        placeVideo();
        videoIFrame= $('#vimeoVideo').clone(true);
        videoOn = true;
    } else {
      videoIFrame.appendTo('#video-container');
    }
    $('#video-overlay').show();
  });

  $('#video-toggle').on('click', function(){
    $('#vimeoVideo').remove();
    $('#video-overlay').hide();
  });
});
