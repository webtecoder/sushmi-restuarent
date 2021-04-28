// (function ($) {
// 	"use strict";

    
        function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("main").style.marginLeft = "250px";
          }
          
          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
          }


          
  // scroll to top js
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('#scroll').addClass('scroll-show');
    }
    else{
      $('#scroll').removeClass('scroll-show');
    }
  })

  $('#scroll').click(function(){
    $('html, body').animate({
      scrollTop: 0
    },500)
  
  });
   
    
//     jQuery(window).load(function(){
        
//     });
// }(jQuery));	