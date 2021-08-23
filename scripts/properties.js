document.getElementById("xpos").value = "";
document.getElementById("ypos").value = "";
document.getElementById("width").value = "";
document.getElementById("height").value = "";
document.getElementById("rotation").value = "";

function setPropertyPanelValues(x, y, w, h, r){ // takes in visual values
  document.getElementById("xpos").value = Math.round(x);
  document.getElementById("ypos").value = Math.round(y);
  document.getElementById("width").value = Math.round(w);
  document.getElementById("height").value = Math.round(h);
  document.getElementById("rotation").value = Math.round(r * (180 / Math.PI));
}

function deconvert(sprite,x,y,w,h,r){
  if (sprite.directParent == null){
      sprite.x = x;
      sprite.y = -1*y+app.screen.height;
      sprite.width = w;
      sprite.height = h;
      sprite.rotation = r*(Math.PI/180);
  }
  else{
      let parent = sprite.directParent;
      sprite.x = (x - parent.visualX) * parent.originalWidth / parent.visualWidth;
      sprite.y = (-1*parent.visualY+app.screen.height - y) * parent.originalHeight / parent.visualHeight;
      sprite.width = w * parent.originalWidth / parent.visualWidth;
      sprite.height = h * parent.originalHeight / parent.visualHeight;
      sprite.rotation = r*(Math.PI/180) - parent.rotation;
  }
}

const propertyPanel = document.querySelector('#properties');

propertyPanel.addEventListener('change', (event) => {
  let tmpX = document.getElementById("xpos").value;
  let tmpY = document.getElementById("ypos").value;
  let tmpW = document.getElementById("width").value;
  let tmpH = document.getElementById("height").value;
  let tmpR = document.getElementById("rotation").value;

  selectedSprite.visualX = tmpX;
  selectedSprite.visualY = tmpY;
  selectedSprite.visualWidth = tmpW;
  selectedSprite.visualHeight = tmpH;
  selectedSprite.rotation = tmpR;

  deconvert(selectedSprite,tmpX,tmpY,tmpW,tmpH,tmpR);
  resizeButtons(selectedSprite);
});