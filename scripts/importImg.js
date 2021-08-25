

const status = document.getElementById('status');
const output = document.getElementById('output');
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
          reader.addEventListener('load', event => {
            PIXI.loader
              .add(event.target.result);
            let circletexture = PIXI.Texture.from(event.target.result);
            displaySprite(circletexture, 100, 100, 1000, 500, null, null);
            // add this to the timeline
            //output.src = event.target.result;
          });
          reader.readAsDataURL(file);
        }); 
      }