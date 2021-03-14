let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;
    
const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

loader
  .add("images/justin-sheet.png")
  .load(setup);

let texture, texture2, head, torso;

function setup() {
    var stuff = [[31, 31, 176, 175],[21, 236, 156, 298],[372, 31, 87, 267],[225, 24, 105, 261],[373, 313, 100, 258],[212, 320, 83, 266]];

  let texture = PIXI.utils.TextureCache["images/justin-sheet.png"];

  let texture1 = new PIXI.Texture(texture);
  // display(31, 31, 176, 175, texture1);

  let texture2 = new PIXI.Texture(texture);
  // display(21, 236, 156, 298, texture2);

  let texture3 = new PIXI.Texture(texture);
  // display(372, 31, 87, 267, texture3);

  let texture4 = new PIXI.Texture(texture);
  // display(225, 24, 105, 261, texture4);

  let texture5 = new PIXI.Texture(texture);
  // display(373, 313, 100, 258, texture5);

  let texture6 = new PIXI.Texture(texture);
  // display(212, 320, 83, 266, texture6);

  var stuff2 = [texture1,texture2,texture3,texture4,texture5,texture6];

  for (let i = 5; i >= 0; i--){
      createBunny(stuff[i][0], stuff[i][1], stuff[i][2], stuff[i][3], stuff2[i]);
      let cat = createBunny(stuff[i][0], stuff[i][1], stuff[i][2], stuff[i][3], stuff2[i+1])
    }
}
const texture23 = PIXI.Texture.from('images/09.png');
const texture223 = PIXI.Texture.from('images/bone.jpg');
//let cat = new PIXI.Sprite(texture23);
let cat1 = new PIXI.Sprite(texture223);
function display(x, y, w, h, tex){
    rectangle = new Rectangle(x,y,w,h);
  
    tex.frame = rectangle;
  
    let part = new Sprite(tex);
  
    app.stage.addChild(part);
  
    part.x = x;
    part.y = y;
  }
let a = true;
function createBunny(x, y, w, h, tex){
    rectangle = new Rectangle(x,y,w,h);
  
    tex.frame = rectangle;
  
    let bunny = new Sprite(tex);
    let cat = new Sprite(tex);
  
    app.stage.addChild(bunny);
  
    bunny.x = x;
    bunny.y = y;
    bunny.addChild(cat);

    cat.interactive = true; 
    cat.buttonMode = true;
    cat.anchor.set(0.5)
    bunny.interactive = true;

    bunny.buttonMode = true;

    bunny.anchor.set(0.5);

    bunny.scale.set(0.5);

    bunny//parent
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
    cat
        .on('pointerdown', onDragStart1)
        .on('pointerup', onDragEnd1)
        .on('pointerupoutside', onDragEnd1)
        .on('pointermove', onDragMove1);

    // For mouse-only events
    // .on('mousedown', onDragStart)
    // .on('mouseup', onDragEnd)
    // .on('mouseupoutside', onDragEnd)
    // .on('mousemove', onDragMove);

    // For touch-only events
    // .on('touchstart', onDragStart)
    // .on('touchend', onDragEnd)
    // .on('touchendoutside', onDragEnd)
    // .on('touchmove', onDragMove);
}

function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragStart1(event) {
 // we want to track the movement of this particular touch
 this.data = event.data;
 this.alpha = 0.5;
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
}
function onDragMove() {
    if (this.dragging) {
        const newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
    }
}

function onDragMove() {
    if (a)
    {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
    }
}