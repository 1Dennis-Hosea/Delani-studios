$(document).ready(function() {
 $(".design").click(function(){
   $(".showing").toggle();
   $(".hidden").toggle();
 });
 $(".devt").click(function() {
   $(".hidden").toggle();
   $(".showing").toggle();
 });
 $(".prod").click(function() {
   $(".showing").toggle();
   $(".hidden").toggle();
 });
 $(".submit").click(function(event) {
   event.PreventDefault()
   console.log("clicked button")

   var name = $(".name").val()
   var email = $(".email").val()
   var message = $(".message").val()
   var status = $(".response")
   statusElm.empty()

   if(email.length > 5 && email.includes("@") && email.includes(".")) {
     statusElm.append("<div>Email is valid</div>")
   }else {
     statusElm.append("<div>Email is not valid</div>")
   }

   if (name.length > 1) {
     statusElm.append("<div>Name is valid</div>")
   }else {
     statusElm.append("<div>Name is not valid valid</div>")
   }

   if (message.length > :sunglasses: {
     statusElm.append("<div>message is valid</div>")
   }else {
     statusElm.append("<div>message is not valid valid</div>")
   }
 })
 $('.over').hover(function() {
      $(this).animate({
        opacity: '1'
      });
    },
    function() {
      $(this).animate({
        opacity: '0'
      });
    });
});
