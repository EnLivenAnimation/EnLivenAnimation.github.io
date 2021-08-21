let tempX = 0;
let tempY = 0;

let chosenParent = null;
let chosenChild = null;
let waitingForParent = false;
function addParent(){
    if (selectedSprite == null){
        alert("Please add a sprite");
    }
    else{
        chosenChild = selectedSprite;
        alert("Please select the parent");
        waitingForParent = true;
        waitForParent();
    }
}

function waitForParent(){
    setTimeout(function () {
        if (chosenParent == null){
            waitForParent();
        }
        else{
            if (chosenParent == chosenChild){
                alert("Please pick a different sprite.");
                chosenParent = null;
                waitForParent();
            }
            else{
                // alert("This works");
                ParentToChild(chosenChild, chosenParent);
                chosenChild = null;
                chosenParent = null;
            }
        }
    }, 100);
}

function ParentToChild(child,parent){
    tempX = child.visualX;
    tempY = child.visualY;
    child.parent = parent;
    child.directParent = parent;
    child.visualX = tempX;
    child.visualY = tempY;
    child.x = (child.visualX - parent.visualX)*parent.originalWidth/parent.visualWidth;
    child.y = (-1*parent.visualY+app.screen.height-child.visualY) * parent.originalHeight / parent.visualHeight;
    child.width = child.visualWidth*parent.originalWidth/parent.visualWidth;
    child.height = child.visualHeight*parent.originalHeight/parent.visualHeight;
    resizeButtons(child);
}

function removeParent(child,parent){
    if (child.directParent == parent){
        console.log("SOMETHING");
        child.x = (child.visualX - parent.visualX)*parent.originalWidth/parent.visualWidth;
        child.y = (-1*parent.visualY+app.screen.height-child.visualY) * parent.originalHeight / parent.visualHeight;
        // console.log(child.visualX + "SDJSK");
        child.width = child.visualWidth*parent.originalWidth/parent.visualWidth;
        child.height = child.visualHeight*parent.originalHeight/parent.visualHeight;
        child.parent = null;
        child.directParent = null;
        // let newChild = displaySprite(child.Texture,child.visualX,child.visualY,child.width,child.height,null,null);
        // newChild.alpha = 0;
        // newChild.interactive = false;
       
        // allSprites.splice(0,1);
        // newChild.alpha = 1;
        // newChild.interactive = true;
    }
}