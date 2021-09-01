
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
          var imgWidth = 1000;
          var imgHeight = 300;
          reader.addEventListener('load', event => {
            PIXI.loader
              .add(event.target.result);
            image.src = event.target.result;
            // imgWidth = image.width;
            // imgHeight = image.height;
            console.log(imgWidth);
            console.log(imgHeight);
            // let circletexture = PIXI.Texture.from(event.target.result);
            // let a = displaySprite(PIXI.Texture.from(event.target.result), 100, 100, 100, 50);
           
            // for (x in a.buttonArray){
            //   let button = a.buttonArray[x];
            //   button.alpha = 1;
            //   console.log(button.height);
            //   console.log(button.width);
            // }

            var btexture = PIXI.Texture.from(event.target.result);
            displaySprite(btexture, 200, 200, 200, 100, null, null);
          });
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