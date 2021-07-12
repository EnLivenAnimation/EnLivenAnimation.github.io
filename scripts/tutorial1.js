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
    console.log("outline " + n + " is off");
    Looping2();
}

function waitUntilKFCreated(){
    setTimeout(function(){
        console.log("waiting for KF to be created");
        if (justaddedkf){
            // console.log(currentOutline);
            outlineOff(currentOutline);
            currentOutline++;
            justaddedkf = false;
        }
        else{
            waitUntilKFCreated();
        }
    }, 1000);
} 

function Looping2(){
    setTimeout(function(){ 
        // console.log(allSprites[currentOutline].visualX + ", " + allSprites[currentOutline].visualY);
        if (Math.abs(allSprites[21].visualX - allSprites[currentOutline].visualX) <= 10 && Math.abs(allSprites[21].visualY - allSprites[currentOutline].visualY) <= 10){ 
          waitUntilKFCreated();
        }
        else{
            Looping2();
        }
    }, 1000);
}


{// function outlineOff2(){
//     removeCircle(1);
//     allSprites[2].alpha = 1;
//     pucai++;
//     Looping2();
// }
// function outlineOff3(){
//     removeCircle(2);
//     allSprites[3].alpha = 1;
//     pucai++;  
//     //Looping2();
// }
// function outlineOff4(){
//     removeCircle(3);
//     allSprites[4].alpha = 1;
//     pucai++;
//     //Looping2();
// }
// function outlineOff5(){
//     removeCircle(4);
//     allSprites[5].alpha = 1;
//     pucai++;
//     //Looping2();
// }
// function outlineOff6(){
//     removeCircle(5);
//     allSprites[6].alpha = 1;
//     pucai++;
//     //Looping2();
// }
// function outlineOff7(){
//     removeCircle(6);
//     allSprites[7].alpha = 1;
//     pucai++;
//    //Looping2();
// }
// function outlineOff8(){
//     removeCircle(7);
//     allSprites[8].alpha = 1;
//     pucai++;
//    // Looping2();
// }
// function outlineOff9(){
//     removeCircle(8);
//     allSprites[9].alpha = 1;
//     pucai++;
//     //Looping2();
// }
// function outlineOff10(){
//     removeCircle(9);
//     allSprites[10].alpha = 1;
//     pucai++;
//    // Looping2();
// }
// function outlineOff11(){
//     removeCircle(10);
//     allSprites[11].alpha = 1;
//     pucai++;
//    // Looping2();
// }
// function outlineOff12(){
//     removeCircle(11);
//     allSprites[12].alpha = 1;
//     pucai++;
//     //Looping2();
// }
// function outlineOff13(){
//     removeCircle(12);
//     allSprites[13].alpha = 1;
//     pucai++;
//    // Looping2();
// }
// function outlineOff14(){
//     removeCircle(13);
//     allSprites[14].alpha = 1;
//     pucai++;
//     //Looping();
// }
// function outlineOff15(){
//     removeCircle(14);
//     allSprites[15].alpha = 1;
//     pucai++;
//     //Looping();
// }
// function outlineOff16(){
//     removeCircle(15);
//     allSprites[16].alpha = 1;
//     pucai++;
//     Looping();
// }
// function outlineOff17(){
//     removeCircle(16);
//     allSprites[17].alpha = 1;
//     pucai++;
//     Looping();
// }
// function outlineOff18(){
//     removeCircle(17);
//     allSprites[18].alpha = 1;
//     pucai++;
//     Looping();
// }
// function outlineOff19(){
//     removeCircle(18);
//     allSprites[19].alpha = 1;
//     pucai++;
//     Looping();
// }
// function outlineOff20(){
//     removeCircle(19);
//     allSprites[20].alpha = 1;
//     pucai++;
//     Looping();
// }
// function outlineOff21(){
//     removeCircle(20);
//     allSprites[20].alpha = 1;
//     pucai++;
//     Looping();
// }
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