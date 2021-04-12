function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}

timeline = [];

function onDragEnd1() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;

    timeline.push([this.x, this.y, this.width, this.height, this.rotation]);
    // console.log(this.x);
    // console.log(this.y);
    // console.log(this.width);
    // console.log(this.height);
    // console.log(this.rotation);
    console.table(timeline);
    // console.log("as");
}