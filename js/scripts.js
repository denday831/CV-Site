$(document).ready(function() {
    
    $("#nav-icon").click(function(){
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

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ( $(".sidebar").innerHeight() > $(window).height() ) {
            $(".sidebar").css({"height": "100%",
                               "position": "absolute",
                               "overflow-y": "hidden"
            });
            console.log("inner height")
    }

    if ($(".sidebar").css("min-width") == "330px" ){
        
        $(".sidebar").css({"height": "100%",
                           "min-height": "100vh",
                           "overflow-y": "hidden"
                          });
        $("body").css("overflow", "auto");   
    }

    else {
       if ( $("#nav-icon").hasClass("open") ) {
           $(".sidebar").css({"height": "100%", "min-height": "100%"});
       }
       else {
           $(".sidebar").css({"height": "53px", "min-height": "0"});
       }
    }
}





///////////////////////////////////////////////////////////////////////////////////////////////////
// MASONARY GRID INSTALLER
///////////////////////////////////////////////////////////////////////////////////////////////////

// layout Masonry after each image loads
$('.cards').imagesLoaded().progress( function() {
    $('.cards').masonry({
      itemSelector: '.card'
    });
  $('.cards').masonry('layout');
}); 
