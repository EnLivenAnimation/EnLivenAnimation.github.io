function displaySprite(texture, visualX, visualY, visualWidth, visualHeight, tint, parent) {
  DisplayedSprite = new Sprite(texture);
  DisplayedSprite.x = visualX;
  DisplayedSprite.y = -1*visualY+app.screen.height;
  DisplayedSprite.visualX = visualX;
  DisplayedSprite.visualY = visualY;
  DisplayedSprite.originalWidth = DisplayedSprite.width;
  DisplayedSprite.originalHeight = DisplayedSprite.height;
  DisplayedSprite.width = visualWidth;
  DisplayedSprite.height = visualHeight;
  DisplayedSprite.visualWidth = visualWidth;
  DisplayedSprite.visualHeight = visualHeight;
  DisplayedSprite.indexinAllSprites = allSprites.length;
  DisplayedSprite.d = [0, 0, 0, 0, 0];
  DisplayedSprite.interactive = true;
  DisplayedSprite.buttonMode = true;
  DisplayedSprite.anchor.set(0.5);
  if (tint != null){
      DisplayedSprite.tint = tint;
  }
  DisplayedSprite.timeline = [];
  DisplayedSprite
    .on('pointerdown', onDragStartSprite)
    .on('pointerup', onDragEndSprite)
    .on('pointerupoutside', onDragEndSprite)
    .on('pointermove', onDragMoveSprite)
    .on('click', enableButtons);
  DisplayedSprite.spriteChildren = [];

  DisplayedSprite.deleted = false;

  app.stage.addChild(DisplayedSprite);
  allSprites.push(DisplayedSprite);

  DisplayedSprite.directParent = null;
  if (parent != null) {
      parent.addChild(DisplayedSprite);
      parent.spriteChildren.push(DisplayedSprite);

      DisplayedSprite.x = (visualX - parent.visualX)*parent.originalWidth/parent.visualWidth;
      // console.log(app.screen.height);
      // console.log(parent.visualY);
      // console.log(DisplayedSprite.visualY);
      DisplayedSprite.y = (-1*parent.visualY+app.screen.height-visualY) * parent.originalHeight / parent.visualHeight;
      DisplayedSprite.width = visualWidth*parent.originalWidth/parent.visualWidth;
      DisplayedSprite.height = visualHeight*parent.originalHeight/parent.visualHeight;
      DisplayedSprite.directParent = parent;
  }

  if (timelineLength > 0){
      for (i = 0; i < timelineLength; i++){
          DisplayedSprite.timeline.push([-1]);
      }
  }
  let Buttontexture = PIXI.Texture.from("res/img/square.jpg");
  button1 =  new Sprite(Buttontexture);
  button2 =  new Sprite(Buttontexture);
  button3 =  new Sprite(Buttontexture);
  button4 =  new Sprite(Buttontexture);
  button5 =  new Sprite(Buttontexture);
  button6 =  new Sprite(Buttontexture);
  button7 =  new Sprite(Buttontexture);
  button8 =  new Sprite(Buttontexture);
  buttonR =  new Sprite(Buttontexture);

  DisplayedSprite.buttonArray = [button1, button2, button3, button4, button5, button6, button7, button8, buttonR];
  let m = DisplayedSprite.originalWidth/2;
  let n = DisplayedSprite.originalHeight/2;
  DisplayedSprite.m = m;
  DisplayedSprite.n = n;
  xs = [-m, 0, m, m, m, 0, -m, -m, 0];
  ys = [-n, -n, -n, 0, n, n, n, 0, -n*(1+40/DisplayedSprite.originalHeight)];
  
  for (i in DisplayedSprite.buttonArray) {
      currButton = DisplayedSprite.buttonArray[i];
      DisplayedSprite.addChild(currButton);
      currButton.anchor.set(0.5);
      currButton.interactive = true;
      currButton.buttonMode = true;
      currButton.x = xs[i];
      currButton.y = ys[i];
      currButton.tint = 0x1a73e8;
      currButton
          .on('pointerdown', onDragStartButton)
          .on('pointerup', onDragEndButton)
          .on('pointerupoutside', onDragEndButton);
  }
  DisplayedSprite.buttonArray[0]
      .on('pointermove', B1);
  DisplayedSprite.buttonArray[1]
      .on('pointermove', B2);
  DisplayedSprite.buttonArray[2]
      .on('pointermove', B3);
  DisplayedSprite.buttonArray[3]
      .on('pointermove', B4);
  DisplayedSprite.buttonArray[4]
      .on('pointermove', B5);
  DisplayedSprite.buttonArray[5]
      .on('pointermove', B6);
  DisplayedSprite.buttonArray[6]
      .on('pointermove', B7);
  DisplayedSprite.buttonArray[7]
      .on('pointermove', B8);
  DisplayedSprite.buttonArray[8]
      .on('pointermove', BRotate);
  resizeButtons(DisplayedSprite);
  disableButtons();
  return DisplayedSprite;
}

function displaySprite2(texture, visualX, visualY, visualWidth, visualHeight, tint, parent, rotate){
    let a =  displaySprite(texture, visualX, visualY, visualWidth, visualHeight, tint, parent);
    a.angle = rotate;
    return a;
}

/* 
allSprites[2] x = 133 and y = 112
allSprites[3] x = 203 and y = 221
allSprites[4] x = 259 and y = 308
allSprites[5] x = 306  and y = 374
allSprites[6] x = 368 and y = 444
allSprites[7] x = 427  and y = 364
allSprites[8] x = 460 and y = 284
allSprites[9] x = 495 and y = 218
allSprites[10] x = 532  and y = 209
allSprites[11] x = 581 and y = 245
allSprites[12] x = 608 and y = 307
allSprites[13] x = 620 and y = 349
allSprites[14] x = 707  and y = 451
allSprites[15] x = 765 and y = 357
allSprites[16] x = 790 and y = 311 
allSprites[17] x = 825 and y = 289
allSprites[18] x = 842  and y = 324
allSprites[19] x = 858  and y = 369
allSprites[20] x = 868 and y = 393
*/