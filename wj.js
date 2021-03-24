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


loader
  .add("res/img/justin-sheet.png")
  .add("res/img/circle.png")
  .load(setup);

let texture, texture2, sprite, button, button2, button3, button4, button5, button6, button7, button8, button9, x, y, w, h, a;

function setup() {
    var stuff = [212,320,83,266];
    let tmp = PIXI.Texture.from("res/img/justin-sheet.png");
    let texture2 = PIXI.Texture.from("res/img/circle.png");
    let texture3 = PIXI.Texture.from("res/img/circle.png");
    let texture4 = PIXI.Texture.from("res/img/circle.png");
    let texture5 = PIXI.Texture.from("res/img/circle.png");
    let texture6 = PIXI.Texture.from("res/img/circle.png");
    let texture7 = PIXI.Texture.from("res/img/circle.png");
    let texture8 = PIXI.Texture.from("res/img/circle.png");
    let texture9 = PIXI.Texture.from("res/img/circle.png");
    let texture10 = PIXI.Texture.from("res/img/circle.png");

    x = stuff[0];
    y = stuff[1];
    w = stuff[2];
    h = stuff[3];

    a = true;

    let crop = new Rectangle(x,y,w,h);
    tmp.frame = crop;
    sprite = new Sprite(tmp);
    app.stage.addChild(sprite);
    sprite.x = x;
    sprite.y = y;

    button = new Sprite(texture2);
    button2 = new Sprite(texture3);
    button3 = new Sprite(texture4);
    button4 = new Sprite(texture5);
    button5 = new Sprite(texture6);
    button6 = new Sprite(texture7);
    button7 = new Sprite(texture8);
    button8 = new Sprite(texture9);
    button9 = new Sprite(texture10);

    button.position.set(x, y);
    button.x += -w/2;
    button.y += -h/2;
    button2.position.set(x, y);
    button2.x += 0;
    button2.y += -h/2;
    button3.position.set(x, y);
    button3.x += w/2;
    button3.y += -h/2;
    button4.position.set(x, y);
    button4.x += w/2;
    button4.y += 0;
    button5.position.set(x, y);
    button5.x += w/2;
    button5.y += h/2;
    button6.position.set(x, y);
    button6.x += 0;
    button6.y += h/2;
    button7.position.set(x, y);
    button7.x += -w/2;
    button7.y += h/2;
    button8.position.set(x, y);
    button8.x += -w/2;
    button8.y += 0;
    button9.position.set(x, y);
    button9.x += 0;
    button9.y += -h/2-30;
  
    sprite.interactive = true;
    sprite.buttonMode = true;
    sprite.anchor.set(0.5);
    sprite.scale.set(1);
    app.stage.addChild(button);
    app.stage.addChild(button2);
    app.stage.addChild(button3);
    app.stage.addChild(button4);
    app.stage.addChild(button5);
    app.stage.addChild(button6);
    app.stage.addChild(button7);
    app.stage.addChild(button8);
    app.stage.addChild(button9);
    

    button.scale.set(0.01);
    button.interactive = true;
    button.buttonMode = true;
    button.anchor.set(0.5);

    button2.scale.set(0.01);
    button2.interactive = true;
    button2.buttonMode = true;
    button2.anchor.set(0.5);

    button3.scale.set(0.01);
    button3.interactive = true;
    button3.buttonMode = true;
    button3.anchor.set(0.5);

    button4.scale.set(0.01);
    button4.interactive = true;
    button4.buttonMode = true;
    button4.anchor.set(0.5);

    button5.scale.set(0.01);
    button5.interactive = true;
    button5.buttonMode = true;
    button5.anchor.set(0.5);

    button6.scale.set(0.01);
    button6.interactive = true;
    button6.buttonMode = true;
    button6.anchor.set(0.5);

    button7.scale.set(0.01);
    button7.interactive = true;
    button7.buttonMode = true;
    button7.anchor.set(0.5);

    button8.scale.set(0.01);
    button8.interactive = true;
    button8.buttonMode = true;
    button8.anchor.set(0.5);

    button9.scale.set(0.01);
    button9.interactive = true;
    button9.buttonMode = true;
    button9.anchor.set(0.5);

    sprite
      .on('pointerdown', onDragStart)
      .on('pointerup', onDragEnd)
      .on('pointerupoutside', onDragEnd)
      .on('pointermove', onDragMove)

    button
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B1);
    button2
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B2);
    button3
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B3);
    button4
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B4);
    button5
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B5);
    button6
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B6);
    button7
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B7);
    button8
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B8);
    button9
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', B9);

}

