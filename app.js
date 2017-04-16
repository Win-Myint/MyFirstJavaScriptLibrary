// use object on the click of the login button
$('#loginBtn').click(function() {
   
    // create a new 'Greetr' object
    var loginGrtr = G$('Win', 'Myint', 'bur');
    
     // hide the login on the screen
    $('#logindiv').hide();
    
    loginGrtr.setLang('en').jQueryGreeting("#greetingContent", true);  
});