function propertyPanel(x, y, w, h, r) {
  document.getElementById("x").innerHTML = "X - " + Math.round(x);
  document.getElementById("y").innerHTML = "Y - " + Math.round(y);
  document.getElementById("w").innerHTML = "W - " + Math.round(w);
  document.getElementById("h").innerHTML = "H - " + Math.round(h);
  document.getElementById("r").innerHTML = "R - " + Math.round(r * (180 / Math.PI));
}