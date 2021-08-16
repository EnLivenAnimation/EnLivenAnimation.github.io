const gg = PIXI.Texture.from("res/img/hero.jpeg");
const hg = PIXI.Texture.from("res/img/blackBackground.jpg");
const bg = PIXI.Texture.from("res/img/background.jpg");
function addBackground(background1,wantedTexture){
    background1.alpha = 1;
    background1.texture = wantedTexture;
  }
function addBlackBackground(){
  addBackground(background,hg)
}
function addDefault(){
  addBackground(background,bg)
}
function addYourName(){
  addBackground(background,gg)
}
