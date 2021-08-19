function keyboard(value) {
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.key === key.value) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
        event.preventDefault();
      }
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.key === key.value) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
    };
  
    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);
    
    window.addEventListener(
      "keydown", downListener, false
    );
    window.addEventListener(
      "keyup", upListener, false
    );
    
    // Detach event listeners
    key.unsubscribe = () => {
      window.removeEventListener("keydown", downListener);
      window.removeEventListener("keyup", upListener);
    };
    
    return key;
}
  
let ctrl = keyboard("Control"),
    z = keyboard("z");
ctrl.press = () => {
    // console.log("ctlr being pressed");
    z.press = () => {
        undo();
    }
};

let space = keyboard(" ");
space.press = () => {
    // console.log("space being pressed");
    if (playing){
      pause();
    }
    else{
      play();
    }
}

let lKey = keyboard("l");
lKey.press = () => {
  console.log("hi");
  toggleLooping();
}

let sKey = keyboard("s");
sKey.press = () => {
  console.log("his");
  addKeyframe();
}

let wKey = keyboard("w");
wKey.press = () => {
  deleteCurrentKeyframe();
}

// let a = keyboard("a");
// a.press = () => {
//   addKeyframe();
// }

// let d = keyboard("d");
// d.press = () => {
//   addKeyframe();
// }
