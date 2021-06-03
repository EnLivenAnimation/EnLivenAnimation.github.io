document.getElementById("xpos").value = "";
document.getElementById("ypos").value = "";
document.getElementById("width").value = "";
document.getElementById("height").value = "";
document.getElementById("rotation").value = "";

function setPropertyPanelValues(x, y, w, h, r){
  document.getElementById("xpos").value = Math.round(x);
  document.getElementById("ypos").value = Math.round(-1*y+app.screen.height);
  document.getElementById("width").value = Math.round(w);
  document.getElementById("height").value = Math.round(h);
  document.getElementById("rotation").value = Math.round(r * (180 / Math.PI));
  document.getElementById("alpha").value = Math.round(a);
}

function deconvert(sprite,x,y,w,h,r,a){
  if (sprite.directParent == null){
      sprite.x = x;
      sprite.y = -1*y+app.screen.height;
      sprite.width = w;
      sprite.height = h;
      sprite.rotation = r*(Math.PI/180);
      sprite.alpha = a;
  }
  else{
      let parent = sprite.directParent;
      sprite.x = (x - parent.visualX) * parent.originalWidth / parent.visualWidth;
      sprite.y = (-1*parent.visualY+app.screen.height - y) * parent.originalHeight / parent.visualHeight;
      sprite.width = w * parent.originalWidth / parent.visualWidth;
      sprite.height = h * parent.originalHeight / parent.visualHeight;
      sprite.rotation = r*(Math.PI/180) - parent.rotation;
      sprite.alpha = a;
  }
}

const propertyPanel = document.querySelector('#properties');

propertyPanel.addEventListener('change', (event) => {
  let tmpX = document.getElementById("xpos").value;
  let tmpY = document.getElementById("ypos").value;
  let tmpW = document.getElementById("width").value;
  let tmpH = document.getElementById("height").value;
  let tmpR = document.getElementById("rotation").value;
  let tmpA = document.getElementById("alpha").value;

  selectedSprite.visualX = tmpX;
  selectedSprite.visualY = tmpY;
  selectedSprite.visualWidth = tmpW;
  selectedSprite.visualHeight = tmpH;
  selectedSprite.rotation = tmpR;
  selectedSprite.rotation = tmpA;

  deconvert(selectedSprite,tmpX,tmpY,tmpW,tmpH,tmpR,tmpA);
  resizeButtons(selectedSprite);
});