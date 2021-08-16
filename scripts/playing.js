let tweens;
let frame;
let fps = 60;


const tweensSlider = document.getElementById("tweensSlider");
const tweensSliderLabel = document.getElementById("tweensSlider-label");
tweensSliderLabel.innerHTML = tweensSlider.value;
tweensSlider.oninput = function() {
  tweensSliderLabel.innerHTML = this.value;
  tweens = tweensSliderLabel.innerHTML;
  tweens++;
}

const fpsSlider = document.getElementById("fpsSlider");
const fpsSliderLabel = document.getElementById("fpsSlider-label");
fpsSliderLabel.innerHTML = fpsSlider.value;
fpsSlider.oninput = function() {
  fpsSliderLabel.innerHTML = this.value;
  fps = fpsSliderLabel.innerHTML;
}

tweens = tweensSlider.value;
fps = fpsSlider.value;

function playFromStart(){
    currentKeyframe = 0;
    play();
}


function play() {
    turnOffAllSkins();

    paused = false;

    disableButtons();
    currentRender = currentKeyframe;
    updateRenderedButton();
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