// use object on the click of the login button
$('#loginBtn').click(function() {
   
    // create a new 'Greetr' object
    var loginGrtr = G$('Win', 'Myint', lang.value);
    
     // hide the login on the screen
    $('#logindiv').hide();
    
    loginGrtr.jQueryGreeting("#greetingContent", true);  
});