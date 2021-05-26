function propertyPanel(x, y, w, h, r) {
  document.getElementById("p1").innerHTML = "X - " + Math.round(x);
  document.getElementById("p2").innerHTML = "Y - " + Math.round(y);
  document.getElementById("p3").innerHTML = "W - " + Math.round(w);
  document.getElementById("p4").innerHTML = "H - " + Math.round(h);
  document.getElementById("p5").innerHTML = "R - " + Math.round(r * (180 / Math.PI));
}