let tweens = 30;
let frame;
let fps = 60;
let timelineLength = 0;
let currentRender = 0;
let currentKeyframe = -1;

const slider = document.getElementById("slider");
const sliderLabel = document.getElementById("slider-label");
sliderLabel.innerHTML = slider.value;
slider.oninput = function() {
    sliderLabel.innerHTML = this.value;
    tweens = sliderLabel.innerHTML;
    tweens++;
}

function play() {
    disableButtons();
    currentRender = 0;
    timelineLength = allSprites[0].timeline.length;
    playKeyframe();
}

function playKeyframe() {
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
        }
      
    }, 1000 / fps);
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
                currentRender++;
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
    currentKeyframe++;
    addButton(currentKeyframe);
}

function addButton(keyframe) {
    const btn = document.createElement("BUTTON");
    btn.setAttribute("id", `timeline-frame-${keyframe}`)
    btn.setAttribute("class", "timeline-frame");
    btn.setAttribute("onclick", `loadKeyframe(${keyframe})`);
    document.getElementById("timeline-keyframes").appendChild(btn);
    updateActiveButton(keyframe);
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
    updateActiveButton(currentKeyframe);
}

function updateActiveButton(keyframe) {
    const elements = document.getElementById("timeline-keyframes").children;
    for (let i = 0; i < elements.length; i ++) {
        elements[i].setAttribute("class", "inactive-keyframe");
    }
    document.getElementById(`timeline-frame-${keyframe}`).setAttribute("class", "active-keyframe");
}

function deleteKeyframe() {
    for (i in allSprites) {
        sprite = allSprites[i];
        sprite.timeline.splice(currentKeyframe, 1);
    }
}