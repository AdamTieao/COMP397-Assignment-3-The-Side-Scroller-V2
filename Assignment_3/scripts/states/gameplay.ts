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

        // GamePlay Variables
        public score: number = 0;
        public lives: number = 5;
        public scoreAdd: createjs.Text;
        public scoreApp: number;
        public scoreDis: number = 50;
        public red: objects.Red;
        public heart: objects.Heart;

        // Game Objects
        public spaceman: objects.Spaceman;  
        public coin: objects.Coin;    
        public metes: objects.Mete[] = [];  
        public scoreBoard: createjs.Text;
        public livesBoard: createjs.Text;
        public liveNumBoard: createjs.Text;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add coin object
            this.coin = new objects.Coin();
            this.coin.reset();
            this.game.addChild(this.coin);

            // Add meteorite objects
            for (var mete = 0; mete < 3; mete++) {
                this.metes[mete] = new objects.Mete();
                this.metes[mete].reset();
                this.game.addChild(this.metes[mete]);
            }

            // Add spaceman object
            this.spaceman = new objects.Spaceman();
            this.spaceman.x = this.spaceman.width * 0.5;
            this.game.addChild(this.spaceman);

            // Add red color as object
            this.red = new objects.Red();
            this.red.alpha = 0;            
            this.game.addChild(this.red);

            // Add heartbreak object
            this.heart = new objects.Heart();
            this.heart.alpha = 0;
            this.game.addChild(this.heart);

            // Add score getting object
            this.scoreAdd = new createjs.Text("+100", "16px Arial", "yellow");
            this.scoreAdd.x = this.spaceman.width;
            this.scoreAdd.alpha = 0;
            this.game.addChild(this.scoreAdd);

            // Add score board
            this.scoreBoard = new createjs.Text("Score: " + score.toString(), "40px Arial", "yellow");
            this.scoreBoard.x = 250;
            this.game.addChild(this.scoreBoard)

            // Add lives board
            this.livesBoard = new createjs.Text("Lives: ", "40px Arial", "yellow");
            this.livesBoard.x = 10;
            this.game.addChild(this.livesBoard);

            // Add live number
            this.liveNumBoard = new createjs.Text("" + lives.toString, "40px Arial", "yellow");
            this.liveNumBoard.x = 130;
            this.game.addChild(this.liveNumBoard);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        // Check distance between spaceman and objects
        public distance(p1, p2): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        // Check if the spaceman is colliding objects function
        public checkCollision(collider) {
            var planePosition = new createjs.Point(this.spaceman.x, this.spaceman.y);
            var cloudPosition = new createjs.Point(collider.x, collider.y);
            var theDistance = this.distance(planePosition, cloudPosition);
            if (theDistance < ((this.spaceman.width * 0.5) + (collider.width * 0.5))) {
                if (collider.isColliding != true) {
                    createjs.Sound.play(collider.sound);
                    if (collider.name == "mete") {
                        this.redAppear();   // Red color appears
                        this.heartAppear(); // Heart shape appears
                        lives--;
                        collider.reset();   // Reset the collider
                    }
                    if (collider.name == "coin") {
                        // initiate the scoreGetting text position
                        this.scoreAdd.y = collider.y - collider.height * 0.5;
                        this.scoreApp = collider.y - collider.height * 0.5;

                        this.scoreAppear(); // ScoreGetting text appears
                        score += 100;       // Collect the scores
                        collider.reset();   // Reset the collider
                    }

                    // Debugging
                    console.log(lives);
                    console.log(score);
                }
                collider.isColliding = true;    // Stop playing the colliding sound
            }
            else {
                collider.isColliding = false;   // Reset to be ready to play the colliding sound
            }
        }

        public update() {
        
            // Update the objects
            this.spaceman.update();            
            this.coin.update();

            // Check the collision
            this.checkCollision(this.coin);

            // Make the scoreGetting text and heart disappear
            this.redDis();
            this.heartDis();
            this.scoreUp()            

            // Update the meteorite objects
            for (var mete = 0; mete < 3; mete++) {
                this.metes[mete].update();
                this.checkCollision(this.metes[mete]);
            }

            // Update the lives and scores
            this.liveNumBoard.text = lives.toString();
            this.scoreBoard.text = "Score: " + score.toString();

            // Make the live number red
            if (lives <= 2) {
                this.liveNumBoard.color = "red";
            }

            // Check lives and go to the gameover state
            if (lives <= 0) {
                if (score >= highScore) {
                    highScore = score;
                }
                this.game.removeAllChildren();  // Remove all
                stage.removeChild(this.game);   // Remove game
                currentState = constants.GAME_OVER_STATE;   // Gameover state
                stateChanged = true;
            }            

            stage.update(); // Refreshes our stage

        } // Update Method

        // Score appearing function
        public scoreAppear() {
            this.scoreAdd.alpha = 1;
        }        

        // ScoreGetting going up function
        public scoreUp() {
            if (this.scoreAdd.y < this.scoreApp - this.scoreDis) {
                this.scoreAdd.alpha = 0;    // ScoreGetting disappear
            }
            else {
                this.scoreAdd.y--;  // ScoreGetting goes up
            }
        }

        // Red appearing function
        public redAppear() {
            this.red.alpha = 0.5;
        }

        // Red disappearing function
        public redDis() {
            if (this.red.alpha >= 0) {
                this.red.alpha -= 0.01;
            }
        }

        // Heart appearing function
        public heartAppear() {
            this.heart.alpha = 1;
        }

        // Heart disappearing function
        public heartDis() {
            // Make the heart follow the spaceman's position
            this.heart.x = this.spaceman.x - this.spaceman.width * 0.5;
            this.heart.y = this.spaceman.y - this.spaceman.height * 0.25;
            if (this.heart.alpha >= 0) {
                this.heart.alpha -= 0.01;
            }
        }
        

    } // GamePlay Class


} // States Module