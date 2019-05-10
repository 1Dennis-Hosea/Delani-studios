$(document).ready(function(){

  // $("#hiden").hide();
  $(".col-md-4").click(function(){
    $(this).children("#hiden").slideToggle("fast");
    $(this).children(".col-md-4 img").slideToggle();
  });
});
$(".contact").click(function){
  alert("write your name!");
}
