let selectedSprite = null;

function deleteSelectedSprite(){
    if (selectedSprite != null){
        let spriteIndex = selectedSprite.indexinAllSprites;

        selectedSprite.alpha = 0;
        selectedSprite.interactive = false;
        selectedSprite.deleted = true;
        allSprites.splice(selectedSprite.indexinAllSprites, 1);
        for (i in allSprites){
            sprite = allSprites[i];
            if (sprite.indexinAllSprites >= spriteIndex){
                sprite.indexinAllSprites--;
            }
        }

        preskin = allSkins[0][spriteIndex];
        preskin.alpha = 0;
        preskin.interactive = false;
        preskin.deleted = true;
        allSkins[0].splice(spriteIndex, 1);

        postskin = allSkins[1][spriteIndex];
        postskin.alpha = 0;
        postskin.interactive = false;
        postskin.deleted = true;
        allSkins[1].splice(spriteIndex, 1);
    }
    selectedSprite = null;
    disableButtons();
}

function deleteSprite(sprite){
    let holdingSelectedSprite = selectedSprite;
    selectedSprite = sprite;
    deleteSelectedSprite();
    selectedSprite = holdingSelectedSprite;
}

function testingTmp(){
    let circletexture = PIXI.Texture.from("res/img/circle.png");
    let triangletexture = PIXI.Texture.from("res/img/triangle.png");
    displaySprite(circletexture, 200, 200, 10, 500, 0x117711, null);
    displaySprite(triangletexture, 200, 200, 120, 120, 0xcc0000, null);
    displaySprite(circletexture, 200, 200, 10, 250, 0x117711, null);
    displaySprite(circletexture, 200, 200, 250, 10, 0x117711, null);
    displaySprite(circletexture, 300, 300, 500, 10, 0xeeee55, null);
}



function addCircle(){
    let circletexture = PIXI.Texture.from("res/img/circle.png");
    var tempSprite = displaySprite(circletexture, 200, 200, 120, 120, 0xcc00cc, null);
    
    undoStack.push([0, [tempSprite]]);
}

function addSquare(){
    let squaretexture = PIXI.Texture.from("res/img/square.jpg");
    var tempSprite = displaySprite(squaretexture, 200, 200, 120, 120, 0xcccc00, null);
    
    undoStack.push([0, [tempSprite]]);
}

function addTriangle(){
    let triangletexture = PIXI.Texture.from("res/img/triangle.png");
    var tempSprite = displaySprite(triangletexture, 200, 200, 120, 120, 0xcc0000, null);

    undoStack.push([0, [tempSprite]]);
}

function addHuman(){
    let spritesheet = PIXI.utils.TextureCache["res/img/spritesheet-human.png"];
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

    undoStack.push([0, [torsoSprite]]);
}

function undoAddSprite(){
    if (undoparam.length != 1){
        console.alert("Something broke! D:")
    }
    else{
        deleteSprite(undoparam[0]);
    }
}