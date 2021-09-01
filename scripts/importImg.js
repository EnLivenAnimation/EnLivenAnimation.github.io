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
//     var imgWidth = 1000;
//     var imgHeight = 300;
//     reader.addEventListener('load', event => {
//       PIXI.loader
//         .add(event.target.result);
//       image.src = event.target.result;
//       imgWidth = image.src.width;
//       imgHeight = image.height;

//       let b = addBlankSprite();
//       b.texture = PIXI.Texture.from(event.target.result);

//       console.log(imgWidth);
//       console.log(imgHeight);
//     });
//     reader.readAsDataURL(file);
//   }); 
// }

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

    reader.addEventListener("load", function () {
      
      var image = new Image();
      var height = image.height;
      var width = image.width;
      
      image.height = 100;
      image.title = file.name;
      image.src = this.result;
      var texture = PIXI.Texture.from(image);
      displaySprite(event.target.result, 200, 200, 200, 100, null, null);
    })

    reader.readAsDataURL(file);
  }); 
}

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