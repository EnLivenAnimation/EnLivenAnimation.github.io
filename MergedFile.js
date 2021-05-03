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
let texture,sprite, button, button2, button3, button4, button5, button6, button7, button8, button9, x, y, w, h, ParentMoving;

loader
  .add("images/09.png")
  .add("images/bone.jpg")
  .add("images/justin-sheet.png")
  .load(setup)

function setup(){
    let textureJ = PIXI.Texture.from("images/09.png");
    const BackgroundTexture = PIXI.Texture.from('images/09.png');
    var background = new PIXI.Sprite(BackgroundTexture);
    background.width = app.screen.width;
    background.height = app.screen.height;
    background.alpha = 0;
    background.interactive = true;
    background.on('click',disableButtons);
    app.stage.addChild(background);
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
    BlueButton = displaySprite(texture2, 500, 250, 0.1, 0x0000ee);
    PurpleButton = displaySprite(texture2, 400, 400, 0.08, 0xcc00cc);
  
}
{
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

function addKF(){
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
      .on('pointerdown', onDragStart1)
      .on('pointerup', onDragEnd1)
      .on('pointerupoutside', onDragEnd1)
      .on('pointermove', onDragMove)
      .on('click', enableButtons);

    app.stage.addChild(DisplayedSprite);
    allSprites.push(DisplayedSprite);
    x = x;
    y = y;
    w = DisplayedSprite.width;
    h = DisplayedSprite.height;


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
    xs = [-m, 0, m, m, m, 0, -m, -m, 0];
    ys = [-n, -n, -n, 0, n, n, n, 0, -1.2*n];
    
    for (i in DisplayedSprite.buttonArray){
        currButton = DisplayedSprite.buttonArray[i];
        currButton.scale.set(0.1);
        DisplayedSprite.addChild(currButton);
        currButton.anchor.set(0.5);
        currButton.interactive = true;
        currButton.buttonMode = true;
        currButton.scale.set(10/DisplayedSprite.width);
        // currButton.width = 10/DisplayedSprite.width;
        // currButton.height = 10/DisplayedSprite.height;
        currButton.x = xs[i];
        currButton.y = ys[i];
    }

    return DisplayedSprite;
}

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
// function createButtons(){
//     button = new Sprite(texture2);
//     button.scale.set(100);

//     button.interactive = true;
//     button.buttonMode = true;
//     button.anchor.set(0.5);

//     return button;
//}
function displayNonSprites(texture, x, y, scale){
    sprit = new Sprite(texture);
    sprit.x = x;
    sprit.y = y;
    sprit.scale.set(scale);
    sprit.d = [];

    sprit.interactive = true;
    sprit.buttonMode = true;
    sprit.anchor.set(0.5);
    // sprit.timeline = [];
    app.stage.addChild(sprit);
    return sprit;
}




let parentMoving = false;
{
    function onDragStart1(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }
    function onDragStart2(event) {
        this.data = event.data;
    }
    function PStart(event) {
        this.data = event.data;
        this.alpha = 0.5;
    }
    function onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;
        parentMoving = true;
    }
    function onDragEnd1() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;
        parentMoving = true;
        // console.table(this.timeline);
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
}

let Ntweens = 30;
let frame;
let fps = 24;
let NumberKeyFrames = 0;
let CurrentKeyFrame = 0;

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

                spri.position.set(spri.timeline[CurrentKeyFrame][0], spri.timeline[CurrentKeyFrame][1])
                
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
    if (PurpleButton.timeline.length < 2 || YellowButton.timeline.length < 2) console.log("Not enough values");
    else{
        CurrentKeyFrame = 0;
        NumberKeyFrames = PurpleButton.timeline.length;
        playKF();
    }
}