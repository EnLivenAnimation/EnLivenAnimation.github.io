const slider = document.getElementById("slider");
const sliderLabel = document.getElementById("slider-label");
sliderLabel.innerHTML = slider.value;
slider.oninput = function() {
    sliderLabel.innerHTML = this.value;
    tweens = sliderLabel.innerHTML;
    tweens++;
}