let tweens;
let frame;
let fps = 60;
let timelineLength = 0;
let currentRender = 0;
let currentKeyframe = -1;
let loop = false;
let paused = true;

const slider = document.getElementById("slider");
const sliderLabel = document.getElementById("slider-label");
sliderLabel.innerHTML = slider.value;
slider.oninput = function() {
  sliderLabel.innerHTML = this.value;
  tweens = sliderLabel.innerHTML;
  tweens++;
}

tweens = slider.value;

function play() {
  paused = false;

  disableButtons();
  currentRender = 0;
  updateRenderedButton();
  timelineLength = allSprites[0].timeline.length;
  playKeyframe();
}

function playKeyframe() {
  if (!paused) {
    setTimeout(function () {
      if (currentRender < timelineLength - 1) {
        for (s in allSprites) {
          sprite = allSprites[s];
          sprite.position.set(sprite.timeline[currentRender][0], sprite.timeline[currentRender][1]);
          sprite.width = sprite.timeline[currentRender][2];
          sprite.height = sprite.timeline[currentRender][3];
          sprite.rotation = sprite.timeline[currentRender][4];
          
          for (j in sprite.d) {
            sprite.d[j] = (sprite.timeline[currentRender+1][j] - sprite.timeline[currentRender][j]) / tweens;
          }
        }
        frame = 0;
        move();
      } else if (loop) {
        setTimeout(function(){ 
          currentRender = 0;
          currentKeyframe = 0;
          updateRenderedButton();
          playKeyframe();
        }, 1000 * tweens / fps);
      }
    }, 1000 / fps);
  }
}

function pause() {
  paused = true;
}

function toggleLooping() {
  if (loop) {
    loop = false;
    document.getElementById("loop").setAttribute("class", "loop-disabled");
  } else {
    loop = true;
    document.getElementById("loop").setAttribute("class", "loop-enabled");
  }
}

function move() {
  setTimeout(function () {
    if (frame < tweens) {
      frame++;
      for (s in allSprites) {
        sprite = allSprites[s];
        sprite.x += sprite.d[0];
        sprite.y += sprite.d[1];
        sprite.width += sprite.d[2];
        sprite.height += sprite.d[3];
        sprite.rotation += sprite.d[4];
        resizeButtons(sprite);
      }
      move();
    } else {
      if (currentRender < timelineLength - 1) {
        currentRender ++;
        currentKeyframe ++;
        updateRenderedButton();
      }
      this.playKeyframe();
    }
  }, 1000 / fps);
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
  updateActiveButton();
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

  updateActiveButton();
}

function deleteKeyframe() {
  for (i in allSprites) {
    sprite = allSprites[i];
    sprite.timeline.splice(currentKeyframe, 1);
  }
  deleteButton();
  setButtons();
  updateActiveButton();
}

function editKeyframe() {
  for (i in allSprites) {
    sprite = allSprites[i];
    sprite.timeline.splice(currentKeyframe, 1);
  }

  currentKeyframe --;

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