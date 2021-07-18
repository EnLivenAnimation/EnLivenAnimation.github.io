function testOnion(){
    addSquare();
    addKeyframe();
}

let skinSet = [];
let allSkins = [
    [],
    []
];

var KFsbefore = 1;
var KFsafter = 1;

function duplicateSkinSet(){
    let tmpSet = [];
    for (i in skinSet){
        let baseSkin = skinSet[i];

        let DisplayedSkin = new Sprite(baseSkin.texture);

        DisplayedSkin.interactive = false;
        DisplayedSkin.buttonMode = false;
        DisplayedSkin.anchor.set(0.5);

        DisplayedSkin.tint = originalSprite.tint;
    
        app.stage.addChild(DisplayedSkin);
        tmpSet.push(DisplayedSkin);

        DisplayedSkin.alpha = 0.5;
    }
    console.log(tmpSet);
    allSkins.push(tmpSet);
    return null;
}

function createSkin(originalSprite) {
    DisplayedSkin = new Sprite(originalSprite.texture);

    DisplayedSkin.interactive = false;
    DisplayedSkin.buttonMode = false;
    DisplayedSkin.anchor.set(0.5);

    DisplayedSkin.tint = originalSprite.tint;
  
    skinSet.push(DisplayedSkin);

    skin2 = new Sprite(originalSprite.texture);

    skin2.interactive = false;
    skin2.buttonMode = false;
    skin2.anchor.set(0.5);

    skin2.tint = originalSprite.tint;
  
    app.stage.addChild(skin2);

    allSkins[0].push(skin2);

    skin2.alpha = 0;

    skin3 = new Sprite(originalSprite.texture);

    skin3.interactive = false;
    skin3.buttonMode = false;
    skin3.anchor.set(0.5);

    skin3.tint = originalSprite.tint;
  
    app.stage.addChild(skin3);

    allSkins[1].push(skin3);

    skin3.alpha = 0;
  
    return null;
}

function displaySkins(skinArray, keyframe){
    if (allSprites.length > 0){

        if (keyframe >= 0 && keyframe <= allSprites[0].timeline.length - 1){

            for (i in skinArray){
                let skin = skinArray[i];
                let sprite = allSprites[i];

                skin.x = sprite.timeline[keyframe][0];
                skin.y = sprite.timeline[keyframe][1];
                skin.width = sprite.timeline[keyframe][2];
                skin.height = sprite.timeline[keyframe][3];
                skin.rotation = sprite.timeline[keyframe][4];
                skin.alpha = 0.4;
            }
        }
        else{
            for (i in allSprites){
                let skin = skinArray[i];
                skin.alpha = 0;
            }
        }
    }
}