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