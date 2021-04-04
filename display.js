// const atlas = loadFile("./res/atlas/atlas.txt");
// const elements = readElements(atlas);
// const coordinates = readCoordinates(atlas);

// const dict = {};
// for (i = 0; i < elements.length; i++) {
//     dict[elements[i]] = coordinates[i].split(",").map(Number);
// }




function displayElement(element, texture, sf, xp, yp) {
    const tmp = new PIXI.Texture(texture)

    const x = dict[element][0];
    const y = dict[element][1];
    const w = dict[element][2];
    const h = dict[element][3];

    const crop = new Rectangle(x,y,w,h);
    tmp.frame = crop;
    const sprite = new Sprite(tmp);
    app.stage.addChild(sprite);
    sprite.x = xp;
    sprite.y = yp;

    sprite.interactive = true;
    sprite.buttonMode = true;
    sprite.anchor.set(0.5);
    sprite.scale.set(1);
    sprite
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
}

function displayTexture(texture, sf, xp, yp) {
    const tmp = new PIXI.Texture(texture)
    const sprite = new Sprite(tmp);
    app.stage.addChild(sprite);
    sprite.x = xp;
    sprite.y = yp;

    sprite.interactive = true;
    sprite.buttonMode = true;
    sprite.anchor.set(0.5);
    sprite.scale.set(sf);
    sprite
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd1)
        .on('pointerupoutside', onDragEnd1)
        .on('pointermove', onDragMove);
}

function displayToggle(texture, sf, xp, yp) {
    const tmp = new PIXI.Texture(texture)
    const sprite = new Sprite(tmp);
    app.stage.addChild(sprite);
    sprite.x = xp;
    sprite.y = yp;

    sprite.interactive = true;
    sprite.buttonMode = true;
    sprite.anchor.set(0.5);
    sprite.scale.set(sf);
    sprite
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
}