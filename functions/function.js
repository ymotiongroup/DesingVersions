$(document).ready(function() {

 /*Banner transition*/
 window.onload = banneranimate();


});
function banneranimate(){

  setTimeout(function(){
    $('.banner').css({
      //'transition':'all 1s ease-in-out',
      'left':'0',
      'z-index':'-2'
    });
     setTimeout(function(){
        $('.banner2').css({
           'right' : '0'
        });
     },3000);
   },500);

}
