let interactiveButtons = false;
let lastModifiedSprite = null;

let buttonVisualSize = 7;
let bvs = buttonVisualSize;

{ // RE EVALUATE VALUES
function resizeButtons(sprite) {
    resetVisualValues(sprite);
    for (i in sprite.buttonArray) {
        sprite.buttonArray[i].width = bvs*sprite.originalWidth/sprite.visualWidth;
        sprite.buttonArray[i].height = bvs*sprite.originalHeight/sprite.visualHeight;
    }
    sprite.buttonArray[8].position.set(0, -sprite.n*(1+40/sprite.visualHeight));
    for (i in sprite.spriteChildren) {
        resizeButtons(sprite.spriteChildren[i]);
    }
}

function resetVisualValues(sprite) {
    if (sprite.directParent == null) {
        sprite.visualX = sprite.x;
        sprite.visualY = -1*sprite.y+app.screen.height;
        sprite.visualWidth = sprite.width;
        sprite.visualHeight = sprite.height;
    }
    else{
        let parent = sprite.directParent;
        sprite.visualX = parent.visualX + sprite.x*parent.visualWidth/parent.originalWidth;
        sprite.visualY = parent.visualY + sprite.y*parent.visualHeight/parent.originalHeight;
        sprite.visualWidth = sprite.width*parent.visualWidth/parent.originalWidth;
        sprite.visualHeight = sprite.height*parent.visualHeight/parent.originalHeight;
    }
}
}



function closing(sprite){
    lastModifiedSprite = sprite;
    if (sprite.width < 0.001){
        sprite.width = 0.001;
    }
    if (sprite.height < 0.001){
        sprite.height = 0.001;
    }
    resizeButtons(sprite);
    setPropertyPanelValues(sprite.visualX, sprite.visualY, sprite.visualWidth, sprite.visualHeight, sprite.rotation);
}

{ // ENABLE AND DISABLE BUTTONS
function enableButtons(eventData) {
    disableButtons();
    for (i in this.buttonArray) {
        currButton = this.buttonArray[i];
        currButton.alpha = 1;
        currButton.interactive = true;
    }
    selectedSprite = this;
}

function disableButtons(eventData) {
    for (i in allSprites) {
        sprit = allSprites[i];
        for (j in sprit.buttonArray) {
            currButton = sprit.buttonArray[j];
            currButton.alpha = 0;
            currButton.interactive = false;
        }
    }
    selectedSprite = null;
}

}