/*
* Included Jquery
*/

$(document).ready(function(){
  $(".profileCard").toArray().forEach(function(card){
    $(card).find(".profileFooter .share").on('click',function(){
      $(card).toggleClass("open");
    });
  });
});