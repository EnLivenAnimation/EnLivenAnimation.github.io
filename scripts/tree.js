let circleCount = 0;
let squareCount = 0;
let triangleCount = 0;
let humanCount = 0;
let imageCount = 0;

var treeRoot = new TreeRootNode();

console.log(treeRoot);

function createNodeForSprite(sprite){
    let node = new TreeNode(sprite);
    return node;
}

function addNodeToTree(sprite){
    if (sprite.directParent == null){
        console.log("bruh");
        treeRoot.children.push(sprite.node);
    }
    else{
        sprite.directParent.node.children.push(sprite.node);
    }
    addToTreeview(sprite);
}

function generateNameFromTexture(texture){
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
            console.log(nodeNameQueue);
            if (nodeNameQueue.length() > 0){
                return nodeNameQueue.dequeue();
            }
            else{
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
    // document.getElementById("relations-list").appendChild(string);

    let string = sprite.nodeName;

    var li = document.createElement('li');

    document.getElementById('relations-list').appendChild(li);

    console.log("hi");
    li.innerHTML += string;
    // items.forEach(function (item) {
    //     let li = document.createElement('li');
    //     ul.appendChild(li);

    //     li.innerHTML += item;
    // });
}

function addChildToTree(string, parent){

}