{
function B1(){
    if (this.dragging) {
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
        sprite.width = (Math.abs(2 * (this.x - sprite.x)));
        sprite.height = (Math.abs(2 * (this.y - sprite.y)));

        button2.position.set(sprite.x, this.y);
        button3.position.set(2 * sprite.x - this.x, this.y);
        button4.position.set(button3.x, sprite.y);
        button5.position.set(button3.x, 2 * sprite.y - this.y);
        button6.position.set(button2.x, button5.y);
        button7.position.set(this.x, button6.y);
        button8.position.set(this.x, button4.y);
        if(button2.y<button6.y){
            button9.position.set(button2.x , button2.y-30);
        }
        else{
            button9.position.set(button2.x , button2.y+30);
        }
    }
}

function B2(){
    if (this.dragging) {
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
        sprite.height = (Math.abs(2 * (this.y - sprite.y)));

        this.x = sprite.x;
        button.y = this.y;
        button3.y = this.y;
        button5.y = 2 * sprite.y - this.y;
        button6.y = button5.y;
        button7.y = button5.y;
        if(button2.y<button6.y){
            button9.y = button2.y-30;
        }
        else{
            button9.y = button2.y+30;
        }
    }
}

function B3(){
    if (this.dragging) {
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
        sprite.width = (Math.abs(2 * (this.x - sprite.x)));
        sprite.height = (Math.abs(2 * (this.y - sprite.y)));

        button.position.set(2 * sprite.x - this.x, this.y);
        button2.position.set(sprite.x, this.y);
        button4.position.set(button3.x, sprite.y);
        button5.position.set(button3.x, 2 * sprite.y - this.y);
        button6.position.set(button2.x, button5.y);
        button7.position.set(button.x, button6.y);
        button8.position.set(button.x, button4.y);
        if(button2.y<button6.y){
            button9.position.set(button2.x , button2.y-30);
        }
        else{
            button9.position.set(button2.x , button2.y+30);
        }
    }
}

function B4(){
    if (this.dragging) {
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
        sprite.width = (Math.abs(2 * (this.x - sprite.x)));

        this.y = sprite.y;
        button.x = 2 * sprite.x - this.x;
        button3.x = this.x;
        button5.x = this.x;
        button7.x = button.x;
        button8.x = button.x;
        if(button2.y<button6.y){
            button9.y = button2.y-30;
        }
        else{
            button9.y = button2.y+30;
        }
    }
}

function B5(){
    if (this.dragging) {
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
        sprite.width = (Math.abs(2 * (this.x - sprite.x)));
        sprite.height = (Math.abs(2 * (this.y - sprite.y)));

        button.position.set(2 * sprite.x - this.x, 2 * sprite.y - this.y);
        button2.position.set(sprite.x, button.y);
        button3.position.set(this.x, button.y);
        button4.position.set(this.x, sprite.y);
        button6.position.set(sprite.x, this.y);
        button7.position.set(button.x, this.y);
        button8.position.set(button.x, sprite.y);
        if(button2.y<button6.y){
            button9.position.set(button2.x , button2.y-30);
        }
        else{
            button9.position.set(button2.x , button2.y+30);
        }
    }
}

function B6(){
    if (this.dragging) {
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
        sprite.height = (Math.abs(2 * (this.y - sprite.y)));

        this.x = sprite.x;
        button7.y = this.y;
        button5.y = this.y;
        button2.y = 2 * sprite.y - this.y;
        button.y = button2.y;
        button3.y = button.y;
        if(button2.y<button6.y){
            button9.y = button2.y-30;
        }
        else{
            button9.y = button2.y+30;
        }
    }
}

function B7(){
    if (this.dragging) {
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
        sprite.width = (Math.abs(2 * (this.x - sprite.x)));
        sprite.height = (Math.abs(2 * (this.y - sprite.y)));

        button3.position.set(2 * sprite.x - this.x, 2 * sprite.y - this.y);
        button2.position.set(sprite.x, button3.y);
        button.position.set(this.x, button3.y);
        button4.position.set(this.x, sprite.y);
        button6.position.set(sprite.x, this.y);
        button5.position.set(button3.x, this.y);
        button8.position.set(button3.x, sprite.y);
        if(button2.y<button6.y){
            button9.position.set(button2.x , button2.y-30);
        }
        else{
            button9.position.set(button2.x , button2.y+30);
        }
    }
}

function B8(){
    if (this.dragging) {
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        a = false;
        sprite.width = (Math.abs(2 * (this.x - sprite.x)));

        this.y = sprite.y;
        button.x = this.x;
        button3.x = button4.x;
        button5.x = button3.x;
        button7.x = this.x;
        button4.x = 2 * sprite.x - this.x;
        if(button2.y<button6.y){
            button9.y = button2.y-30;
        }
        else{
            button9.y = button2.y+30;
        }
    }
}
}
function B9(){
    if (this.dragging) {
        let newPosition3 = this.data.getLocalPosition(this.parent);
        let angle = sprite.rotation;
        let direction = (sprite.x - button9.x)/100;
        a=false;
        if(direction >= 0){
            sprite.rotation -= direction * 0.001;
          }
        else{
            sprite.rotation -= direction * 0.001;
          }
        //
        button9.x = ((button9.x-sprite.x)*Math.cos(angle)+(button9.y-sprite.y)*Math.sin(angle));
        button9.y = ((button9.y-sprite.y)*Math.cos(angle) - (button9.x-sprite.x)*Math.sin(angle));
        button1.x = ((button1.x-sprite.x)*Math.cos(angle)+(button1.y-sprite.y)*Math.sin(angle));
        button1.y = ((button1.y-sprite.y)*Math.cos(angle) - (button1.x-sprite.x)*Math.sin(angle));
        
    }
    
}


