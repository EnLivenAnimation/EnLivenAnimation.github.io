//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

//Create a Pixi Application
let app = new Application({ 
    width: 900, 
    height: 500,                       
    antialias: true, 
    transparent: false, 
    resolution: 1,
    backgroundColor: 0x0fdd00
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

let state, KFButton, allSprites = [], texture2;
let currentKF = 0;
let texture,sprite, button, button2, button3, button4, button5, button6, button7, button8, button9, x, y, w, h, ParentMoving = false;

loader
  .add("images/09.png")
  .add("images/bone.jpg")
  .load(setup)

function setup(){
    const play_button = PIXI.Texture.from('images/09.png');
    var background = new PIXI.Sprite(play_button);
    background.width = app.screen.width;
    background.height = app.screen.height;
    background.alpha = 0;
    background.interactive = true;
    background.on('click', disableButtons); 
    app.stage.addChild(background);

    let textureJ = PIXI.Texture.from("images/09.png");
    const texture23 = PIXI.Texture.from('images/09.png');
    playButton = displayNonSprites(textureJ, 100, 300, 0.6);

    playButton
      .on('pointerdown', PStart)
      .on('pointerup', Playing)
      .on('pointerupoutside', Playing)
      
    let texture2 = PIXI.Texture.from("images/bone.jpg");

    addButton = displayNonSprites(texture2, 100, 400, 0.08);
    addButton
        .on('pointerdown', PStart)
        .on('pointerup', addKF)
        .on('pointerupoutside', addKF)

    removeButton = displayNonSprites(texture2, 100, 200, 0.08);
    removeButton.tint = 0xff2211;
    removeButton
        .on('pointerdown', PStart)
        .on('pointerup', removeKF)
        .on('pointerupoutside', removeKF)

    pickButton = displayNonSprites(texture2, 100, 100, 0.08);
    pickButton.tint = 0xdddddd;
    pickButton
        .on('pointerdown', PStart)
        .on('pointerup', pickKF)
        .on('pointerupoutside', pickKF)
    
    PurpleButton = displaySprite(texture2, 400, 400, 0.08, 0xcc00cc);
    BlueButton = displaySprite(texture2, 600, 150, 0.2, 0x0000ee);
}

let scalingFunctions = [B1,B2,null,null,null,null,null,null,null];

function displaySprite(texture, x, y, scale, tint){
    DisplayedSprite = new Sprite(texture);
    DisplayedSprite.x = x;
    DisplayedSprite.y = y;
    DisplayedSprite.originalWidth = DisplayedSprite.width;
    DisplayedSprite.originalHeight = DisplayedSprite.height;
    DisplayedSprite.scale.set(scale);
    DisplayedSprite.d = [0, 0, 0, 0, 0];
    DisplayedSprite.interactive = true;
    DisplayedSprite.buttonMode = true;
    DisplayedSprite.anchor.set(0.5);
    DisplayedSprite.tint = tint;
    DisplayedSprite.timeline = [];
    DisplayedSprite
      .on('pointerdown', onDragStartSprite)
      .on('pointerup', onDragEndSprite)
      .on('pointerupoutside', onDragEndSprite)
      .on('pointermove', onDragMoveSprite)
      .on('click', enableButtons);

    app.stage.addChild(DisplayedSprite);
    allSprites.push(DisplayedSprite);
    w = DisplayedSprite.width;
    h = DisplayedSprite.height;
    DisplayedSprite.originalScale = scale;


    let Buttontexture = PIXI.Texture.from("images/bone.jpg");
    button1 =  new Sprite(Buttontexture);
    button2 =  new Sprite(Buttontexture);
    button3 =  new Sprite(Buttontexture);
    button4 =  new Sprite(Buttontexture);
    button5 =  new Sprite(Buttontexture);
    button6 =  new Sprite(Buttontexture);
    button7 =  new Sprite(Buttontexture);
    button8 =  new Sprite(Buttontexture);
    buttonR =  new Sprite(Buttontexture);

    DisplayedSprite.buttonArray = [button1, button2, button3, button4, button5, button6, button7, button8, buttonR];

    let m = DisplayedSprite.originalWidth/2;
    let n = DisplayedSprite.originalHeight/2;
    DisplayedSprite.m = m;
    DisplayedSprite.n = n;
    xs = [-m, 0, m, m, m, 0, -m, -m, 0];
    ys = [-n, -n, -n, 0, n, n, n, 0, -n*(1+40/DisplayedSprite.height)];
    
    for (i in DisplayedSprite.buttonArray){
        currButton = DisplayedSprite.buttonArray[i];
        DisplayedSprite.addChild(currButton);
        currButton.anchor.set(0.5);
        currButton.interactive = true;
        currButton.buttonMode = true;
        currButton.x = xs[i];
        currButton.y = ys[i];

        currButton
            .on('pointerdown', onDragStartButton)
            .on('pointerup', onDragEndButton)
            .on('pointerupoutside', onDragEndButton);

        currButton.oldx = currButton.x;
    }

    DisplayedSprite.buttonArray[0]
        .on('pointermove', B1);
    DisplayedSprite.buttonArray[1]
        .on('pointermove', B2);
    DisplayedSprite.buttonArray[2]
        .on('pointermove', B3);
    DisplayedSprite.buttonArray[3]
        .on('pointermove', B4);
    DisplayedSprite.buttonArray[4]
        .on('pointermove', B5);
    DisplayedSprite.buttonArray[5]
        .on('pointermove', B6);
    DisplayedSprite.buttonArray[6]
        .on('pointermove', B7);
    DisplayedSprite.buttonArray[7]
        .on('pointermove', B8);
    DisplayedSprite.buttonArray[8]
        .on('pointermove', BRotate);

    resizeButtons(DisplayedSprite);
    return DisplayedSprite;
}

let interactiveButtons = false;
let lastModifiedSprite = null;

function resizeButtons(sprite){ // might be hard coded
    for (i in sprite.buttonArray){
        sprite.buttonArray[i].width = 10000/sprite.width;
        sprite.buttonArray[i].height = 10000/sprite.height;
    }
    sprite.buttonArray[8].position.set(0, -sprite.n*(1+40/sprite.height));
}

{
function BRotate(){
    if (this.dragging && interactiveButtons) {
        let sprite = this.parent;
        sprite.interactive = false;
        const newPosition3 = this.data.getLocalPosition(this.parent);
        this.x = newPosition3.x;
        this.y = newPosition3.y;
        theta = Math.atan2(-this.y, this.x);
        sprite.rotation+= Math.PI/2 - theta;
        this.position.set(0, -sprite.n*(1+40/sprite.height))
        a = false;
        lastModifiedSprite = sprite;
    }
}
    // START SCALING FUNCTIONS
function B1(){
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x + 500) * sprite.width / -500;
        this.x = -500;

        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y + 500) * sprite.height / -500;
        this.y = -500;

        lastModifiedSprite = sprite;
    }
}
function B2(){
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y + 500) * sprite.height / -500;
        this.x = 0;
        this.y = -500;
        lastModifiedSprite = sprite;
        resizeButtons(sprite);
    }
}
function B3(){
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x - 500) * sprite.width / 500;
        this.x = 500;

        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y + 500) * sprite.height / -500;
        this.y = -500;

        lastModifiedSprite = sprite;
    }
}
function B4(){
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x - 500) * sprite.width / 500;
        this.y = 0;
        this.x = 500;
        lastModifiedSprite = sprite;
        resizeButtons(this.parent);
    }
}
function B5(){
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x - 500) * sprite.width / 500;
        this.x = 500;

        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y - 500) * sprite.height / 500;
        this.y = 500;

        lastModifiedSprite = sprite;
    }
}
function B6(){
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y - 500) * sprite.height / 500;
        this.x = 0;
        this.y = 500;
        lastModifiedSprite = sprite;
    }
}
function B7(){
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x + 500) * sprite.width / -500;
        this.x = -500;

        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y - 500) * sprite.height / 500;
        this.y = 500;

        lastModifiedSprite = sprite;
    }
}

