jQuery(window).load(function () {
    popUp();
});

let a3 = false;
let counter = 0;
{
function popUp(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";
    pucai++;
}

function popUp2(){
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
    pucai++;
}
function popUp3(){
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
    allSprites[1].alpha = 1;
    pucai++;
}
function popUp4(){
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
    pucai++;
    // Looping2();
}
function popUp5(){
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
   
}
function turnOff5(){
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(100%)";  
    waitUntilKFCreated();
}

function turnOff(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    var x = document.getElementById("dim");
    x.style.filter = "brightness(100%)";   
}
function turnOff2(){
    var popup2 = document.getElementById("myPopup1");
    popup2.classList.toggle("show");
    var x = document.getElementById("dim");
    x.style.filter = "brightness(100%)"; 
    removeCircle(0); 
}
function turnOff3(){
    var popup3 = document.getElementById("myPopup3");
    popup3.classList.toggle("show");
    var x = document.getElementById("dim");
    x.style.filter = "brightness(100%)"; 
    Looping();
}
}
function turnOff4(){
    var popup2 = document.getElementById("myPopup4");
    popup2.classList.toggle("show");
    var x = document.getElementById("dim");
    x.style.filter = "brightness(100%)";
    //Looping2();
    removeCircle(1); 
    waitUntilKFCreated();
}
function outlineOff(n){
    removeCircle(n);
    allSprites[n+1].alpha = 1;
    pucai++;
    console.log("outline " + n + " is off");
    Looping2();
}
let pop5 = true;
function waitUntilKFCreated(){
    setTimeout(function(){
        console.log("waiting for KF to be created");
        if (currentOutline == 5 && pop5){
            popUp5();
            pop5 = false;
        }
        else if (justaddedkf){
            outlineOff(currentOutline);
            currentOutline++;
            justaddedkf = false;
            //pop5 = false;   
        }
        else{
            waitUntilKFCreated();
        }
    }, 1000);
} 

function Looping2(){
    setTimeout(function(){ 
        if (Math.abs(allSprites[21].visualX - allSprites[currentOutline].visualX) <= 10 && Math.abs(allSprites[21].visualY - allSprites[currentOutline].visualY) <= 10){ 
          waitUntilKFCreated();
        }
        else{
            Looping2();
        }
    }, 1000);
}

let outlineCoords = [];
function removeCircle(i){
    allSprites[i].alpha = 0;
}
function enableCircle(i){
    allSprites[i].alpha = 1;
}
function interactive(i){
    allSprites[i].interactive = false;
}

let firstframedoesntexist = true;
let justaddedkf = false;
function addKeyframe2(){
    addKeyframe();

    // console.log(allSprites[0].timeline.length);
    if (firstframedoesntexist){
        firstframedoesntexist = false;
        popUp3();
    }
    else{
        justaddedkf = true;
        console.log("justaddedkf is now on");
    }
}
let popUpCommandsArray = [
    function(){popUp();}, 
    function(){popUp2();}, 
    function(){popUp3();}, 
    function(){popUp4();}
];