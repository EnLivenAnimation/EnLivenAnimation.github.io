let currentSkins = [];

function createSkin(originalSprite) {
    DisplayedSkin = new Sprite(originalSprite.texture);

    DisplayedSkin.interactive = false;
    DisplayedSkin.buttonMode = false;
    DisplayedSkin.anchor.set(0.5);

    DisplayedSkin.tint = originalSprite.tint;
  
    app.stage.addChild(DisplayedSkin);
    currentSkins.push(DisplayedSkin);

    DisplayedSkin.alpha = 0;
  
    return null;
}

function displaySkins(keyframe){
    if (allSprites.length > 0){

        console.log("a");

        if (keyframe >= 0 && keyframe <= allSprites[0].timeline.length - 1){

            console.log("b");

            for (i in currentSkins){
                let skin = currentSkins[i];
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
            console.log("h");
            for (i in allSprites){
                let skin = currentSkins[i];
                skin.alpha = 0;
            }
        }
    }
    console.log("j");
}