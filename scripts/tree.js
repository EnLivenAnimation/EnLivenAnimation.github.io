let circleCount = 0;
let squareCount = 0;
let triangleCount = 0;
let humanCount = 0;
let imageCount = 0;

var treeRoot = new TreeRootNode();

function createNodeForSprite(sprite){
    let node = new TreeNode(sprite);
    return node;
}

function addNodeToTree(sprite){
    if (sprite.directParent == null){
        treeRoot.children.push(sprite.node);
    }
    else{
        sprite.directParent.node.children.push(sprite.node);
    }
    addToTreeview(sprite);
}

function generateNameFromTexture(texture){
    if (nodeNameQueue.length() > 0){
        return nodeNameQueue.dequeue();
    }
    else{
        switch (texture.baseTexture.uid) {
            case circletexture.baseTexture.uid:
                circleCount++;
                return "Circle " + circleCount;
            case squaretexture.baseTexture.uid:
                squareCount++;
                return "Square " + squareCount;
            case triangletexture.baseTexture.uid:
                triangleCount++;
                return "Triangle " + triangleCount;
            case torsoTexture.baseTexture.uid:
                humanCount++;
                return "Torso " + humanCount;
            default:
                return "Image " + imageCount;
            }
    }
}

let nodeNameQueue = new Queue();

function addStringToNodeNameQueue(string){
    nodeNameQueue.enqueue(string);
}

function addArrayToNodeNameQueue(array){
    for (x in array){
        addStringToNodeNameQueue(array[x]);
    }
}

function addToTreeview(sprite){
    let string = sprite.nodeName;

    var li = document.createElement('li');
    var ul = document.createElement('ul');
    li.setAttribute("id", string + "LI");
    ul.setAttribute("id", string + "UL");

    li.innerHTML += string;
    li.appendChild(ul);

    if (sprite.directParent == null){
        document.getElementById('relations-list').appendChild(li);
        // document.getElementById('relations-list').appendChild += li;
    }
    else{
        document.getElementById(sprite.directParent.nodeName + "UL").appendChild + li;
        // sprite.directParent.nodeFrontEnd.innerHTML += li;
    }
    
    sprite.nodeFrontEnd = li;
    sprite.innerListFrontEnd = ul;
}