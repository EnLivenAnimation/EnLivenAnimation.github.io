<?php
    session_start();
?>

<?php


if($_POST["message"]) {
    mail("enlivenwon@gmail.com", "User Feedback",
    $_POST["insert your message here"]. "From: pqqgood@gmail.com");
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/newhome.css">
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href='https://fonts.googleapis.com/css?family=Courier Prime' rel='stylesheet'>
    </head>
    <script>window.onbeforeunload = function () {window.scrollTo(0, 0);}</script>
    <body>
        <nav id="navbar">
            <script src = "scripts/navbar.js"></script>
            <a></a>
            <br>
            <button id="b1">Animate</button>
            <button id="b2" >Resources</button>
            <button id="b3">Community</button>
            <?php
                    if(isset($_SESSION["useruid"])){
                        echo "<button onclick=\"location.href='includes/logout.inc.php'\"; id='b4'>Log Out</button>";
                    }
                    else{
                        echo "<button onclick=\"location.href='newlogin.php'\";  id='b4'>Log In</button>";
                    }
            ?>
        </nav>

        <div style="background-image: url('nature.jpg');" id="hero">
            <div class="hero-text">
                <br>
                <div>
                    <hero style="font-size: 140px; text-align: center;" id="hero1">EnLiven</hero>
                    <hero2 style="font-size:30px; text-align: center; color: teal;" id ="hero2">Bring your creations to life</hero2>
                </div>
                <br>
            </div>
        </div>

        <div id="intro">
            <div class="description">
                <br>
                <h1>01</h1>
                <h2>EASY</h2>
                <p>EnLiven has an user interface that is extremely user-friendly and tutorials to guide people. </p>
                <br>
            </div>
            <div class="description">
                <br>
                <h1>02</h1>
                <h2>CONVENIENT</h2>
                <p>EnLiven is and will always be a free website that is accessible to anyone.</p>
                <br>
                <button class='intro-button'>Get Started!</button>    
            </div>
            <div class="description">
                <br>
                <h1>03</h1>
                <h2>FREE</h2>
                <p>EnLiven is and will always be a free website that is accessible to anyone. </p>
                <br>
            </div>
        </div>

        <div id="intro2">
            <script src = "scripts/intro.js"></script>
            <h1>About Us</h1>
            <div>
                <button class="tablink" onclick="openAbout('Introduction', this, '#6B9775')" id="defaultOpen">Introduction</button>
                <button class="tablink" onclick="openAbout('Wonjong Park', this, '#9BC8A5')">Wonjong Park</button>
                <button class="tablink" onclick="openAbout('Edward Wu', this, '#7AD17E')">Edward Wu</button>
                <button class="tablink" onclick="openAbout('Justin Zou', this, '#75B884')">Justin Zou</button>
            </div>
            <div id="intro2-main">
                <div id="Introduction" style ="background-color:#6B9775; font-size: 20px; text-align: center;" class="tabcontent">
                <h1>Introduction</h1>
                <br>
                <p>EnLiven was first thought of due to our interest in animation. However, a quick Google search later, our group of 4 realized that there were no animation tutorial sites. Despite animation becoming a bigger and bigger field than ever before, it is still a daunting art to get into. So we created EnLiven. Meant to convey the idea of bringing your creations to life, EnLiven will allow  users to learn the 12 basic principles of animation using our interactive tutorials and simplified animation engine. Eventually we hope to create a community where users can interact and give tips to each other. Ultimately, users will be able to move on to more advanced animation engines with EnLiven as a starting point. </p>
                </div>

                <div id="Wonjong Park" style ="background-color:#9BC8A5" class="tabcontent">
                <h1>Wonjong Park</h1>
                <div class="introduction-person">
                    <div style="background-image: url('wonjong-intro.jpg');" class="introduction-img"></div>
                    <div class="introduction-text">
                        <p>Age: 18</p>
                        <p>School: Stuyvesant High School</p>
                        <p>Interested subjects: Biology, Physics,Math, CS</p>
                        <p>Hobbies: Animation, Webtoon, 3D Printing, Jag-saw puzzle, Gundam</p>
                        <p>Least favorite person in team: Justin</p>
                    </div>
                </div>
                </div>

                <div id="Edward Wu" style ="background-color:#7AD17E" class="tabcontent">
                <h1>Edward Wu</h1>
                <div class="introduction-person">
                    <div style="background-image: url('edward-intro.png');" class="introduction-img"></div>
                    <div class="introduction-text">
                        <p>Age: 16</p>
                        <p>School: Stuyvesant High School</p>
                        <p>Interested subjects: Math, CS, Chem, Physics, Stat</p>
                        <p>Hobbies: Town of Salem, Algodoo marble race, Korean</p>
                        <p>Least favorite person in team: Justin</p>
                    </div>
                </div>
                </div>

                <div id="Justin Zou" style ="background-color:#75B884" class="tabcontent">
                <h1>Justin Zou</h1>
                <div class="introduction-person">
                    <div style="background-image: url('justin-intro.jpeg');" class="introduction-img"></div>
                    <div class="introduction-text">
                        <p>Age: 17</p>
                        <p>School: Stuyvesant High School</p>
                        <p>Interested subjects:CS</p>
                        <p>Hobbies: Video Games, Manga</p>
                        <p>Least favorite person in team: Wonjong</p>
                    </div>
                </div>
                </div>
            </div>
            <script>document.getElementById("defaultOpen").click();</script>
        </div>
        
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Features</h3>
                            <ul>
                                <li><a href="#">Animate</a></li>
                                <li><a href="#">12 Principles</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Members</h3>
                            <ul>
                                <li><a href="#">Wonjong Park</a></li>
                                <li><a href="#">Edward Wu</a></li>
                                <li><a href="#">Justin Zou</a></li>
                                <li><a href="#">Eric Wang(Former)</a></li>
                                <li><a href="#">Victor Jiao(Mentor)</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <div class="email-form">
                                <form action="includes/feedback_form.php" method="post">
                                    <input class="email1" type="text" name="email_address" placeholder="Email Address">
                                    <textarea placeholder="Your feedback" class ="email2" name="feedback" cols="50" rows="10" ></textarea>
                                    <input class="email-button" type="submit" name="send">
                                </form>
                            </div>

                        </div>
                    </div>
                    <p class="copyright">EnLiven © 2021</p>
                </div>
            </footer>
        </div>

    </body>

</html>