function B8(){
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x + 500) * sprite.width / -500;
        this.y = 0;
        this.x = -500;
        lastModifiedSprite = sprite;
    }
}
// END SCALING FUNCTIONS
}

{
function enableButtons(eventData){
    for (i in this.buttonArray){
        currButton = this.buttonArray[i];
        currButton.alpha = 1;
        currButton.interactive = true;
    }
}

function disableButtons(eventData){
    for (i in allSprites){
        sprit = allSprites[i];
        for (j in sprit.buttonArray){
            currButton = sprit.buttonArray[j];
            currButton.alpha = 0;
            currButton.interactive = false;
        }
    }
}
}

function displayNonSprites(texture, x, y, scale){
    sprit = new Sprite(texture);
    sprit.x = x;
    sprit.y = y;
    sprit.scale.set(scale);
    sprit.d = [];

    sprit.interactive = true;
    sprit.buttonMode = true;
    sprit.anchor.set(0.5);

    app.stage.addChild(sprit);
    return sprit;
}
let parentMoving = false;
{
    function onDragStartButton(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
        interactiveButtons = true;
    }
    function onDragStartSprite(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }
    function PStart(event) {
        this.data = event.data;
        this.alpha = 0.5;
    }
    function onDragEndButton() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;
        interactiveButtons = false;
        lastModifiedSprite.interactive = true;
        lastModifiedSprite.alpha = 1;
        lastModifiedSprite.dragging = false;
        resizeButtons(this.parent);
    }
    function onDragEndSprite() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;
        resizeButtons(this);
    }
    function onDragMove() {
        if (this.dragging) 
        {
            const newPosition2 = this.data.getLocalPosition(this.parent);
            this.x = newPosition2.x;
            this.y = newPosition2.y;
            parentMoving = false;
        }
    }
    function onDragMoveSprite() {
        if (this.dragging) 
        {
            const newPosition2 = this.data.getLocalPosition(this.parent);
            this.x = newPosition2.x;
            this.y = newPosition2.y;
            parentMoving = false;
        }
    }
}

