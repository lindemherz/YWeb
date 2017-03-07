// Sidemenu jQuery, for sidemenu.
$(window).bind("load", function() {
  console.log('page ready');
  $('#sidemenu').animate({
    width: "toggle";
  })
  var mainPage = $('#page-wrap').hasClass('main-page');
  //NOT IMPLEMENTED YET var formamosPage = $('#page-wrap').hasClass('formamos-page');
  //NOT IMPLEMENTED YET var creamosPage = $('#page-wrap').hasClass('creamos-page');
  var patriotasPage = $('#page-wrap').hasClass('patriotas-page');
  //console.log(mainPage);

/********************/
/*Initial Page Setup*/
/********************/

  if (!mainPage) {
    /*NOT IMPLEMENTED YET
    if (formamosPage) {

    }
    if (creamosPage) {

    }*/
    if (patriotasPage) {
      $('#patriotas').addClass('jqHover');
    }
  }


/***************************/
/*Animation for entrance*/
//This was made so the iframe will stop jumping when you load the page
/***************************/

 function intro(){
  var $sidemenu = $wrapper.find('#sidemenu');
  $sidemenu.toggle('slide');
 };



/***************************/
/*Navigation lights methods*/
/***************************/

//
  function getBallItemTxtLabel($wrapper) {
    $txtLabel = $wrapper.find('.menu-txt-item');
    return $txtLabel;
  }

  function getBallItemBallHeader($wrapper) {
    $header = $wrapper.siblings('.menu-header');
    $ballHeader = $header.find('.ball-header');
    return $ballHeader;
  }

  function getSubBallItem($wrapper) {
    $ballItem = $wrapper.find('.ball-item');
    return $ballItem;
  }

  function navLightMouseover($here) {
    $wrapper = $here.parents('.menu-wrapper');

    $txtLabel = getBallItemTxtLabel($wrapper);
    $ballHeader = getBallItemBallHeader($wrapper);
    $ballItem = getSubBallItem($wrapper);

    $txtLabel.addClass('jqHover');
    //if (mainPage) { $ballHeader.addClass('jqHover'); }
    $ballHeader.addClass('jqHover');
    $ballItem.addClass('jqHover');
  }

  function navLightMouseout($here) {
    $wrapper = $here.parents('.menu-wrapper');

    $txtLabel = getBallItemTxtLabel($wrapper);
    $ballHeader = getBallItemBallHeader($wrapper);
    $ballItem = getSubBallItem($wrapper);

    $txtLabel.removeClass('jqHover');
    //if (mainPage) { $ballHeader.removeClass('jqHover'); }
    $ballHeader.removeClass('jqHover');
    $ballItem.removeClass('jqHover');
  }

  /*MainPage lights methods*/

  function getSectionWrapper($here){
    return $wrapper = $here.parents('.wrapper');
  }

  function subsectionMouseover($here){
    $sectionWrapper = getSectionWrapper($here);
    $sectionWrapper.find('.bubble').addClass('jqHover');
  }

  function subsectionMouseout($here){
    $sectionWrapper = getSectionWrapper($here);
    $sectionWrapper.find('.bubble').removeClass('jqHover');
  }

  /***********************************/
  /*Navigation lights trigger methods*/
  /***********************************/

  $('.ball-item').mouseover(function(){
    $here = $(this);
    navLightMouseover($here);
  });

  $('.ball-item').mouseout(function(){
    $here = $(this);
    navLightMouseout($here);
  });

  $('.ball-item').click(function(){
    $here = $(this);
    navLightMouseover($here);
  });

  $('.menu-txt-item').mouseover(function(){
    $here = $(this);
    navLightMouseover($here);
  });

  $('.menu-txt-item').mouseout(function(){
    $here = $(this);
    navLightMouseout($here);
  });

  $('.menu-txt-item').click(function(){
    $here = $(this);
    navLightMouseover($here);
  });

  /*MainPage lights trigger methods*/

  $('.subsection').mouseover(function(){
    $here = $(this);
    subsectionMouseover($here);
  });

  $('.subsection').mouseout(function(){
    $here = $(this);
    subsectionMouseout($here);
  });

});
