let interactiveButtons = false;
let lastModifiedSprite = null;

let buttonVisualSize = 7;
let bvs = buttonVisualSize;

{ // RE EVALUATE VALUES
function resizeButtons(sprite) { // might be hard coded
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
        sprite.visualY = sprite.y;
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

{// BUTTON FUNCTIONS
function B1() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        let halfwidth = sprite.originalWidth / 2;
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x + halfwidth) * sprite.width / -halfwidth;
        this.x = -halfwidth;

        let halfheight = sprite.originalHeight / 2;
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y + halfheight) * sprite.height / -halfheight;
        this.y = -halfheight;

        closing(sprite);
    }
}
function B2() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.y = newPosition2.y;
        a = false;

        let halfheight = sprite.originalHeight/2;
        sprite.height+= (this.y + halfheight) * sprite.height / -halfheight;
        this.x = 0;
        this.y = -halfheight;
        closing(sprite);
    }
}
function B3() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        let halfwidth = sprite.originalWidth/2;
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x - halfwidth) * sprite.width / halfwidth;
        this.x = halfwidth;

        let halfheight = sprite.originalHeight/2;
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y + halfheight) * sprite.height / -halfheight;
        this.y = -halfheight;

        closing(sprite);
    }
}
function B4() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        a = false;

        let halfwidth = sprite.originalWidth/2;
        sprite.width+= (this.x - halfwidth) * sprite.width / halfwidth;
        this.y = 0;
        this.x = halfwidth;
        closing(sprite);
    }
}
function B5() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        let halfwidth = sprite.originalWidth/2;
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x - halfwidth) * sprite.width / halfwidth;
        this.x = halfwidth;

        let halfheight = sprite.originalHeight/2;
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y - halfheight) * sprite.height / halfheight;
        this.y = halfheight;

        closing(sprite);
    }
}
function B6() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.y = newPosition2.y;
        a = false;

        let halfheight = sprite.originalHeight/2;
        sprite.height+= (this.y - halfheight) * sprite.height / halfheight;
        this.x = 0;
        this.y = halfheight;
        closing(sprite);
    }
}
function B7() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        let halfwidth = sprite.originalWidth/2;
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x + halfwidth) * sprite.width / -halfwidth;
        this.x = -halfwidth;

        let halfheight = sprite.originalHeight/2;
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y - halfheight) * sprite.height / halfheight;
        this.y = halfheight;

        closing(sprite);
    }
}
function B8() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        a = false;

        let halfwidth = sprite.originalWidth/2;
        sprite.width+= (this.x + halfwidth) * sprite.width / -halfwidth;
        this.y = 0;
        this.x = -halfwidth;
        closing(sprite);
    }
}
function BRotate() {
    if (this.dragging && interactiveButtons) {
        let sprite = this.parent;
        sprite.interactive = false;
        const newPosition3 = this.data.getLocalPosition(this.parent);
        this.x = newPosition3.x;
        this.y = newPosition3.y;
        theta = Math.atan2(-this.y, this.x);
        sprite.rotation+= Math.PI/2-theta;
        this.position.set(0, -sprite.n*(1+40/sprite.visualHeight))
        a = false;
        closing(sprite);
    }
}
function closing(sprite){
    lastModifiedSprite = sprite;
    resizeButtons(sprite);
    setPropertyPanelValues(sprite.visualX, sprite.visualY, sprite.visualWidth, sprite.visualHeight, sprite.rotation);
}

// END BUTTON FUNCTIONS
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

let canParentMove = false;
{ // ON DRAG START STUFF
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
        canParentMove = false;
        
        currSprite = this;
        while (currSprite.directParent != null) {
            currSprite.directParent.interactive = false;
            currSprite = currSprite.directParent;
        }
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
        canParentMove = true;
        
        currSprite = this;
        while (currSprite.directParent != null) {
            currSprite.directParent.interactive = true;
            currSprite = currSprite.directParent;
        }

        setPropertyPanelValues(this.visualX, this.visualY, this.visualWidth, this.visualHeight, this.rotation);
    }
    function onDragMoveSprite() {
        if (this.dragging) {
            const newPosition2 = this.data.getLocalPosition(this.parent);
            this.x = newPosition2.x;
            this.y = newPosition2.y;
            canParentMove = false;
        }
    }
}
