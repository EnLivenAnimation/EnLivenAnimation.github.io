<?php
    session_start();
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/home.css">
        <title>EnLiven</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="shortcut icon" type="image/jpg" href="res/icons/favicon.ico"/>
        <script src="https://kit.fontawesome.com/3d9aefd90b.js" crossorigin="anonymous"></script>
      </head>
    <body>
        <div id=scroll>
            <div id="navbar">
                <a id="home" href="index.php" class="logo"><i class="fas fa-leaf"></i></a>
                <a href="resources.html">Resources</a>
                <a href="index.html">Animate</a>
                <a href="team.php">Our Team</a>
                <br>
                <?php
                    if(isset($_SESSION["useruid"])){
                        echo "<a href = 'profile.php'>Profile Page</a>";
                        echo "<a href = 'includes/logout.inc.php'>Log Out</a>";
                    }
                    else{
                        echo "<a href = 'signup.php'>Sign Up</a>";
                        echo "<a href = 'login.php'>Log In</a>";
                    }
                ?>
                
            </div>
        <div id="page-division1" >