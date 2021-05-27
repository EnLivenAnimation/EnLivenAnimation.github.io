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
    backgroundColor: 0xe6e6e6
  }
);

document.getElementById("canvas").appendChild(app.view);

let state, KFButton, allSprites = [], texture2;
let texture,sprite, button, button2, button3, button4, button5, button6, button7, button8, button9, x, y, w, h;

loader
  .add("res/img/circle.png")
  .add("res/img/background.jpg")
  .add("res/img/square.jpg")
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
  
  let boneTexture = PIXI.Texture.from("res/img/circle.png");
  PurpleButton = displaySprite(boneTexture, 400, 400, 80, 120, 0xcc00cc);
  BlueButton = displaySprite(boneTexture, 600, 150, 200, 150, 0x0000ee);
  YellowButton = displaySprite(boneTexture, 500, 150, 100, 100, 0xdddd00, BlueButton);
  OrangeButton = displaySprite(boneTexture, 400, 150, 150, 50, 0xffa500, YellowButton);
  disableButtons();
}

const atlas = loadFile("./res/atlas/atlas.txt");
const elements = readElements(atlas);
const coordinates = readCoordinates(atlas);
const parents = readParents(atlas);
