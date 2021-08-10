<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/signupphp.css">
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href='https://fonts.googleapis.com/css?family=Courier Prime' rel='stylesheet'>
    </head>
    <body>
        <div id="signupimg">
            <div style="background-image: url('signupimg.jpg');" id="background"></div>
            <div id="signup-info">
                <div id="signupbar">
                    <p style="color:#686868; text-align: left;">Already have an account? <a href="newlogin.php" style="color:#0030DB">Log In</a></p>
                    <a href="newhome.html" style="text-align: right;">Close X</a>
                </div>
                <h1 style="text-align: center; font-size: 50px; font-weight: bold; margin-top: 50px;">Create Account</h1>
                
                <button style="border-radius: 30px; margin-top: 10px;">Email address</button>
                <button style="border-radius: 30px; margin-top: 10px;">Full name</button>
                <button style="border-radius: 30px; margin-top: 10px;">Username</button>
                <button style="border-radius: 30px; margin-top: 10px;">Password</button>
                <button style="border-radius: 30px; margin-top: 10px;">Confirm password</button>
                <br>
                <button class="signup-button">Sign Up</button>

            </div>
        </div>
    </body>

</html>