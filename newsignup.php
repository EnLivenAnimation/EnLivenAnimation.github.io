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
                    <a href="newhome.php" style="text-align: right;">Close X</a>
                </div>
                <h1 style="text-align: center; font-size: 50px; font-weight: bold; margin-top: 50px;">Create Account</h1>
                
                <form action = "includes/signup.inc.php" method="post">
                    <input class ="signup-info" type="text" name="name" placeholder="Full name...">
                    <br>
                    <input class ="signup-info" type="text" name="email" placeholder="Email...">
                    <br>
                    <input class ="signup-info"  type="text" name="uid" placeholder="User name...">
                    <br>
                    <input class ="signup-info"  type="password" name="pwd" placeholder="Password...">
                    <br>
                    <input class ="signup-info" type="password" name="pwdrepeat" placeholder="Repeat password...">
                    <br>
                    <button class="signup-button" type="submit" name="submit">Sign Up</button>
                </form>

                <?php
                if(isset($_GET["error"])){
                    if($_GET["error"]=="emptyinput"){
                        echo "<p class='signuperror'>FILL in all fields</p>";
                    }
                    else if($_GET["error"]=="invaliduid"){
                        echo "<p class='signuperror'>Choose a proper username</p>";
                    }
                    else if($_GET["error"]=="invalidemail"){
                        echo "<p class='signuperror'>Choose a proper email</p>";
                    }
                    else if($_GET["error"]=="passwordsdontmatch"){
                        echo "<p class='signuperror'>Passwords doesn't match</p>";
                    }
                    else if($_GET["error"]=="usernametaken"){
                        echo "<p class='signuperror'>Username already taken!</p>";
                    }
                    else if($_GET["error"]=="stmtfailed"){
                        echo "<p class='signuperror'>Something went wrong, try again!</p>";
                    }
                    else if($_GET["error"]=="none"){
                        echo "<p class='signuperror'>You have signed up!</p>";
                    }
                }
                ?>

            </div>
        </div>
    </body>

</html>