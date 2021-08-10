let loop = false;
let paused = true;

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

