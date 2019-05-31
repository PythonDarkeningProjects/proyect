$(document).ready(function(){
    // Events handlers
    $('#signIn').on('submit', function(event){
        event.preventDefault();
        console.log('sss');
        let email = $('#inputEmail').val();
        let pass = $("#inputPassword").val();
        console.log("email" + email + "pass" + pass);
    });
});