let Ntweens = 30;
let frame;
let fps = 24;
let NumberKeyFrames = 0;
let CurrentKeyFrame = 0;

{
function move(){
    setTimeout(function (){

        if (frame < Ntweens){
            console.log(frame);

            frame++;

            for (s in allSprites){
                spri = allSprites[s];
                spri.x += spri.d[0];
                spri.y += spri.d[1];
                spri.width += spri.d[2];
                spri.height += spri.d[3];
                spri.rotation += spri.d[4];
                resizeButtons(spri);
            }

            move();
        }
        else{
            incrementKF();
        }
      
    }, 1000 / fps);
}

function playKF(){
    setTimeout(function (){

        if (CurrentKeyFrame < NumberKeyFrames - 1){
            console.log("KF" + CurrentKeyFrame);

            for (s in allSprites){
                spri = allSprites[s];
                console.table(spri.timeline);

                spri.position.set(spri.timeline[CurrentKeyFrame][0], spri.timeline[CurrentKeyFrame][1]);
                spri.width = spri.timeline[CurrentKeyFrame][2];
                spri.height = spri.timeline[CurrentKeyFrame][3];
                spri.rotation = spri.timeline[CurrentKeyFrame][4];
                
                for (j in spri.d){
                    spri.d[j] = (spri.timeline[CurrentKeyFrame+1][j] - spri.timeline[CurrentKeyFrame][j]) / Ntweens;
                }
            }

            frame = 0;

            move();
        }
      
    }, 1000 / fps);
}

function incrementKF(){
    if (CurrentKeyFrame < NumberKeyFrames - 1){
        CurrentKeyFrame++;
    }
    this.playKF();
}

function Playing() {
    this.alpha = 1;
    if (allSprites.length > 0){
        console.log(allSprites[0]);
        if (allSprites[0].timeline.length == 0){
            console.log("Not enough values");
        }
        else{
            console.log()
            CurrentKeyFrame = 0;
            NumberKeyFrames = PurpleButton.timeline.length;
            playKF();
        }
    }
    else{
        console.log()
        CurrentKeyFrame = 0;
        NumberKeyFrames = PurpleButton.timeline.length;
        playKF();
    }
}

function pickKF(){
    if (allSprites.length > 0){
        if (allSprites[0].timeline.length == 0){
            console.log("You have no keyframes.");
        }
        else{
            currentKF++;
            if (currentKF >= allSprites[0].timeline.length) currentKF = 0;
            console.log("currentKF = " + currentKF);
        }
    }
    else console.log("You have no sprites");
    this.alpha = 1;
}

function removeKF(){
    for (i in allSprites){
        spri = allSprites[i];
        spri.timeline.splice(currentKF, 1);
        console.table(spri.timeline);
    }
    this.alpha = 1;
}

function addKF(){ // [x, y, w, h, r]
    for (i in allSprites){
        sprites = allSprites[i];
        var g = [sprites.x, sprites.y, sprites.width, sprites.height, sprites.rotation];
        sprites.timeline.splice(currentKF+1, 0, g);
        console.table(sprites.timeline);
        currentKF++;
    }
    this.alpha = 1;
}
}