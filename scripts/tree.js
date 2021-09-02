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
}

function addNode(sprite){

}

function addSpriteToStage(sprite){

}

function generateNameFromTexture(texture){
    switch (texture) {
        case circletexture:
            circleCount++;
            return "Circle " + circleCount;
        case squaretexture:
            squareCount++;
            return "Square " + squareCount;
        case triangletexture:
            triangleCount++;
            return "Triangle " + triangleCount;
        case textureTorso:
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
            return "Image " + imageCount;    
    }
}

function addToTree(string){
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

