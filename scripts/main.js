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
let background;  
function setup() {
  const bg = PIXI.Texture.from("res/img/background.jpg");
  background = new PIXI.Sprite(PIXI.loader.resources["res/img/justin-sheet.png"].texture);
  background.width = app.screen.width;
  background.height = app.screen.height;
  background.alpha = 0;
  background.interactive = true;
  background.on('click', disableButtons);
  app.stage.addChild(background);
  // testingTmp();
  // testOnion();
}
let mouseX = 0;
let mouseY = 0;
let actualMouseY = 0;
const itr = app.renderer.plugins.interaction;
  itr.on('mousemove', ()=>{
     mouseX = itr.mouse.global.x;
     mouseY = app.screen.height - itr.mouse.global.y;
     actualMouseY = itr.mouse.global.y;
  })
const atlas = loadFile("./res/atlas/atlas.txt");
const elements = readElements(atlas);
const coordinates = readCoordinates(atlas);
const parents = readParents(atlas);
