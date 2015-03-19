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
var game: createjs.Container;
var stage: createjs.Stage;
var assets: createjs.LoadQueue;
var assetLoader: createjs.LoadQueue;

// Game Objects 
var spaceman: objects.Spaceman;
var island1: objects.Island;
var island2: objects.Island;
var island3: objects.Island;
var island4: objects.Island;
var starFar1: objects.StarFar;
var starFar2: objects.StarFar;
var starMid1: objects.StarMid;
var starMid2: objects.StarMid;
var starNear1: objects.StarNear;
var starNear2: objects.StarNear;
var space: objects.Space;
var coin: objects.Coin;
var metes: objects.Mete[] = [];
var scoreBoard: createjs.Text;
var livesBoard: createjs.Text;
var liveNumBoard: createjs.Text;

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
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" }
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
    game = new createjs.Container;
    stage.enableMouseOver(20); // Enable mouse events   
    stage.addChild(game);    
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

function distance(p1, p2) {
    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}

function checkCollision(collider) {
    var planePosition = new createjs.Point(spaceman.x, spaceman.y);
    var cloudPosition = new createjs.Point(collider.x, collider.y);
    var theDistance = distance(planePosition, cloudPosition);
    if (theDistance < ((spaceman.width * 0.5) + (collider.width * 0.5))) {
        if (collider.isColliding != true) {
            createjs.Sound.play(collider.sound);
            if (collider.name == "mete") {
                lives--;
            }
            if (collider.name == "coin") {
                score += 100;
                coin.reset();                
            }            
            console.log(lives);
            console.log(score);
        }
        collider.isColliding = true;
    }
    else {
        collider.isColliding = false;
    }
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

    checkCollision(coin);

    for (var mete = 0; mete < 3; mete++) {        
        metes[mete].update();    
        checkCollision(metes[mete]);  
    }
    


    stage.update(); // Refreshes our stage
    connStarFar();
    connStarMid();
    connStarNear();
    liveNumBoard.text = lives.toString();
    scoreBoard.text = "Score: " + score.toString();

    if (lives <= 2) {
        liveNumBoard.color = "red";        
    }


    
}







// Our Game Kicks off in here
function main() {

    space = new objects.Space();
    game.addChild(space);

    

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
    game.addChild(starFar1);

    starFar2 = new objects.StarFar();
    starFar2.x = starFar2.width;
    starFar2.y = -80;
    game.addChild(starFar2);

    starMid1 = new objects.StarMid();
    starMid1.x = 0;
    starMid1.y = -80;
    game.addChild(starMid1);

    starMid2 = new objects.StarMid();
    starMid2.x = starMid2.width;
    starMid2.y = -80;
    game.addChild(starMid2);

    starNear1 = new objects.StarNear();
    starNear1.x = 0;
    starNear1.y = -80;
    game.addChild(starNear1);

    starNear2 = new objects.StarNear();
    starNear2.x = starNear2.width;
    starNear2.y = -80;
    game.addChild(starNear2);


    coin = new objects.Coin();
    coin.reset();
    game.addChild(coin);

    for (var mete = 0; mete < 3; mete++)
    {
        metes[mete] = new objects.Mete();
        metes[mete].reset();
        game.addChild(metes[mete]);
    }

    spaceman = new objects.Spaceman();
    spaceman.x = spaceman.width * 0.5;
    game.addChild(spaceman);
    
    scoreBoard = new createjs.Text("Score: " + score.toString(), "40px Arial", "yellow");
    scoreBoard.x = 250;
    game.addChild(scoreBoard)

    livesBoard = new createjs.Text("Lives: ", "40px Arial", "yellow");
    livesBoard.x = 10;
    game.addChild(livesBoard);

    liveNumBoard = new createjs.Text("" + lives.toString, "40px Arial", "yellow");
    liveNumBoard.x = 130;
    game.addChild(liveNumBoard);
}

function connStarFar() {
    if (starFar1.x <= -starFar1.width)
    {
        starFar1.reset();        
    }

    if (starFar2.x <= -starFar2.width)
    {
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