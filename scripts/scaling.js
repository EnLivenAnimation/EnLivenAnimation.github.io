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
}

function scaleSprite(sprite, sx, sy){
    sprite.width *= sx;
    sprite.height *= sy;
    closing(sprite);
}