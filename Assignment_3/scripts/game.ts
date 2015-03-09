/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />




/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/ocean.ts" />



// Global game Variables
var canvas;
var game: createjs.Container;
var stage: createjs.Stage;
var assets: createjs.LoadQueue;


// Game Objects 
var plane: objects.Plane;
var island1: objects.Island;
var island2: objects.Island;
var island3: objects.Island;
var island4: objects.Island;
var ocean1: objects.Ocean;
var ocean2: objects.Ocean;

var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" }
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


    plane.update();
    island1.update();   
    island2.update();   
    island3.update();   
    island4.update();   
    ocean1.update();
    ocean2.update();    

    stage.update(); // Refreshes our stage
    connOcean();
    
}







// Our Game Kicks off in here
function main() {

    ocean1 = new objects.Ocean();
    ocean1.x = 0;
    ocean1.y = -80;
    stage.addChild(ocean1);

    ocean2 = new objects.Ocean();
    ocean2.x = ocean2.width;
    ocean2.y = -80;
    stage.addChild(ocean2);

    //Island object
    island1 = new objects.Island(); 
    island1.spawnNum = 1;   
    island1.reset();
    stage.addChild(island1);

    island2 = new objects.Island();
    island2.spawnNum = 2;   
    island2.reset();
    stage.addChild(island2);

    island3 = new objects.Island();
    island3.spawnNum = 3;   
    island3.reset();
    stage.addChild(island3);

    island4 = new objects.Island();
    island4.spawnNum = 4;   
    island4.reset();
    stage.addChild(island4);


    //Plane object
    plane = new objects.Plane();
    stage.addChild(plane);

    
    console.log(island1.y);
    console.log(island2.y);
    console.log(island3.y);
    console.log(island4.y);

    
}

function connOcean() {
    if (ocean1.x <= -ocean1.width)
    {
        ocean1.reset();        
    }

    if (ocean2.x <= -ocean2.width)
    {
        ocean2.reset();        
    }
}