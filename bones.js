let isChild = false;
function onDragStart1(event) {
 // we want to track the movement of this particular touch
 this.data = event.data;
 this.alpha = 0.5;
 this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
    isChild = true;
}
function onDragEnd1() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
    isChild = true;
}
function onDragMove() {
    if (this.dragging) {
        const newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        this.y = newPosition2.y;
        isChild = false;
    }
}

function onDragMove() {
    if (isParent)
    {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
    }
}
// start animating
animate();

function animate() {
  requestAnimationFrame(animate);
  // render the root container
  renderer.render(stage);
};