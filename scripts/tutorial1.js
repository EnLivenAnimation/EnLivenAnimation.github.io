jQuery(window).load(function () {
    popUp();
});

let a3 = false;
let counter = 0;
function popUp(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";
}
let addFirstKeyFrame = false;
function popUp2(){
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
    addFirstKeyFrame = true;
}
function popUp3(){
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
    allSprites[1].alpha = 1;
}
function popUp4(){
    var popup = document.getElementById("myPopup4");
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
    removeCircle(0);
    
}
function turnOff3(){
    var popup3 = document.getElementById("myPopup3");
    popup3.classList.toggle("show");
    var x = document.getElementById("dim");
    x.style.filter = "brightness(100%)"; 
}
function turnOff4(){
    var popup2 = document.getElementById("myPopup4");
    popup2.classList.toggle("show");
    var x = document.getElementById("dim");
    x.style.filter = "brightness(100%)"; 

}
{
let a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
function outline(){
    let circle = PIXI.Texture.from("res/img/circle.png");
    z = displaySprite(circle, 5, 486, 120, 120, 00000000, null);
    a = displaySprite2(circle, 71, 416, 120, 120, 00000000, null,0);
    c = displaySprite2(circle, 133, 370, 120, 120, 00000000, null,0);
    d = displaySprite2(circle, 203, 261, 120, 120, 00000000, null,0);
    e = displaySprite2(circle, 259, 174, 102, 130, 00000000, null,-19);
    f = displaySprite2(circle, 306, 108, 84, 149, 00000000, null,-19);
    g = displaySprite2(circle, 368, 38, 154, 75, 00000000, null,-1);
    h = displaySprite2(circle, 427, 118, 137, 93, 00000000, null,-66);
    v = displaySprite2(circle, 460, 198, 98, 92, 00000000, null,-66);
    j = displaySprite2(circle, 495, 264, 98, 92, 00000000, null,-66);
    k = displaySprite2(circle, 532, 273, 98, 92, 00000000, null,-66);
    l = displaySprite2(circle, 581, 237, 98, 92, 00000000, null,-66);
    m = displaySprite2(circle, 608, 175, 98, 92, 00000000, null,-66);
    n = displaySprite2(circle, 620, 133, 74, 119, 00000000, null,-29);
    o = displaySprite2(circle, 707, 31, 124, 63, 00000000, null,1);
    p = displaySprite2(circle, 765, 125, 102, 77, 00000000, null,-43);
    q = displaySprite2(circle, 790, 171, 90, 88, 00000000, null,-43);
    r = displaySprite2(circle, 825, 193, 90, 88, 00000000, null,-43);
    s = displaySprite2(circle, 842, 158, 90, 88, 00000000, null,-43);
    t = displaySprite2(circle, 858, 113, 90, 88, 00000000, null,-43);
    u = displaySprite2(circle, 868, 89, 101, 75, 00000000, null,1);
    for (i = 1; i < 21;i++){
        interactive(i);
        removeCircle(i);
    }
  }
}
function removeCircle(i){
    allSprites[i].alpha = 0;
}
function enableCircle(i){
    allSprites[i].alpha = 1;
}
function interactive(i){
    allSprites[i].interactive = false;
}

function addKeyframePopUp(){
   if (addFirstKeyFrame)
    {addKeyframe();
    popUp3();
    document.getElementById("addButton").setAttribute("onclick","addKeyframe();")}
};
//displaySprite()
//
//PopUpText