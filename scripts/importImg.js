if (window.FileList && window.File && window.FileReader) {
  document.getElementById('file-Img-selector').addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file.type) {
      return;
    }
    if (!file.type.match('image.*')) {
      return;
    }
    const reader = new FileReader();
    var image = new Image();
    reader.addEventListener('load', event => {
      // PIXI.loader
      //   .add(event.target.result);
      let a = displaySprite(PIXI.Texture.from(event.target.result), 200, 200, 300, 100);
      for (i = 0; i < a.buttonArray.length;i++){
        a.buttonArray[i].width = 10;
        a.buttonArray[i].height = 10;
        a.buttonArray[i].alpha = 1;
        a.buttonArray[i].interactive = true;
      }
    });
    reader.readAsDataURL(file);
  }); 
}
// function addCircle2(){
//   let circletexture = PIXI.Texture.from("res/img/circle.png");
//   var tempSprite = displaySprite(circletexture, 100, 100, 1000, 400, null, null);
  
//   undoStack.push([0, [tempSprite]]);

//   return tempSprite;
// }
// function addBlankSprite(){
//   var sprite = addCircle2();
//   sprite.tint = 0xffffff;
//   return sprite;
// }

// if (window.FileList && window.File && window.FileReader) {
//   document.getElementById('file-Img-selector').addEventListener('change', event => {
//     const file = event.target.files[0];
//     if (!file.type) {
//       return;
//     }
//     if (!file.type.match('image.*')) {
//       return;
//     }
//     const reader = new FileReader();
//     var image = new Image();
//     reader.addEventListener('load', event => {
//       PIXI.loader
//         .add(event.target.result);
//       let b = addBlankSprite();
//       b.texture = PIXI.Texture.from(event.target.result);
//       resetVisualValues(b);
//       resizeButtons(b);
//     });
//     reader.readAsDataURL(file);
//   }); 
// }


// if (window.FileList && window.File && window.FileReader) {
//   document.getElementById('file-Img-selector').addEventListener('change', event => {
//     const file = event.target.files[0];
//     if (!file.type) {
//       return;
//     }
//     if (!file.type.match('image.*')) {
//       return;
//     }
//     const reader = new FileReader();

//     reader.addEventListener("load", event =>{
      
//       var image = new Image();
//       var height = image.height;
//       var width = image.width;
      
//       image.height = 100;
//       image.title = file.name;
//       image.src = event.target.result;
//       PIXI.loader.add(event.target.result);
//       var texture = PIXI.Texture.from(image);
//       displaySprite(PIXI.Texture.from(event.target.result), 200, 200, 200, 100, null, null);
//     })

//     reader.readAsDataURL(file);
//   }); 
// }
if (window.FileList && window.File && window.FileReader) {
  document.getElementById('file-BackgroundImg-selector').addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file.type) {
      return;
    }
    if (!file.type.match('image.*')) {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', event => {
      PIXI.loader
        .add(event.target.result);
      let bgTexture = PIXI.Texture.from(event.target.result);
      addBackground(background,bgTexture);
      // add this to the timeline
      //output.src = event.target.result;
    });
    reader.readAsDataURL(file);
  }); 
}
