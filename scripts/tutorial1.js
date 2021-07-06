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
function popUp2(){
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show"); 
    var x = document.getElementById("dim");
    x.style.filter = "brightness(50%)";  
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
    z.interactive = false;
    a.interactive = false;
    k.interactive = false;
    l.interactive = false;
    m.interactive = false;
    n.interactive = false;
    o.interactive = false;
    p.interactive = false;
    q.interactive = false;
    r.interactive = false;
    s.interactive = false;
    t.interactive = false;
    u.interactive = false;
    c.interactive = false;
    d.interactive = false;
    e.interactive = false;
    f.interactive = false;
    g.interactive = false;
    h.interactive = false;
    v.interactive = false;
    j.interactive = false;
    a.alpha = 0;
    d.alpha = 0;
    e.alpha = 0;
    f.alpha = 0;
    g.alpha = 0;
    h.alpha = 0;
    v.alpha = 0;
    j.alpha = 0;
    k.alpha = 0;
    l.alpha = 0;
    m.alpha = 0;
    n.alpha = 0;
    o.alpha = 0;
    p.alpha = 0;
    q.alpha = 0;
    r.alpha = 0;
    s.alpha = 0;
    t.alpha = 0;
    u.alpha = 0;
    c.alpha = 0;
    }
}
function removeCircle(i){
    allSprites[i].alpha = 0;
}


document.getElementById("keyFrame").onclick = function(){
    a3 = true;
    addKeyframe();
    popUp3();
    console.log("SMTH IS HAPPENING");
};
//displaySprite()
//
//PopUpText