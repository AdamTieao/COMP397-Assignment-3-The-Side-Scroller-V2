/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/spaceman.ts" />
/// <reference path="objects/starfar.ts" />
/// <reference path="objects/mete.ts" />
/// <reference path="objects/starmid.ts" />
/// <reference path="objects/starnear.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/red.ts" />
/// <reference path="objects/heart.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameplay.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="objects/button.ts" />
// Game State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
var gamePlay;
var gameOver;
var menu;
var instruction;
// Global game Variables
var canvas;
var stage;
var assetLoader;
var currentScore = 0;
var highScore = 0;
// Game Objects 
var starFar1;
var starFar2;
var starMid1;
var starMid2;
var starNear1;
var starNear2;
var space;
var score = 0;
var lives = 5;
var manifest = [
    { id: "coin", src: "assets/images/coin.png" },
    { id: "spaceman", src: "assets/images/spaceman.png" },
    { id: "starFar", src: "assets/images/starFar.png" },
    { id: "starMid", src: "assets/images/starMid.png" },
    { id: "starNear", src: "assets/images/starNear.png" },
    { id: "mete", src: "assets/images/mete.png" },
    { id: "space", src: "assets/images/space.png" },
    { id: "background", src: "assets/audio/BGM.mp3" },
    { id: "select", src: "assets/audio/selectSound.wav" },
    { id: "click", src: "assets/audio/clickSound.wav" },
    { id: "coinSound", src: "assets/audio/coinSound.mp3" },
    { id: "explosion", src: "assets/audio/explosionSound.wav" },
    { id: "startButton", src: "assets/images/startButton.png" },
    { id: "menuButton", src: "assets/images/menuButton.png" },
    { id: "instructionButton", src: "assets/images/instructionButton.png" },
    { id: "red", src: "assets/images/red.png" },
    { id: "heart", src: "assets/images/heart.png" },
    { id: "tryAgainButton", src: "assets/images/tryAgainButton.png" }
];
function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function
    assetLoader.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    backgrounds();
    createjs.Sound.play("background", { loop: -1 });
    stage.enableMouseOver(20); // Enable mouse events   
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
function gameLoop() {
    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }
    spaceUpdate();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.PLAY_STATE:
            // instantiate game play screen
            gamePlay = new states.GamePlay();
            currentStateFunction = gamePlay;
            break;
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
        case constants.INSTRUCTION_STATE:
            instruction = new states.Instruction();
            currentStateFunction = instruction;
            break;
    }
}
function backgrounds() {
    space = new objects.Space();
    stage.addChild(space);
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
}
function spaceUpdate() {
    starFar1.update();
    starFar2.update();
    starMid1.update();
    starMid2.update();
    starNear1.update();
    starNear2.update();
    connStarFar();
    connStarMid();
    connStarNear();
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