// {
// function onDragScale_SideY() {
//     if (this.dragging) {
//         let newPosition2 = this.data.getLocalPosition(this.parent);
//         this.x = newPosition2.x;
//         this.y = newPosition2.y;
//         a = false;
//         sprite.height = (Math.abs(2 * (sprite.y - this.y)));
//         console.log(button2.y);
//     }
// }

// function onDragScale_SideX() {
//     if (this.dragging) {
//         let newPosition2 = this.data.getLocalPosition(this.parent);
//         this.x = newPosition2.x;
//         this.y = newPosition2.y;
//         a = false;
//         sprite.width = (Math.abs(2 * (sprite.x - this.x)));
//     }
// }

// function onDragScale_Corner() {
//     if (this.dragging) {
//         let newPosition2 = this.data.getLocalPosition(this.parent);
//         this.x = newPosition2.x;
//         this.y = newPosition2.y;
//         a = false;
//         sprite.width = (Math.abs(2 * (this.x - sprite.x)));
//         sprite.height = (Math.abs(2 * (this.y - sprite.y)));
//     }
// }
// }

function onDragStart(event) {
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

function onDragMove() {
    if (a){
        if (this.dragging) {
            const newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
            button2.position.set(sprite.x, sprite.y - (sprite.height / 2));
            button6.position.set(sprite.x, sprite.y + (sprite.height / 2));
            button8.position.set(sprite.x - (sprite.width / 2), sprite.y);
            button4.position.set(sprite.x + (sprite.width / 2), sprite.y);
            button.position.set(button8.x, button2.y);
            button3.position.set(button4.x, button2.y);
            button5.position.set(button4.x, button6.y);
            button7.position.set(button8.x, button6.y);
            button9.position.set(button2.x , button2.y-30);
        }
    }
}

function onDragStart1(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd1() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
    a = true;
}

