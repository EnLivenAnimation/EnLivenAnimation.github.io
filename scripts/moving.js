let canParentMove = false;

let xi, yi;


function onDragStartSprite(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    canParentMove = false;
    ColorSprite = this;
    currSprite = this;

    if (waitingForParent){
        chosenParent = currSprite;
    }
  
    xi = currSprite.x;
    yi = currSprite.y;
    while (currSprite.directParent != null) {
        currSprite.directParent.interactive = false;
        currSprite = currSprite.directParent;
    }
    itr.mouse.global.x =  (mouseX  - currSprite.visualX + (currSprite.visualWidth / 2 ));
    itr.mouse.global.y = 1/2 -((mouseY - currSprite.visualY  + (currSprite.visualHeight / 2 )));

}

function onDragEndSprite() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
    resizeButtons(this);
    canParentMove = true;
    
    currSprite = this;
    
    if (currSprite.x != xi && currSprite.y != yi){
       undoStack.push([15, [currSprite, currSprite.x - xi, currSprite.y - yi]]);
    }

    while (currSprite.directParent != null) {
        currSprite.directParent.interactive = true;
        currSprite = currSprite.directParent;
    }

    // console.log("bruh");

    // console.log(xi + " " + yi);
    setPropertyPanelValues(this.visualX, this.visualY, this.visualWidth, this.visualHeight, this.rotation);
}



function onDragMoveSprite() {
    if (this.dragging) {

        const newPosition2 = this.data.getLocalPosition(this.parent);
        // this.x = newPosition2.x;
        // this.y = newPosition2.y;
        if (this.directParent == null){
            this.x += (mouseX - mX);
            this.y += (mouseY - mY);
        }
        else{
            var parent = this.directParent;
            this.x += (mouseX - mX)*parent.originalWidth/parent.visualWidth;
            this.y += (mouseY - mY)*parent.originalHeight/parent.visualHeight;
        }
        mX = mouseX;
        mY = mouseY;
        canParentMove = false;
        closing(this);

        if (this.directParent == null){
            if (mouseX - this.visualWidth/2 + this.x < 0){
                //const distanceToZero = 0 -mouseX - this.visualWidth/2 + this.x
                this.x = 0;  
            }
            if (mouseX> app.screen.width){
                //const distanceToZero = 0 -mouseX - this.visualWidth/2 + this.x
                this.x = app.screen.width; 
            }
            if (actualMouseY > app.screen.height){
                this.y = app.screen.height;
            }
            if (actualMouseY - this.visualHeight/2 + this.y < 0){
                this.y = 0;
            }
        }
    }
}


function moveSpriteVisual(sprite, vx, vy){ // takes in visual values
    sprite.x += visualXtoX(sprite, vx);
    sprite.y -= visualYtoY(sprite, vy);
    closing(sprite);
}

function moveSpriteByActual(sprite, vx, vy){
    sprite.x -= vx;
    sprite.y -= vy;
    closing(sprite);
}

function moveSpriteToActual(sprite, x, y){ // takes in non-visual values
    sprite.position.set(x,y);
    closing(sprite);
}

function moveSpriteToVisual(sprite, vx, vy){ // takes in non-visual values
    sprite.x = visualXtoX(sprite, vx);
    sprite.y = visualYtoY(sprite, vy);
    console.log(sprite.x);
    console.log(sprite.y);
    closing(sprite);
}

function undoMove(){
    if (undoparam.length != 3){
        console.alert("Something broke! D:")
    }
    else{
        moveSpriteByActual(undoparam[0], undoparam[1], undoparam[2]);
    }
}
