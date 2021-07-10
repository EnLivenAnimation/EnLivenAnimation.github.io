jQuery(window).load(function () {
    popUp();
});

let a3 = false;
let counter = 0;
function popUp(){
    console.log("Pop up 1 start");
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";
    console.log("Pop up 1 done");
    pucai++;
    console.log("pucai = " + pucai);
}
let addFirstKeyFrame = false;

function popUp2(){
    console.log("Pop up 2 start");
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
    addFirstKeyFrame = true;
    console.log("Pop up 2 done");
    pucai++;
    console.log("pucai = " + pucai);
}
function popUp3(){
    console.log("Pop up 3 start");
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
    allSprites[1].alpha = 1;
    console.log("Pop up 3 done");
    pucai++;
    console.log("pucai = " + pucai);
}
function popUp4(){
    console.log("Pop up 4 start");
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
    console.log("Pop up 4 done");
    pucai++;
    console.log("pucai = " + pucai);
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
function turnOff4(){
    var popup2 = document.getElementById("myPopup4");
    popup2.classList.toggle("show");
    var x = document.getElementById("dim");
    x.style.filter = "brightness(100%)";
}
function outlineOff2(){
    removeCircle(1);
    allSprites[2].alpha = 1;
}
function outlineOff3(){
    removeCircle(2);
    allSprites[3].alpha = 1;
}
function outlineOff4(){
    removeCircle(3);
    allSprites[4].alpha = 1;
}
function outlineOff5(){
    removeCircle(4);
    allSprites[5].alpha = 1;
}
function outlineOff6(){
    removeCircle(5);
    allSprites[6].alpha = 1;
}
function outlineOff7(){
    removeCircle(6);
    allSprites[7].alpha = 1;
}
function outlineOff8(){
    removeCircle(7);
    allSprites[8].alpha = 1;
}
function outlineOff9(){
    removeCircle(8);
    allSprites[9].alpha = 1;
}
function outlineOff10(){
    removeCircle(9);
    allSprites[10].alpha = 1;
}
function outlineOff11(){
    removeCircle(10);
    allSprites[11].alpha = 1;
}
function outlineOff12(){
    removeCircle(11);
    allSprites[12].alpha = 1;
}
function outlineOff13(){
    removeCircle(12);
    allSprites[13].alpha = 1;
}
function outlineOff14(){
    removeCircle(13);
    allSprites[14].alpha = 1;
}
function outlineOff15(){
    removeCircle(14);
    allSprites[15].alpha = 1;
}
function outlineOff16(){
    removeCircle(15);
    allSprites[16].alpha = 1;
}
function outlineOff17(){
    removeCircle(16);
    allSprites[17].alpha = 1;
}
function outlineOff18(){
    removeCircle(17);
    allSprites[18].alpha = 1;
}
function outlineOff19(){
    removeCircle(18);
    allSprites[19].alpha = 1;
}
function outlineOff20(){
    removeCircle(19);
    allSprites[20].alpha = 1;
}
function outlineOff21(){
    removeCircle(20);
    allSprites[20].alpha = 1;
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
    interactive(0);
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
    {
    addKeyframe();
    popUp3();
    document.getElementById("addButton").setAttribute("onclick","addKeyframe();")}
};
//displaySprite()
//
//PopUpText

let popUpCommandsArray = [
    function(){popUp();}, 
    function(){popUp2();}, 
    function(){popUp3();}, 
    function(){popUp4();}
];