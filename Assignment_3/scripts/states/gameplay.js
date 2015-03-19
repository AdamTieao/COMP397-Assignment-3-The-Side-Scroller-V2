/// <reference path="../constants.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/mete.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/spaceman.ts" />
/// <reference path="../objects/starfar.ts" />
/// <reference path="../objects/starmid.ts" />
/// <reference path="../objects/starnear.ts" />
var states;
(function (states) {
    var GamePlay = (function () {
        function GamePlay() {
            this.score = 0;
            this.lives = 5;
            this.metes = [];
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
            this.scoreBoard = new createjs.Text("Score: " + score.toString(), "40px Arial", "yellow");
            this.scoreBoard.x = 250;
            this.game.addChild(this.scoreBoard);
            this.livesBoard = new createjs.Text("Lives: ", "40px Arial", "yellow");
            this.livesBoard.x = 10;
            this.game.addChild(this.livesBoard);
            this.liveNumBoard = new createjs.Text("" + lives.toString, "40px Arial", "yellow");
            this.liveNumBoard.x = 130;
            this.game.addChild(this.liveNumBoard);
            // Instantiate Scoreboard
            //this.scoreboard = new objects.ScoreBoard(this.game);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        GamePlay.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        GamePlay.prototype.checkCollision = function (collider) {
            var planePosition = new createjs.Point(this.spaceman.x, this.spaceman.y);
            var cloudPosition = new createjs.Point(collider.x, collider.y);
            var theDistance = this.distance(planePosition, cloudPosition);
            if (theDistance < ((this.spaceman.width * 0.5) + (collider.width * 0.5))) {
                if (collider.isColliding != true) {
                    createjs.Sound.play(collider.sound);
                    if (collider.name == "mete") {
                        lives--;
                    }
                    if (collider.name == "coin") {
                        score += 100;
                        this.coin.reset();
                    }
                    console.log(lives);
                    console.log(score);
                }
                collider.isColliding = true;
            }
            else {
                collider.isColliding = false;
            }
        };
        GamePlay.prototype.update = function () {
            this.spaceman.update();
            this.coin.update();
            this.checkCollision(this.coin);
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
                createjs.Sound.stop();
                if (score >= highScore) {
                    highScore = score;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GamePlay;
    })();
    states.GamePlay = GamePlay; // GamePlay Class
})(states || (states = {})); // States Module
//# sourceMappingURL=gameplay.js.map