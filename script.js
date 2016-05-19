var main = function(){
  $('.dropdown').click(function(){
  $('.dropdown-menu').toggle();
  });
    
$('form').submit(function(){
  var email = $('#email').val();
  var password = $('#password').val();
  
  if(email === ""){
      $('.email-error').text("You need to add a valid email");
    };
  
  if(password === ""){
    $('.password-error').text("Please enter a password");
    
  }
  
  return false;
});
};
  
$(document).ready(main);