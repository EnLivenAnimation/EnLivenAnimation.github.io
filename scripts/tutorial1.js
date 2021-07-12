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
    Looping2();
}

function waitUntilKFCreated(){
    setTimeout(function(){
        console.log("waiting for KF to be created");
        if (justAddedKf){
            console.log(match + " MATCH");
            outlineOff(currentOutline);
            currentOutline++;
            justAddedKf = false;
            match = false;
        }
        else{
            waitUntilKFCreated();
        }
    }, 1000);
} 

 

function Looping2(){
    setTimeout(function(){ 
        // console.log(allSprites[currentOutline].visualX + ", " + allSprites[currentOutline].visualY);
        if (Math.abs(allSprites[21].visualX - allSprites[currentOutline].visualX) <= 5 && Math.abs(allSprites[21].visualY - allSprites[currentOutline].visualY) <= 5 && letGo){ 
          waitUntilKFCreated();
          match = true;
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
let justAddedKf = false;
let match = true;
function addKeyframe2(){
    addKeyframe();
    console.log(match);

    if (firstframedoesntexist){
        firstframedoesntexist = false;
        popUp3();
    }
    else{
        justAddedKf = true;
        match = true;
        console.log("justaddedkf is now on");
    }
}
let popUpCommandsArray = [
    function(){popUp();}, 
    function(){popUp2();}, 
    function(){popUp3();}, 
    function(){popUp4();}
];