function visualXtoX(sprite, visualX){
    if (sprite.directParent == null){
        return visualX;
    }
    else{
        let parent = sprite.directParent;
        return (visualX - parent.visualX) * parent.originalWidth / parent.visualWidth;
    }
}

function visualDXtoDX(sprite, visualDX){
    if (sprite.directParent == null){
        return visualDX;
    }
    else{
        let parent = sprite.directParent;
        return visualDX * parent.originalWidth / parent.visualWidth;
    }
}

function XtoVisualX(sprite, x){
    if (sprite.directParent == null){
        return x;
    }
    else{
        let parent = sprite.directParent;
        return x*parent.visualWidth/parent.originalWidth;
    }
}

function visualYtoY(sprite, visualY){
    if (sprite.directParent == null){
        return app.screen.height - visualY;
    }
    else{
        let parent = sprite.directParent;
        return (parent.visualY - visualY) * parent.originalHeight / parent.visualHeight;
    }
}

function visualDYtoDY(sprite, visualDY){
    if (sprite.directParent == null){
        return app.screen.height - visualDY;
    }
    else{
        let parent = sprite.directParent;
        return (app.screen.height - visualDY) * parent.originalHeight / parent.visualHeight;
    }
}

function YtoVisualY(sprite, y){
    if (sprite.directParent == null){
        return app.screen.height - y;
    }
    else{
        let parent = sprite.directParent;
        return app.screen.height - (y * parent.visualHeight / parent.originalHeight);
    }
}

function DegtoRad(theta){
    return Math.PI * theta / 180;
}

function RadtoDeg(theta){
    return 180 * theta / Math.PI;
}
