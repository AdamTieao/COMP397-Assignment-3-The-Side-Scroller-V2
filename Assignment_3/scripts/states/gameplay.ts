/// <reference path="../constants.ts" />

/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/mete.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/spaceman.ts" />
/// <reference path="../objects/starfar.ts" />
/// <reference path="../objects/starmid.ts" />
/// <reference path="../objects/starnear.ts" />
/// <reference path="../objects/red.ts" />
/// <reference path="../objects/heart.ts" />


module states {

    export class GamePlay {
        // Game Objects 
        public game: createjs.Container;

        public score: number = 0;
        public lives: number = 5;
        public scoreAdd: createjs.Text;
        public scoreApp: number;
        public scoreDis: number = 50;
        public red: objects.Red;
        public heart: objects.Heart;


        public spaceman: objects.Spaceman;  
        public coin: objects.Coin;    
        public metes: objects.Mete[] = [];  
        public scoreBoard: createjs.Text;
        public livesBoard: createjs.Text;
        public liveNumBoard: createjs.Text;

        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            
            this.coin = new objects.Coin();
            this.coin.reset();
            this.game.addChild(this.coin);

            for (var mete = 0; mete < 3; mete++) {
                this.metes[mete] = new objects.Mete();
                this.metes[mete].reset();
                this.game.addChild(this.metes[mete]);
            }

            this.spaceman = new objects.Spaceman();
            this.spaceman.x = this.spaceman.width * 0.5;
            this.game.addChild(this.spaceman);

            this.red = new objects.Red();
            this.red.alpha = 0;            
            this.game.addChild(this.red);

            this.heart = new objects.Heart();
            this.heart.alpha = 0;
            this.game.addChild(this.heart);

            this.scoreAdd = new createjs.Text("+100", "16px Arial", "yellow");
            this.scoreAdd.x = this.spaceman.width;
            this.scoreAdd.alpha = 0;
            this.game.addChild(this.scoreAdd);

            this.scoreBoard = new createjs.Text("Score: " + score.toString(), "40px Arial", "yellow");
            this.scoreBoard.x = 250;
            this.game.addChild(this.scoreBoard)

            this.livesBoard = new createjs.Text("Lives: ", "40px Arial", "yellow");
            this.livesBoard.x = 10;
            this.game.addChild(this.livesBoard);

            this.liveNumBoard = new createjs.Text("" + lives.toString, "40px Arial", "yellow");
            this.liveNumBoard.x = 130;
            this.game.addChild(this.liveNumBoard);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor


        public distance(p1, p2): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        public checkCollision(collider) {
            var planePosition = new createjs.Point(this.spaceman.x, this.spaceman.y);
            var cloudPosition = new createjs.Point(collider.x, collider.y);
            var theDistance = this.distance(planePosition, cloudPosition);
            if (theDistance < ((this.spaceman.width * 0.5) + (collider.width * 0.5))) {
                if (collider.isColliding != true) {
                    createjs.Sound.play(collider.sound);
                    if (collider.name == "mete") {
                        this.redAppear();
                        this.heartAppear();
                        lives--;
                        collider.reset();
                    }
                    if (collider.name == "coin") {
                        this.scoreAdd.y = collider.y - collider.height * 0.5;
                        this.scoreApp = collider.y - collider.height * 0.5;
                        this.scoreAppear();
                        score += 100;
                        collider.reset();
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

        public update() {
        
            this.spaceman.update();
            
            this.scoreUp()
            
            this.coin.update();

            this.checkCollision(this.coin);

            this.redDis();

            this.heartDis();

            for (var mete = 0; mete < 3; mete++) {
                this.metes[mete].update();
                this.checkCollision(this.metes[mete]);
            }

            this.liveNumBoard.text = lives.toString();
            this.scoreBoard.text = "Score: " + score.toString();

            if (lives <= 2) {
                this.liveNumBoard.color = "red";
            }

            if (lives <= 0) {
                if (score >= highScore) {
                    highScore = score;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }            

            stage.update(); // Refreshes our stage

        } // Update Method

        public scoreAppear() {
            this.scoreAdd.alpha = 1;
        }        

        public scoreUp() {
            if (this.scoreAdd.y < this.scoreApp - this.scoreDis) {
                this.scoreAdd.alpha = 0;
            }
            else {
                this.scoreAdd.y--;
            }
        }

        public redAppear() {
            this.red.alpha = 0.5;
        }

        public redDis() {
            if (this.red.alpha >= 0) {
                this.red.alpha -= 0.01;
            }
        }

        public heartAppear() {
            this.heart.alpha = 1;
        }

        public heartDis() {
            this.heart.x = this.spaceman.x - this.spaceman.width * 0.5;
            this.heart.y = this.spaceman.y - this.spaceman.height * 0.25;
            if (this.heart.alpha >= 0) {
                this.heart.alpha -= 0.01;
            }
        }
        

    } // GamePlay Class


} // States Module