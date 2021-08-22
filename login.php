<?php
    include_once 'header.php'
?>
<div id="login-page">
    <div></div>
    <div id="login-form">
        <h2>Log In</h2>
        <form action = "includes/login.inc.php" method="post">
            <input type="text" name="uid" placeholder="Username/Email...">
            <br>
            <input type="password" name="pwd" placeholder="Password...">
            <br>
            <button type="submit" name="submit">Log In</button>
        </form>

        <?php
        if(isset($_GET["error"])){
            if($_GET["error"]=="emptyinput"){
                echo "<p style='color:black;'>FILL in all fields</p>";
            }
            else if($_GET["error"]=="wronglogin"){
                echo "<p style='color:black;'>Incorrect login information!</p>";
            }
            
        }
        ?>
    </div>
    <div></div>
</div>
<?php
    include_once 'footer.php'
?>