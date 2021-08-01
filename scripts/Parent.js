let temp = 0;
let tempY = 0;


function ParentToChild(child,parent){
    temp = child.visualX;
    tempY = child.visualY;
    child.parent = parent;
    child.visualX = temp;
    child.visualY = tempY;
    child.x = (child.visualX - parent.visualX)*parent.originalWidth/parent.visualWidth;
    child.y = (-1*parent.visualY+app.screen.height-child.visualY) * parent.originalHeight / parent.visualHeight;
    child.width = child.visualWidth*parent.originalWidth/parent.visualWidth;
    child.height = child.visualHeight*parent.originalHeight/parent.visualHeight;
    resizeButtons(child);
}

function removeParent(child,parent){
    if (child.parent == parent){
        child.x = (child.visualX - parent.visualX)*parent.originalWidth/parent.visualWidth;
        child.y = (-1*parent.visualY+app.screen.height-child.visualY) * parent.originalHeight / parent.visualHeight;
        console.log(child.visualX + "SDJSK");
        child.width = child.visualWidth*parent.originalWidth/parent.visualWidth;
        child.height = child.visualHeight*parent.originalHeight/parent.visualHeight;
        let newChild = displaySprite(child.Texture,child.visualX,child.visualY,child.width,child.height,null,null);
        // newChild.x = child.x;
        // newChild.y = child.y;
        // newChild.visualX = child.visualX;
        // newChild.visualY = child.visualY;
        // newChild.height =  child.height;
        // newChild.width =  child.width;
        // selectedSprite = child;
        // DeleteSprite();
        newChild.alpha = 0;
        newChild.interactive = false;
        parent.removeChild(child);
        allSprites.splice(0,1);
        // newChild.x = 240;
        // newChild.y = 240;
        newChild.alpha = 1;
        newChild.interactive = true;
    }
}


