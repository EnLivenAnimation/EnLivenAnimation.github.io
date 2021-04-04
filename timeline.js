let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let app = new PIXI.Application({ 
    width: 2000,         // default: 800
    height:1000,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1,       // default: 1
    backgroundColor: 0x0fdd00
    }
);
document.body.appendChild(app.view);

let frame = 0;

data = [];

t0 = [];
t1 = [];

data.push(t0);
data.push(t1);

loader
  .add("justin-sheet.png")
  .add("button.jpg")
  .load(setup);

//setup Pixi renderer
var renderer = PIXI.autoDetectRenderer(600, 400, {
    backgroundColor: 0x000000
  });
document.body.appendChild(renderer.view);
  
// create new stage
var stage = new PIXI.Container();

function setup() {

    let texture2 = PIXI.Texture.from("button.jpg");
    button = new Sprite(texture2);
    button.x = 400;
    button.y = 400;
    button.scale.set(0.1);
    app.stage.addChild(button);

    button.interactive = true;
    button.buttonMode = true;
    button.anchor.set(0.5);

    button
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', onDragMove);

    button2 = new Sprite(texture2);
    button2.x = 100;
    button2.y = 400;
    button2.scale.set(0.1);
    app.stage.addChild(button2);

    button2.interactive = true;
    button2.buttonMode = true;
    button2.anchor.set(0.5);

    button2
      .on('pointerdown', onDragStart2)
      .on('pointerup', onDragEnd2)
      .on('pointerupoutside', onDragEnd2)
    //   .on('pointermove', onDragMove);

//Start the game loop by adding the `gameLoop` function to
//Pixi's `ticker` and providing it with a `delta` argument.
app.ticker.add(delta => gameLoop(delta));
}
function gameLoop(delta){

}
// create helpful message
var style = {
font: '18px Courier, monospace',
fill: '#ffffff'
};

const texture23 = PIXI.Texture.from('justin-sheet.png');

// create graphic object called circle then draw a circle on it
var circle = new PIXI.Sprite(texture23);
app.stage.addChild(circle);


// designate circle as being interactive so it handles events
circle.interactive = true;
circle.width = 180;
circle.height = 210;

console.log(circle.width)
console.log(circle.height)

// create hit area, needed for interactivity
circle.hitArea = new PIXI.Rectangle(circle.x, circle.y, circle.width, circle.height);

circle.buttonMode = true;
circle.rotation = 0;
let degrees = circle.rotation * 180/Math.PI;

// make circle non-transparent when mouse is over it
circle.mouseover = function(mouseData) {
// circle
//   .on('pointerdown', onDragStart)
//   .on('pointerup', onDragEnd)
//   .on('pointerupoutside', onDragEnd)
//   .on('pointermove', onDragMove);
var message = new PIXI.Text(Math.round(0.5 * circle.width)+", "+ Math.round(0.5 * circle.height) + ', ' +  Math.round(degrees) + '°' + "," + this.scale.x + "," + this.scale.y, style);
message.x = 0;
message.y = 0;
/**
const x = event.data.global.x;
    const y = event.data.global.y;
*/
circle.message = message;
circle.addChild(message);
}
let a  = true;
// make circle half-transparent when mouse leaves
circle.mouseout = function(mouseData) {
circle.removeChild(circle.message);
delete circle.message;
}


function onDragStart1(event) {
 // we want to track the movement of this particular touch
 this.data = event.data;
 this.alpha = 0.5;
 this.dragging = true;
}

function onDragStart2(event) {
    // we want to track the movement of this particular touch
    this.data = event.data;
    // this.alpha = 0.8;
    this.dragging = true;
   }

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
    a = true;
}
function onDragEnd1() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
    a = true;

    if (frame == 0){
        if (t0.length == 0){
            t0.push(this.x);
            t0.push(this.y);
            t0.push(this.width);
            t0.push(this.height);
            t0.push(this.rotation);
        }
        else{
            t0[0] = this.x;
            t0[1] = this.y;
            t0[2] = this.width;
            t0[3] = this.height;
            t0[4] = this.rotation;
        }
    }
    else{
        if (t1.length == 0){
            t1.push(this.x);
            t1.push(this.y);
            t1.push(this.width);
            t1.push(this.height);
            t1.push(this.rotation);
        }
        else{
            t1[0] = this.x;
            t1[1] = this.y;
            t1[2] = this.width;
            t1[3] = this.height;
            t1[4] = this.rotation;
        }
    }
    console.log(data);
}

function onDragEnd2() {
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
    if (this.alpha == 1){
        frame = 1;
        this.alpha = 0.3;
        console.log("Now on Frame 1");
    }
    else{
        frame = 0;
        this.alpha = 1;
        console.log("Now on Frame 0");
    }
    a = true;
}


function onDragMove() {
    if (this.dragging) {
        const newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
    }
}
// start animating
animate();

function animate() {
requestAnimationFrame(animate);
// render the root container
renderer.render(stage);
};