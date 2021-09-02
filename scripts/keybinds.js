let ctrl = keyboard("Control"),
    z = keyboard("z"),
    deleteKey = keyboard("Backspace"),
    altKey = keyboard("Alt"),
    space = keyboard(" ");
ctrl.press = () => {
    console.log("ctlr being pressed");
    z.press = () => {
        undo();
    }
};
deleteKey.press = () =>{
    deleteSelectedSprite();
}
space.press = () => {
    if (playing){
      pause();
    }
    else{
      play();
    }
}
ctrl.press = () => {
  space.press = () => {
    playFromStart();
  }
};
   altKey.press = () => {
       addKeyframe();
   };