let undoStack = [];

function addToUndoStack(functionID, othervars){
    undoStack.push([functionID, othervars]); 
    // othervars is an array
}

function testUndo(){
    undoStack.push([14,[allSprites[0], Math.PI/4]]);
    return undoStack;
}

function testUndo2(){
    undoStack.push([0, null]);
    return undoStack;
}

function undo(){
    let command = undoStack.pop();
    console.log(command);
    
    let commandID = command[0];
    undoparam = command[1];

    console.log(undoparam);
    allUndoFunctions[commandID]();
}

let undoparam = [];

let allFunctions = [
    function(){displaySprite(texture, visualX, visualY, visualWidth, visualHeight, tint, parent);},
    function(){deleteSelectedSprite();},
    function(){addCircle();},
    function(){addSquare();},
    function(){addTriangle();},
    function(){addHuman();},
    function(){B1();},
    function(){B2()},
    function(){B3();},
    function(){B4();},
    function(){B5();},
    function(){B6();},
    function(){B7();},
    function(){B8();},
    function(){BRotate();},
    function(){;}, // moving a sprite
    function(){toggleOnionSkins();},
    function(){displaySkins(skinArray, keyframe);},
    function(){turnOffAllSkins();},
    function(){setPropertyPanelValues(x, y, w, h, r);},
    function(){play();},
    function(){playKeyframe();},
    function(){pause();},
    function(){toggleLooping();},
    function(){addKeyframe();},
    function(){deleteCurrentKeyframe();},
    function(){loadKeyframe(keyframe);},
    function(){editKeyframe();}
]

let allUndoFunctions = [
    function(){	undoAddSprite()	;}, // 0
    function(){		;},
    function(){	undoAddSprite()	;},
    function(){	undoAddSprite()	;},
    function(){	undoAddSprite()	;},
    function(){	undoAddSprite()	;}, // 5
    function(){	undoScale()	;},
    function(){	undoScale()	;},
    function(){	undoScale()	;},
    function(){	undoScale()	;},
    function(){	undoScale()	;}, // 10 
    function(){	undoScale()	;},
    function(){	undoScale()	;},
    function(){	undoScale()	;},
    function(){	undoRotate()	;},
    function(){	undoMove()	;}, // 15
    function(){	undoMove()	;},
    function(){	undoMove()	;},
    function(){	undoMove()	;},
    function(){	undoMove()	;},
    function(){	toggleOnionSkins()	;}, // 20
    function(){	turnOffSkins(skinArray)	;},
    function(){	displaySkins(skinArray, keyframe);
    displaySkins(skinArray, keyframe)	;},
    function(){	deconvert(sprite, x, y, w, h, r)	;},
    function(){	pause()	;},
    function(){	pause()	;}, // 25 
    function(){	play()	;},
    function(){	toggleLooping()	;},
    function(){	undoAddKeyframe()	;},
    function(){	undoDeleteKeyframe()	;},
    function(){	loadKeyframe(keyframe)	;}, // 30
    function(){	editKeyframe()	;},
]