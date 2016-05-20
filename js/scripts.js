$(document).ready(function() {
    
    $("#nav-icon").click(function(){
        var headHeight = $(".sidebar header").height();
       if ( $(this).hasClass("open") ) {
           $(this).removeClass("open");
           $("body").css("overflow", "auto");
           $(".sidebar").css({
               "overflow-y": "hidden"
           }).animate({"min-height": "0", "height": "53px"});
       } 
    
        else {
           $(this).addClass("open");
           $("body").css("overflow", "hidden");
           $(".sidebar").css("overflow-y", "scroll").animate({"min-height": "100%", "height": "100%"});
       }
    });
});

$(window).resize(function() {
    if ( $(window).width() >= 768 ) {
        $(".sidebar").css({"height": "100%",
                           "min-height": "100vh",
                           "overflow-y": "hidden"
                          })
    }
    
    else {
       if ( $("#nav-icon").hasClass("open") ) {
           $(".sidebar").css({"height": "100%", "min-height": "100%"});
       }
       else {
           $(".sidebar").css({"height": "53px", "min-height": "0"});
       }
    }
});