//setup Pixi renderer
var renderer = PIXI.autoDetectRenderer(600, 400, {
  backgroundColor: 0x000000
});
document.body.appendChild(renderer.view);

// create new stage
var stage = new PIXI.Container();

function setup() {

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

const texture23 = PIXI.Texture.from('images/09.png');

// create graphic object called circle then draw a circle on it
var circle = new PIXI.Sprite(texture23);
stage.addChild(circle);


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
// function onDragStart1(event) {
//  // we want to track the movement of this particular touch
//  this.data = event.data;
//  this.alpha = 0.5;
//  this.dragging = true;
// }

// function onDragEnd() {
//     this.alpha = 1;
//     this.dragging = false;
//     // set the interaction data to null
//     this.data = null;
//     a = true;
// }
// function onDragEnd1() {
//     this.alpha = 1;
//     this.dragging = false;
//     // set the interaction data to null
//     this.data = null;
//     a = true;
// }
// function onDragMove() {
//     if (this.dragging) {
//         const newPosition2 = this.data.getLocalPosition(this.parent);
//         this.x = newPosition2.x;
//         this.y = newPosition2.y;
//         a = false;
//     }
// }

// function onDragMove() {
//     if (a)
//     {
//     if (this.dragging) {
//         const newPosition = this.data.getLocalPosition(this.parent);
//         this.x = newPosition.x;
//         this.y = newPosition.y;
//     }
//     }
// }
// start animating
animate();

function animate() {
  requestAnimationFrame(animate);
  // render the root container
  renderer.render(stage);
};