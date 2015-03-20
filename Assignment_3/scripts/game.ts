﻿/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="constants.ts" />

/// <reference path="objects/spaceman.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/starfar.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/mete.ts" />
/// <reference path="objects/starmid.ts" />
/// <reference path="objects/starnear.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/coin.ts" />

/// <reference path="states/menu.ts" />
/// <reference path="states/gameplay.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instruction.ts" />

/// <reference path="objects/button.ts" />



// Game State Variables
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;

var gamePlay: states.GamePlay;
var gameOver: states.GameOver;
var menu: states.Menu;
var instruction: states.Instruction;

// Global game Variables
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;
var currentScore = 0;
var highScore = 0;



// Game Objects 
//var spaceman: objects.Spaceman;
//var island1: objects.Island;
//var island2: objects.Island;
//var island3: objects.Island;
//var island4: objects.Island;
var starFar1: objects.StarFar;
var starFar2: objects.StarFar;
var starMid1: objects.StarMid;
var starMid2: objects.StarMid;
var starNear1: objects.StarNear;
var starNear2: objects.StarNear;
var space: objects.Space;
//var coin: objects.Coin;
//var metes: objects.Mete[] = [];
//var scoreBoard: createjs.Text;
//var livesBoard: createjs.Text;
//var liveNumBoard: createjs.Text;

var score: number = 0;
var lives: number = 5;

var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
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
        //menu.update();        
    }
    
    spaceUpdate();
}

function changeState(state: number): void {
    // Launch Various "screens"
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
    starFar2.x =starFar2.width;
    starFar2.y = -80;
    stage.addChild(starFar2);

    starMid1 = new objects.StarMid();
    starMid1.x = 0;
    starMid1.y = -80;
    stage.addChild(starMid1);

    starMid2 = new objects.StarMid();
    starMid2.x =starMid2.width;
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

function spaceUpdate(){
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