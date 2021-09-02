var circletexture = PIXI.Texture.from("res/img/circle.png");
var squaretexture = PIXI.Texture.from("res/img/square.jpg");
var triangletexture = PIXI.Texture.from("res/img/triangle.png");
var spritesheet = PIXI.utils.TextureCache["res/img/spritesheet-human.png"];

var textureHead = new PIXI.Texture(spritesheet);
var textureTorso = new PIXI.Texture(spritesheet);
var textureLeftArm = new PIXI.Texture(spritesheet);
var textureRightArm = new PIXI.Texture(spritesheet);
var textureLeftLeg = new PIXI.Texture(spritesheet);
var textureRightLeg = new PIXI.Texture(spritesheet);

var headrectangle = new Rectangle(31,31,176,176);
var torsorectangle = new Rectangle(21,236,156,298);
var rightarmrectangle = new Rectangle(372,31,87,267);
var leftarmrectangle = new Rectangle(225,24,105,261);
var rightlegrectangle = new Rectangle(373,313,100,258);
var leftlegrectangle = new Rectangle(212,320,83,266);

textureTorso.frame = torsorectangle;

textureHead.frame = headrectangle;

textureLeftArm.frame = leftarmrectangle;

textureRightArm.frame = rightarmrectangle;

textureLeftLeg.frame = leftlegrectangle;

textureRightLeg.frame = rightlegrectangle;