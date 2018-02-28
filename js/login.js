function resetPass() {

}

function registerUser() {

}



$(document).ready(function () {
    console.log("Ready");

    // Show register form
    $('#bt_register').click(function (e) {
        e.preventDefault();
        $('#login').toggle();
        $('#register').toggle('500');
        $('#user_login').trigger('reset');

    });

    // Show login form
    $('#bt_login').click(function (e) {
        e.preventDefault();
        $('#register').toggle();
        $('#login').toggle('500');
        $('#register_form').trigger('reset');

    });
    // Get values from form login
    $('#user_login').submit(function (e) {
        e.preventDefault();
        var data = $('#user_login').serializeArray();
        alert(data[0].value + " <-> "+  data[1].value);

    });
    // Get values from form register
    $('#register_form').submit(function (e) {
        e.preventDefault();
        var data = $('#register_form').serializeArray();
        alert(data.length);
        console.log(data);
    });


});