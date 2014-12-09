$(document).on("pagecreate", "#pageone", function(){
        var video = $('#myVideo');
        var screenSize = $.mobile.getScreenHeight();

  $(document).on( "pagecontainershow", function(){
    ScaleContentToDevice();
    $(window).on("resize orientationchange", function(){
      ScaleContentToDevice();
    })
   // adjustCaptionArea();
   $(".caption").fadeIn(1500);
    

  });
  





  function ScaleContentToDevice(){
      scroll(0, 0);
      var content = $.mobile.getScreenHeight() - $(".ui-header").outerHeight() - $(".ui-footer").outerHeight() - $(".ui-content").outerHeight() + $(".ui-content").height();
      $(".videoContainer").height(content);
  }

  var adjustCaptionArea = function()
  {
    
    //alert(screenSize);
    var captionHeight = screenSize*5/100;
    var captionPadding = captionHeight*5/100;
   // alert(captionPadding);
   // $(".caption").css({
      $(".caption").show();
      $(".caption").css({
        "height" : captionHeight+"px",
        "padding" : captionPadding+"px"
      });
  }

  var topControlArea = function()
  {
  	
  }
});
