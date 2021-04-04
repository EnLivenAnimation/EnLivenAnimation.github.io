function onButtonDown(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.dragging = true;
}

function onButtonUp() {
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
    if (this.alpha == 1){
        frame = 1;
        this.alpha = 0.3;
        console.log("Now on Frame 1");
    }
    else{
        frame = 0;
        this.alpha = 1;
        console.log("Now on Frame 0");
    }
    // a = true;
}