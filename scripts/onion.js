function testOnion(){
    // addSquare();
    addHuman();
    addKeyframe();
}

let skinSet = [];
let allSkins = [
    [],
    []
];
let onion = false;

var KFsbefore = 1;
var KFsafter = 1;

function toggleOnionSkins() {
    if (onion) {
        turnOffAllSkins();
        onion = false;
        document.getElementById("onion").setAttribute("class", "onion-disabled");
    } else {
        onion = true;
        document.getElementById("onion").setAttribute("class", "onion-enabled");
    }
}

function createOneSkin(originalSprite, parentSkin){
    DisplayedSkin = new Sprite(originalSprite.texture);
    
    DisplayedSkin.indexinAllSprites = allSprites.length;
    
    DisplayedSkin.interactive = false;
    DisplayedSkin.buttonMode = false;
    DisplayedSkin.anchor.set(0.5);
    
    if (originalSprite.tint != null){
        DisplayedSkin.tint = originalSprite.tint;
    }

    DisplayedSkin.alpha = 0;

    DisplayedSkin.deleted = false;

    app.stage.addChild(DisplayedSkin);

    DisplayedSkin.directParent = null;
    if (parentSkin != null) {
        parentSkin.addChild(DisplayedSkin);

        DisplayedSkin.directParent = parentSkin;
    }

    return DisplayedSkin;
}

function createBothSkins(originalSprite, parentSkinIndex){
    let preskin = createOneSkin(originalSprite, allSkins[0][parentSkinIndex]);
    allSkins[0].push(preskin);

    let postskin = createOneSkin(originalSprite, allSkins[1][parentSkinIndex]);
    allSkins[1].push(postskin);
}

function createSkins(originalSprite, parent){
    if (parent == null){
        createBothSkins(originalSprite, null);
    }
    else{
        createBothSkins(originalSprite, parent.indexinAllSprites);
    }
}

function displaySkins(skinArray, keyframe){
    if (onion){
        if (allSprites.length > 0){

            if (keyframe >= 0 && keyframe <= allSprites[0].timeline.length - 1){

                for (i in skinArray){
                    let skin = skinArray[i];
                    let sprite = allSprites[i];

                    let x = sprite.timeline[keyframe][0];
                    let y = sprite.timeline[keyframe][1];
                    let w = sprite.timeline[keyframe][2];
                    let h = sprite.timeline[keyframe][3];
                    let r = sprite.timeline[keyframe][4];

                    skin.x = x;
                    skin.y = y;
                    skin.width = w;
                    skin.height = h;
                    skin.rotation = r;
                    if (skin.directParent == null){
                        skin.alpha = 0.35;
                    }
                    else{
                        skin.alpha = 1;
                    }

                }
            }
            else{
                turnOffSkins(skinArray);
            }
        }
    }
    else{
        turnOffSkins(skinArray);
    }
}

function turnOffSkins(skinArray){
    for (i in skinArray){
        let skin = skinArray[i];
        skin.alpha = 0;
    }
}

function turnOffAllSkins(){
    turnOffSkins(allSkins[0]);
    turnOffSkins(allSkins[1]);
}

function turnOnAllSkins(){
    displaySkins(allSkins[0], currentKeyframe - 1);
    displaySkins(allSkins[1], currentKeyframe + 1);
}