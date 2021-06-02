function setPropertyPanelValues(x, y, w, h, r){
  document.getElementById("x").value = Math.round(x);
  document.getElementById("y").value = Math.round(-1*y+app.screen.height);
  document.getElementById("w").value = Math.round(w);
  document.getElementById("h").value = Math.round(h);
  document.getElementById("r").value = Math.round(r * (180 / Math.PI));
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
  let tmpX = document.getElementById("x").value;
  let tmpY = document.getElementById("y").value;
  let tmpW = document.getElementById("w").value;
  let tmpH = document.getElementById("h").value;
  let tmpR = document.getElementById("r").value;

  selectedSprite.visualX = tmpX;
  selectedSprite.visualY = tmpY;
  selectedSprite.visualWidth = tmpW;
  selectedSprite.visualHeight = tmpH;
  selectedSprite.rotation = tmpR;

  deconvert(selectedSprite,tmpX,tmpY,tmpW,tmpH,tmpR);
  resizeButtons(selectedSprite);
});