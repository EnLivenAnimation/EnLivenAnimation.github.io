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

function rotateSpriteDeg(sprite, theta){
    sprite.rotation+= DegtoRad(theta);
    closing(sprite);
}

function rotateSpriteRad(sprite, theta){
    sprite.rotation+= theta;
    closing(sprite);
}