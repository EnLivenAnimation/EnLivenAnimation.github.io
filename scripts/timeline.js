let timelineLength = 0;
let currentRender = 0;
let currentKeyframe = -1;


function enableDeleteKeyframeButton(){
  document.getElementById("deleteKeyframeButton").setAttribute("class", "delete-enabled");
  document.getElementById("deleteKeyframeButton").setAttribute("onclick", "deleteCurrentKeyframe();");
}

function disableDeleteKeyframeButton(){
  document.getElementById("deleteKeyframeButton").setAttribute("class", "delete-disabled");
  document.getElementById("deleteKeyframeButton").setAttribute("onclick", "");
}

function addKeyframe() {
  for (i in allSprites) {
    sprite = allSprites[i];
    const g = [sprite.x, sprite.y, sprite.width, sprite.height, sprite.rotation];
    sprite.timeline.splice(currentKeyframe+1, 0, g);
  }
  currentKeyframe ++;

  addButton();
  setButtons();

  // console.log("added");

  undoStack.push([28, [currentKeyframe]]);

  timelineLength++;

  enableDeleteKeyframeButton();

  updateActiveButton();
}

function undoAddKeyframe(){
  if (undoparam.length != 1){
    console.alert("Something broke! D:")
  }
  else{
    deleteKeyframe(undoparam[0]);
  }
}

function loadKeyframe(keyframe) {
  currentKeyframe = keyframe;
  for (i in allSprites) {
    sprite = allSprites[i];
    sprite.x = sprite.timeline[currentKeyframe][0];
    sprite.y = sprite.timeline[currentKeyframe][1];
    sprite.width = sprite.timeline[currentKeyframe][2];
    sprite.height = sprite.timeline[currentKeyframe][3];
    sprite.rotation = sprite.timeline[currentKeyframe][4];
    resizeButtons(sprite);
  }

  // console.log(currentKeyframe - 1);
  // console.log(currentKeyframe + 1);
  displaySkins(allSkins[0], currentKeyframe - 1);
  // preframe
  displaySkins(allSkins[1], currentKeyframe + 1);
  // postframe

  updateActiveButton();
}

let dtIndex = 0;

function deleteCurrentKeyframe() {
  for (i in allSprites) {
    sprite = allSprites[i];
    sprite.deletedTimeline.push(sprite.timeline[currentKeyframe]);
    sprite.timeline.splice(currentKeyframe, 1);
  }

  if (isThisNotAnUndo){
    undoStack.push([29, [dtIndex, currentKeyframe]]);
    // console.log("added an undo to stack");
    
    resetUndo();
  }

  dtIndex++;

  // console.log("deleted");

  timelineLength--;
  if (timelineLength >= currentKeyframe){
    currentKeyframe--;
  }
  if (timelineLength == 0){
    disableDeleteKeyframeButton();
    
    deleteKeyframe0();
  } else{
    deleteButton();
    setButtons();
    updateActiveButton();
  }
}

function deleteKeyframe(keyframe){
  currentKeyframe = keyframe;
  deleteCurrentKeyframe();
}

function undoDeleteKeyframe(){
  if (undoparam.length != 2){
    console.alert("Something broke! D:")
  }
  else{ // 0 is the place in the deletedKeyframe
    // 1 is the index where it should be inserted
    reAddKeyframe(undoparam[0], undoparam[1]);
  }
}

function reAddKeyframe(dtindex, index){
  for (i in allSprites){
    sprite = allSprites[i];
    tmp = sprite.deletedTimeline[dtindex];
    tmp2 = [tmp[0], tmp[1], tmp[2], tmp[3], tmp[4]];
    sprite.timeline.splice(index, 0, tmp2);
  }

  // console.log("readded");

  currentKeyframe = index;
  
  timelineLength++;

  enableDeleteKeyframeButton();

  addButton();
  setButtons();

  updateActiveButton();
}

function editKeyframe() {
  for (i in allSprites) {
    sprite = allSprites[i];
    sprite.timeline.splice(currentKeyframe, 1);
  }

  currentKeyframe--;

  for (i in allSprites) {
    sprite = allSprites[i];
    const g = [sprite.x, sprite.y, sprite.width, sprite.height, sprite.rotation];
    sprite.timeline.splice(currentKeyframe+1, 0, g);
  }

  currentKeyframe ++;

  setButtons();
  updateActiveButton();
}

function addButton() {
  const btn = document.createElement("button");
  document.getElementById("timeline-keyframes").appendChild(btn);
}

function deleteButton() {
  document.getElementById(`timeline-frame-${currentKeyframe}`).remove();
}

function deleteKeyframe0() {
  document.getElementById(`timeline-frame-0`).remove();
}

function setButtons() {
  const elements = document.getElementById("timeline-keyframes").children;

  for (let i = 0; i < elements.length; i ++) {
    const element = elements[i];
    element.setAttribute("id", `timeline-frame-${i}`)
    element.setAttribute("class", "timeline-frame");
    element.setAttribute("onclick", `loadKeyframe(${i})`);
    element.innerHTML = i + 1;
  }

  updateActiveButton();
}

function updateActiveButton() {
  const elements = document.getElementById("timeline-keyframes").children;
  for (let i = 0; i < elements.length; i ++) {
    elements[i].setAttribute("class", "inactive-keyframe");
  }
  document.getElementById(`timeline-frame-${currentKeyframe}`).setAttribute("class", "active-keyframe");
}

function updateRenderedButton() {
  const elements = document.getElementById("timeline-keyframes").children;
  for (let i = 0; i < elements.length; i ++) {
    elements[i].setAttribute("class", "inactive-keyframe");
  }
  document.getElementById(`timeline-frame-${currentRender}`).setAttribute("class", "active-keyframe");
}

function loadButtons() {
  if (allSprites[0].timeline.length > 0) {
    currentKeyframe = 0;
    for (let i = 0; i < allSprites[0].timeline.length; i ++) {
      addButton();
    }
    setButtons();
    loadKeyframe(0);
  }
}