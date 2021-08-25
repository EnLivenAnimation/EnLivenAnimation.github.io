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
        if (chosenChild.directParent != null){
            alert("This sprite already has a parent!");
        }
        else{
            alert("Please select the parent");
            waitingForParent = true;
            waitForParent();
        }
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
                setParentToChild(chosenChild, chosenParent);
                chosenChild = null;
                chosenParent = null;
            }
        }
    }, 100);
}

function setParentToChild(child,parent){
    child.parent = parent;
    parent.addChild(child);
    child.directParent = parent;
    child.IDinParentChildren = parent.spriteChildren.length;
    parent.spriteChildren.push(child);

    child.x = (child.visualX - parent.visualX)*parent.originalWidth/parent.visualWidth;
    child.y = (parent.visualY - child.visualY) * parent.originalHeight / parent.visualHeight;

    child.width = child.visualWidth * parent.originalWidth / parent.visualWidth;
    child.height = child.visualHeight * parent.originalHeight / parent.visualHeight;
    resizeButtons(child);
}

function removeParentfromChild(child, parent){

    resizeButtons(child);

    let unparentedChild = displaySprite(child.texture, child.visualX, child.visualY, child.visualWidth, child.visualHeight, child.tint, null);

    parent.removeChild(child);

    child.parent = child.nullParent;
    child.directParent = null;
    parent.spriteChildren.splice(child.IDinParentChildren, 1);
    child.IDinParentChildren = null;
    console.log(child);
    deleteSprite(child);
    
    resizeButtons(unparentedChild);
}

function duplicateSpritewithNoParent(sprite){
    let duplicate = displaySprite(sprite.texture, sprite.visualX, sprite.visualY, sprite.visualWidth, sprite.visualHeight, sprite.tint, null);
    duplicate.timeline = sprite.timeline;
    return duplicate;
}

function removeParent(){
    if (selectedSprite == null){
        alert("Please add a sprite");
    }
    else{
        chosenChild = selectedSprite;
        if (chosenChild.directParent == null){
            alert("This sprite has no parent.");
        }
        else{
            // alert("Please select the child");
            removeParentfromChild(chosenChild, chosenChild.directParent);
        }
    }
}
