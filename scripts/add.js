let selectedSprite = null;

function DeleteSprite(){
    if (selectedSprite != null){
        selectedSprite.alpha = 0;
        selectedSprite.interactive = false;
        selectedSprite.deleted = true;
    }
    selectedSprite = null;
    disableButtons();
}

function addCircle(){
    let circletexture = PIXI.Texture.from("res/img/circle.png");
    displaySprite(circletexture, 200, 200, 120, 120, 0xcc00cc, null);
}

function addSquare(){
    let squaretexture = PIXI.Texture.from("res/img/square.png");
    displaySprite(squaretexture, 200, 200, 120, 120, null, null);
}

function addTriangle(){
    let triangletexture = PIXI.Texture.from("res/img/triangle.png");
    displaySprite(triangletexture, 200, 200, 120, 120, 0xcc0000, null);
}

function addHuman(){
    let spritesheet = PIXI.utils.TextureCache["res/img/justin-sheet.png"];
    let textureHead = new PIXI.Texture(spritesheet);
    let textureTorso = new PIXI.Texture(spritesheet);
    let textureLeftArm = new PIXI.Texture(spritesheet);
    let textureRightArm = new PIXI.Texture(spritesheet);
    let textureLeftLeg = new PIXI.Texture(spritesheet);
    let textureRightLeg = new PIXI.Texture(spritesheet);

    let headrectangle = new Rectangle(31,31,176,176);
    let torsorectangle = new Rectangle(21,236,156,298);
    let rightarmrectangle = new Rectangle(372,31,87,267);
    let leftarmrectangle = new Rectangle(225,24,105,261);
    let rightlegrectangle = new Rectangle(373,313,100,258);
    let leftlegrectangle = new Rectangle(212,320,83,266);

    textureTorso.frame = torsorectangle;
    let torsoSprite = displaySprite(textureTorso, 200, 203, 78, 149, null, null);

    textureHead.frame = headrectangle;
    displaySprite(textureHead, 200, 313, 88, 88, null, torsoSprite);

    textureLeftArm.frame = leftarmrectangle;
    displaySprite(textureLeftArm, 142, 200, 52, 130, null, torsoSprite);

    textureRightArm.frame = rightarmrectangle;
    displaySprite(textureRightArm, 253, 200, 43, 133, null, torsoSprite);

    textureLeftLeg.frame = leftlegrectangle;
    displaySprite(textureLeftLeg, 175, 75, 41, 133, null, torsoSprite);
    
    textureRightLeg.frame = rightlegrectangle;
    displaySprite(textureRightLeg, 225, 75, 50, 129, null, torsoSprite);
}
