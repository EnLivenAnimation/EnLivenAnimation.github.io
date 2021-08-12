<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/loginphp.css">
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href='https://fonts.googleapis.com/css?family=Courier Prime' rel='stylesheet'>
    </head>
    <body>
        <div id="loginimg">
            <div style="background-image: url('loginimg.jpg');" id="background"></div>
            <div id="login-info">
                <div id="loginbar">
                    <p style="color:#686868; text-align: left;">Don't have an account? <a href="newsignup.php" style="color:#0030DB">Sign Up</a></p>
                    <a href="newhome.html" style="text-align: right; color:black">Close X</a>
                </div>
                <h1 style="text-align: center; font-size: 50px; font-weight: bold; margin-top: 50px;">Login</h1>
                <form action = "includes/login.inc.php" method="post">
                    <input class ="login-info" type="text" name="uid" placeholder="Username/Email...">
                    <br>
                    <input class ="login-info" type="password" name="pwd" placeholder="Password...">
                    <br>
                    <button class="login-button" type="submit" name="submit">Log In</button>
                </form>

                <?php
                    if(isset($_GET["error"])){
                        if($_GET["error"]=="emptyinput"){
                            echo "<p class='loginerror'>FILL in all fields</p>";
                        }
                        else if($_GET["error"]=="wronglogin"){
                            echo "<p class='loginerror'>Incorrect login information!</p>";
                        }
                        
                    }
                ?>

            </div>
        </div>
    </body>

</html>