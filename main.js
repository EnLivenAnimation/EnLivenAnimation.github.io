// // //Aliases
// // let Application = PIXI.Application,
// //     loader = PIXI.loader,
// //     //resources = PIXI.loader.resources,
// //     Sprite = PIXI.Sprite;


// // //Create a Pixi Application
// // let app = new Application({ 
// //     width: 256, 
// //     height: 256,                       
// //     antialias: true, 
// //     transparent: false, 
// //     resolution: 1
// //   }
// // );

// // //Add the canvas that Pixi automatically created for you to the HTML document
// // document.body.appendChild(app.view);

// // //load an image and run the `setup` function when it's done
// // loader
// //   .add("h.jpg")
// //   .load(setup);

// // //This `setup` function will run when the image has loaded
// // function setup() {

// //   //Create the cat sprite
// //   let cat = new Sprite(PIXI.loader.resources["h.jpg"].texture);
  
// //   //Add the cat to the stage
// //   app.stage.addChild(cat);
// // }

// var renderer = PIXI.autoDetectRenderer(800, 600);
// document.body.appendChild(renderer.view);

// // create the root of the scene graph
// var stage = new PIXI.Container();

// // create a texture from an image path
// var texture = PIXI.Texture.fromImage('h.jpg');

//    createBunny(10 , 10);

// var texture1 = PIXI.Texture.fromImage('images/bone.jpg');

// function createBone(x,y){
//     var stuff = new PIXI.Sprite(texture1);

//     stage.addChild(stuff);

// }
// function createBunny(x, y)
// {
//     // create our little bunny friend..
//     var bunny = new PIXI.Sprite(texture);
//     // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
//     bunny.interactive = true;

//     // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
//     bunny.buttonMode = true;

//     // center the bunny's anchor point
//     bunny.anchor.set(0.5);

//     // make it a bit bigger, so it's easier to grab
//     bunny.scale.set(.25);

//     // setup events
//     bunny
//         // events for drag start
//         .on('mousedown', onDragStart)
//         .on('touchstart', onDragStart)
//         // events for drag end
//         .on('mouseup', onDragEnd)
//         .on('mouseupoutside', onDragEnd)
//         .on('touchend', onDragEnd)
//         .on('touchendoutside', onDragEnd)
//         // events for drag move
//         .on('mousemove', onDragMove)
//         .on('touchmove', onDragMove);

//     // move the sprite to its designated position
//     bunny.position.x = x;
//     bunny.position.y = y;

//     // add it to the stage
//     stage.addChild(bunny);
// }

// requestAnimationFrame( animate );

// function animate() {

//     requestAnimationFrame(animate);

//     // render the stage
//     renderer.render(stage);
// }

// function onDragStart(event)
// {
//     // store a reference to the data
//     // the reason for this is because of multitouch
//     // we want to track the movement of this particular touch
//     this.data = event.data;
//     this.alpha = 0.5;
//     this.dragging = true;
// }

// function onDragEnd()
// {
//     this.alpha = 1;

//     this.dragging = false;

//     // set the interaction data to null
//     this.data = null;
// }

// function onDragMove()
// {
//     if (this.dragging)
//     {
//         var newPosition = this.data.getLocalPosition(this.parent);
//         this.position.x = newPosition.x;
//         this.position.y = newPosition.y;
//     }
// }

