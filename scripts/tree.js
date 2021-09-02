let circleCount = 0;
let squareCount = 0;
let triangleCount = 0;
let humanCount = 0;
let imageCount = 0;

class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
}

function startTree(){
    let root = TreeNode("Stage");
    return root;
}

let treeRoot = startTree();

function addSpriteToTree(sprite){

}

function addSpriteToStage(sprite){
    treeRoot.children.push(sprite);
    addToTreeview(sprite.nodeName);
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
        case textureTorso.baseTexture.uid:
            humanCount++;
            return "Torso " + humanCount;
        case textureHead:
            return "Head " + humanCount;
        case textureLeftArm:
            return "Head " + humanCount;
        case textureRightArm:
            return "Head " + humanCount;
        case textureLeftLeg:
            return "Head " + humanCount;
        case textureRightLeg:
            return "Head " + humanCount;
        default:
            imageCount++;
            return "Image " + imageCount;    
    }
}

function addToTreeview(string){
    // document.getElementById("relations-list").appendChild(string);

    var li = document.createElement('li');

    document.getElementById('relations-list').appendChild(li);

    li.innerHTML += string;
    // items.forEach(function (item) {
    //     let li = document.createElement('li');
    //     ul.appendChild(li);

    //     li.innerHTML += item;
    // });
}

function addChildToTree(string, parent){

}

