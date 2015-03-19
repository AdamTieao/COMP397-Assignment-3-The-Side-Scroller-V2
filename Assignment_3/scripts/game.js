/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/spaceman.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/starfar.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/mete.ts" />
/// <reference path="objects/starmid.ts" />
/// <reference path="objects/starnear.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/coin.ts" />
// Global game Variables
var canvas;
var game;
var stage;
var assets;
// Game Objects 
var spaceman;
var island1;
var island2;
var island3;
var island4;
var starFar1;
var starFar2;
var starMid1;
var starMid2;
var starNear1;
var starNear2;
var space;
var coin;
var metes = [];
var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "coin", src: "assets/images/coin.png" },
    { id: "spaceman", src: "assets/images/spaceman.png" },
    { id: "starFar", src: "assets/images/starFar.png" },
    { id: "starMid", src: "assets/images/starMid.png" },
    { id: "starNear", src: "assets/images/starNear.png" },
    { id: "mete", src: "assets/images/mete.png" },
    { id: "space", src: "assets/images/space.png" }
];
function Preload() {
    assets = new createjs.LoadQueue(); // create a new preloader
    assets.installPlugin(createjs.Sound); // need plugin for sounds
    assets.on("complete", init, this); // when assets finished preloading - then init function
    assets.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events       
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}
function gameLoop() {
    spaceman.update();
    island1.update();
    island2.update();
    island3.update();
    island4.update();
    starFar1.update();
    starFar2.update();
    starMid1.update();
    starMid2.update();
    starNear1.update();
    starNear2.update();
    coin.update();
    for (var mete = 0; mete < 3; mete++) {
        metes[mete].update();
    }
    stage.update(); // Refreshes our stage
    connStarFar();
    connStarMid();
    connStarNear();
}
// Our Game Kicks off in here
function main() {
    space = new objects.Space();
    stage.addChild(space);
    //Island object
    island1 = new objects.Island();
    island1.spawnNum = 1;
    island1.reset();
    //stage.addChild(island1);
    island2 = new objects.Island();
    island2.spawnNum = 2;
    island2.reset();
    //stage.addChild(island2);
    island3 = new objects.Island();
    island3.spawnNum = 3;
    island3.reset();
    //stage.addChild(island3);
    island4 = new objects.Island();
    island4.spawnNum = 4;
    island4.reset();
    //stage.addChild(island4);
    starFar1 = new objects.StarFar();
    starFar1.x = 0;
    starFar1.y = -80;
    stage.addChild(starFar1);
    starFar2 = new objects.StarFar();
    starFar2.x = starFar2.width;
    starFar2.y = -80;
    stage.addChild(starFar2);
    starMid1 = new objects.StarMid();
    starMid1.x = 0;
    starMid1.y = -80;
    stage.addChild(starMid1);
    starMid2 = new objects.StarMid();
    starMid2.x = starMid2.width;
    starMid2.y = -80;
    stage.addChild(starMid2);
    starNear1 = new objects.StarNear();
    starNear1.x = 0;
    starNear1.y = -80;
    stage.addChild(starNear1);
    starNear2 = new objects.StarNear();
    starNear2.x = starNear2.width;
    starNear2.y = -80;
    stage.addChild(starNear2);
    coin = new objects.Coin();
    coin.reset();
    stage.addChild(coin);
    for (var mete = 0; mete < 3; mete++) {
        metes[mete] = new objects.Mete();
        metes[mete].reset();
        stage.addChild(metes[mete]);
    }
    spaceman = new objects.Spaceman();
    spaceman.x = spaceman.width * 0.5;
    stage.addChild(spaceman);
    console.log(island1.y);
    console.log(island2.y);
    console.log(island3.y);
    console.log(island4.y);
}
function connStarFar() {
    if (starFar1.x <= -starFar1.width) {
        starFar1.reset();
    }
    if (starFar2.x <= -starFar2.width) {
        starFar2.reset();
    }
}
function connStarMid() {
    if (starMid1.x <= -starMid1.width) {
        starMid1.reset();
    }
    if (starMid2.x <= -starMid2.width) {
        starMid2.reset();
    }
}
function connStarNear() {
    if (starNear1.x <= -starNear1.width) {
        starNear1.reset();
    }
    if (starNear2.x <= -starNear2.width) {
        starNear2.reset();
    }
}
//# sourceMappingURL=game.js.map