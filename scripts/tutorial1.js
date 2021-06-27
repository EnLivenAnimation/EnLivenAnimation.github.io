jQuery(window).load(function () {
    popUp();
});
let counter = 0;
function popUp(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";   
}
function popUp2(){
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";   
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
}

function outLine(){
    let circle = PIXI.Texture.from("res/img/circle.png");
    displaySprite(circle, 20, 450, 120, 120, 00000000, null);
}
outLine();
function removeCirlce(){

    
}
//displaySprite()
//
//PopUpText