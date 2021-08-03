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
            closing(this);
        }
    }
}

function moveSprite(sprite, dx, dy){
    sprite.x += visualXtoX(sprite, dx);
    sprite.y -= visualYtoY(sprite, dy);
    closing(sprite);
}

