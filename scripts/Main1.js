let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let app = new Application({ 
    width: document.getElementById("canvas").offsetWidth,
    height: document.getElementById("canvas").offsetHeight,
    antialias: true, 
    transparent: false, 
    resolution: 1,
    backgroundColor: 0xFFFFFF
  }
);

document.getElementById("canvas").appendChild(app.view);

let state, KFButton, allSprites = [], texture2;
let texture,sprite, button, button2, button3, button4, button5, button6, button7, button8, button9, x, y, w, h;

loader
  .add("res/img/circle.png")
  .add("res/img/background.jpg")
  .add("res/img/square.jpg")
  .add("res/img/justin-sheet.png")
  .add("res/img/triangle.png")
  .load(setup)



function setup() {
  const bg = PIXI.Texture.from("res/img/background.jpg");
  var background = new PIXI.Sprite(bg);
  background.width = app.screen.width;
  background.height = app.screen.height;
  background.alpha = 0;
  background.interactive = true;
  background.on('click', disableButtons); 
  app.stage.addChild(background);
  outline();
  Looping();
}

let a,b,c,d,e,f,g,hi,j,k,l,m,n,o,p,q,r,s,t,u,v,z;
function outline(){
    let circle = PIXI.Texture.from("res/img/circle.png");
    z = displaySprite(circle, 5, 486, 120, 120, 00000000, null);
    a = displaySprite2(circle, 71, 416, 120, 120, 00000000, null,0);
    c = displaySprite2(circle, 133, 370, 120, 120, 00000000, null,0);
    d = displaySprite2(circle, 203, 261, 120, 120, 00000000, null,0);
    e = displaySprite2(circle, 259, 174, 102, 130, 00000000, null,-19);
    f = displaySprite2(circle, 306, 108,  84, 149, 00000000, null,-19);
    g = displaySprite2(circle, 368, 38,  154, 75, 00000000, null,-1);
    hi = displaySprite2(circle, 427, 118,137, 93, 00000000, null,-66);
    v = displaySprite2(circle, 460, 198, 120, 92, 00000000, null,-66);
    j = displaySprite2(circle, 495, 264, 120, 92, 00000000, null,-66);
    k = displaySprite2(circle, 532, 273, 120, 92, 00000000, null,-66);
    l = displaySprite2(circle, 581, 237, 120, 92, 00000000, null,-66);
    m = displaySprite2(circle, 608, 175, 120, 92, 00000000, null,-66);
    n = displaySprite2(circle, 620, 133, 120,119, 00000000, null,-29);
    o = displaySprite2(circle, 707, 31, 124, 63, 00000000, null,1);
    p = displaySprite2(circle, 765, 125, 120, 77, 00000000, null,-43);
    q = displaySprite2(circle, 790, 171, 120, 120, 00000000, null,-43);
    r = displaySprite2(circle, 825, 193, 120, 120, 00000000, null,-43);
    s = displaySprite2(circle, 842, 158, 120, 120, 00000000, null,-43);
    t = displaySprite2(circle, 858, 113, 120, 120, 00000000, null,-43);
    u = displaySprite2(circle, 868, 89, 120, 120, 00000000, null,1);
    for (i = 1; i < 21;i++){
        interactive(i);
        removeCircle(i);
    }
    interactive(0);
    outlineCoords = [
        [5, 486],
        [71, 416],
        [133,allSprites[2].visualY],
        [203,allSprites[3].visualY],
        [259,allSprites[4].visualY],
        [306,allSprites[5].visualY],
        [368,allSprites[6].visualY],
        [427,allSprites[7].visualY],
        [460,allSprites[8].visualY],
        [495,allSprites[9].visualY],
        [532,allSprites[10].visualY],
        [581,allSprites[11].visualY],
        [608,allSprites[12].visualY],
        [620,allSprites[13].visualY],
        [707,allSprites[14].visualY],
        [765,allSprites[15].visualY],
        [790,allSprites[16].visualY],
        [825,allSprites[17].visualY],
        [842,allSprites[18].visualY],
        [858,allSprites[19].visualY],
        [868,allSprites[20].visualY]
    ]
}

let currentOutline = 0.
let pucai = 0; // pucai = popUpCommandsArrayIndex
function Looping(){
    setTimeout(function(){ 
      if (allSprites.length == 22 && currentOutline < 22){
        if (Math.abs(allSprites[21].visualX - allSprites[currentOutline].visualX) <= 10 && Math.abs(allSprites[21].visualY - allSprites[currentOutline].visualY) <= 10){
          currentOutline++;
          popUpCommandsArray[pucai]();
        }
        else{
          Looping();  
        }
      }
      else{
        Looping();
      }
    }, 1000);
}

const atlas = loadFile("./res/atlas/atlas.txt");
const elements = readElements(atlas);
const coordinates = readCoordinates(atlas);
const parents = readParents(atlas);