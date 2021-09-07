class TreeNode {
    constructor(sprite) {
        this.sprite = sprite;
        this.name = sprite.nodeName;
        this.children = [];
        return this;
    }
}