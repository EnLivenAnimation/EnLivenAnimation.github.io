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


function addCircle(){
    var tempSprite = displaySprite(circletexture, 200, 200, 120, 120, 0xcc00cc, null);
    
    undoStack.push([0, [tempSprite]]);
}

function addSquare(){
    var tempSprite = displaySprite(squaretexture, 200, 200, 120, 120, 0xcccc00, null);

    undoStack.push([0, [tempSprite]]);
}

function addTriangle(){
    var tempSprite = displaySprite(triangletexture, 200, 200, 120, 120, 0xcc0000, null);

    undoStack.push([0, [tempSprite]]);
}

// function addHuman(){
//     let spritesheet = PIXI.utils.TextureCache["res/img/spritesheet-human.png"];
//     let textureHead = new PIXI.Texture(spritesheet);
//     let textureTorso = new PIXI.Texture(spritesheet);
//     let textureLeftArm = new PIXI.Texture(spritesheet);
//     let textureRightArm = new PIXI.Texture(spritesheet);
//     let textureLeftLeg = new PIXI.Texture(spritesheet);
//     let textureRightLeg = new PIXI.Texture(spritesheet);

//     let headrectangle = new Rectangle(31,31,176,176);
//     let torsorectangle = new Rectangle(21,236,156,298);
//     let rightarmrectangle = new Rectangle(372,31,87,267);
//     let leftarmrectangle = new Rectangle(225,24,105,261);
//     let rightlegrectangle = new Rectangle(373,313,100,258);
//     let leftlegrectangle = new Rectangle(212,320,83,266);

//     textureTorso.frame = torsorectangle;
//     let torsoSprite = displaySprite(textureTorso, 200, 203, 78, 149, null, null);

//     textureHead.frame = headrectangle;
//     displaySprite(textureHead, 200, 313, 88, 88, null, torsoSprite);

//     textureLeftArm.frame = leftarmrectangle;
//     displaySprite(textureLeftArm, 142, 200, 52, 130, null, torsoSprite);

//     textureRightArm.frame = rightarmrectangle;
//     displaySprite(textureRightArm, 253, 200, 43, 133, null, torsoSprite);

//     textureLeftLeg.frame = leftlegrectangle;
//     displaySprite(textureLeftLeg, 175, 75, 41, 133, null, torsoSprite);
    
//     textureRightLeg.frame = rightlegrectangle;
//     displaySprite(textureRightLeg, 225, 75, 50, 129, null, torsoSprite);

//     addToTree("Torso " + humanCount);
//     addToTree("Head " + humanCount);
//     addToTree("Left Arm " + humanCount);
//     addToTree("Right Arm " + humanCount);
//     addToTree("Left Leg " + humanCount);
//     addToTree("Right Leg " + humanCount);
//     humanCount++;

//     undoStack.push([0, [torsoSprite]]);
// }

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