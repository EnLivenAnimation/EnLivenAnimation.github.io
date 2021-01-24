let app = new PIXI.Application({ width: 4500, height: 2500 });
document.body.appendChild(app.view);
app.renderer.backgroundColor = 0xff0000;

//load an image and run the `setup` function when it's done
PIXI.loader
  .add("res/img/f16.jpg")
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the cat sprite
  let cat = new PIXI.Sprite(PIXI.loader.resources["res/img/f16.jpg"].texture);

  //Add the cat to the stage
  app.stage.addChild(cat);
}