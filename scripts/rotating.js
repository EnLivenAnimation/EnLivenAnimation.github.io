function BRotate() {
    if (this.dragging && interactiveButtons) {
        let sprite = this.parent;
        sprite.interactive = false;
        const newPosition3 = this.data.getLocalPosition(this.parent);
        this.x = newPosition3.x;
        this.y = newPosition3.y;
        theta = Math.atan2(this.x*sprite.visualWidth/sprite.originalWidth, -this.y*sprite.visualHeight/sprite.originalHeight);
        sprite.rotation+= theta;
        this.position.set(0, -sprite.n*(1+40/sprite.visualHeight));
        a = false;
        closing(sprite);
    }
}

function undoRotate(){
    if (undoparam.length != 2){
        console.alert("Something broke! D:")
    }
    else{
        rotateSpriteRad(undoparam[0], -undoparam[1]);
    }
}

function rotateSpriteDeg(sprite, theta){
    sprite.rotation+= DegtoRad(theta);
    closing(sprite);
}

function rotateSpriteRad(sprite, theta){
    sprite.rotation+= theta;
    closing(sprite);
}

function onRotateStartSprite(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    canParentMove = false;
    
    currSprite = this;
    while (currSprite.directParent != null) {
        currSprite.directParent.interactive = false;
        currSprite = currSprite.directParent;
    }
}

let thetai, thetaf;

function onRotateEndSprite() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
    resizeButtons(this);
    canParentMove = true;
    
    currSprite = this;
    while (currSprite.directParent != null) {
        currSprite.directParent.interactive = true;
        currSprite = currSprite.directParent;
    }

    setPropertyPanelValues(this.visualX, this.visualY, this.visualWidth, this.visualHeight, this.rotation);
}

function onRotateStartButton(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    interactiveButtons = true;

    currSprite = this.parent;
    thetai = currSprite.rotation;
}

function onRotateEndButton() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
    interactiveButtons = false;
    lastModifiedSprite.interactive = true;
    lastModifiedSprite.alpha = 1;
    lastModifiedSprite.dragging = false;

    currSprite = this.parent;
    resizeButtons(currSprite);
    thetaf = currSprite.rotation;

    undoStack.push([14, [currSprite, thetaf-thetai]]);
}