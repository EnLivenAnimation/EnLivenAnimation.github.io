let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let app = new Application({ 
    width: 1300, 
    height: 1300,                       
    backgroundColor: 0xbfc5ce });
document.body.appendChild(app.view);

loader
    .add("./res/img/spritesheet.png")
    .add("res/img/button.png")
    .load(setup);

function setup() {
    // const spritesheet = PIXI.Texture.from("./res/img/spritesheet.png");
    const timeline = [];

    const button = PIXI.Texture.from("res/img/button.png");
    displayToggle(button, 0.1, 300, 300);
    displayTexture(button, 0.1, 600, 300);
}

const atlas = loadFile("./res/atlas/atlas.txt");
const elements = readElements(atlas);
const coordinates = readCoordinates(atlas);

const dict = {};
for (i = 0; i < elements.length; i++) {
    dict[elements[i]] = coordinates[i].split(",").map(Number);
}