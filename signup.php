<?php
    include_once 'header.php'
?>
<div style="color:black" id="signup-form">
    <h2>Sign Up</h2>
    <form action = "includes/signup.inc.php" method="post">
        <input style="color:black" type="text" name="name" placeholder="Full name...">
        <br>
        <input style="color:black" type="text" name="email" placeholder="Email...">
        <br>
        <input style="color:black" type="text" name="uid" placeholder="User name...">
        <br>
        <input style="color:black" type="password" name="pwd" placeholder="Password...">
        <br>
        <input style="color:black" type="password" name="pwdrepeat" placeholder="Repeat password...">
        <br>
        <button type="submit" name="submit">Sign Up</button>
    </form>

    <?php
    if(isset($_GET["error"])){
        if($_GET["error"]=="emptyinput"){
            echo "<p style='color:black;'>FILL in all fields</p>";
        }
        else if($_GET["error"]=="invaliduid"){
            echo "<p style='color:black;'>Choose a proper username</p>";
        }
        else if($_GET["error"]=="invalidemail"){
            echo "<p style='color:black;'>Choose a proper email</p>";
        }
        else if($_GET["error"]=="passwordsdontmatch"){
            echo "<p style='color:black;'>Passwords doesn't match</p>";
        }
        else if($_GET["error"]=="usernametaken"){
            echo "<p style='color:black;'>Username already taken!</p>";
        }
        else if($_GET["error"]=="stmtfailed"){
            echo "<p style='color:black;'>Something went wrong, try again!</p>";
        }
        else if($_GET["error"]=="none"){
            echo "<p style='color:black;'>You have signed up!</p>";
        }
    }
    ?>

</div>


<?php
    include_once 'footer.php'
?>