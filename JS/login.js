$(document).ready(function(){
    $("form#login-form").submit(function(event){
        event.preventDefault();
        const email = $("input#email").val();
        const password = $("input#password").val();
        const storedPassword = window.localStorage.getItem(email);

        if (password === storedPassword) {
            window.location.replace("booking.html");
            // window.localStorage.setItem(email, password);

            // logout
            // window.localStorage.removeItem("currentUser");
            window.localStorage.setItem("currentUser", email);
        } else {
            alert ("The email and password combination is not valid");
        }
    })

    $("form#forgot-password").submit(function(event){
        event.preventDefault()
        alert(" Check your email for password reset link ");
    })
})
