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

let currentOutline = 0.
let outlineCoords = [
  [5, 486],
  [71, 416]
]
let pucai = 0; // pucai = popUpCommandsArrayIndex
function Looping(){
    setTimeout(function(){ 
      // console.log(allSprites[21].visualX);
      if (allSprites.length == 22 && currentOutline < 22){
        console.log(Math.abs(allSprites[21].visualY));
        // console.log(Math.abs(allSprites[21].visualX-5) <= 10);
        if (Math.abs(allSprites[21].visualX - allSprites[currentOutline].visualX) <= 10 && Math.abs(allSprites[21].visualY - allSprites[currentOutline].visualY) <= 10){
          console.log("Success");
          currentOutline++;
          popUpCommandsArray[pucai]();
        }
        else{
          Looping();
        }
      }
      // else if(allSprites.length == 22 && Math.abs(allSprites[21].visualY -66) <= 2 && Math.abs(allSprites[21].visualX-71) <= 2){
      //   popUp4();
      // }
      else{
        Looping();
      }
    }, 1000);
}







const atlas = loadFile("./res/atlas/atlas.txt");
const elements = readElements(atlas);
const coordinates = readCoordinates(atlas);
const parents = readParents(atlas);