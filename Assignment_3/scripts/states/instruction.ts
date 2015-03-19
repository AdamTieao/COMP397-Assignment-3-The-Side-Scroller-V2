/// <reference path="../constants.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />


module states {
    // GAME OVER STATE CLASS
    export class Instruction {
        // Game Objects 
        public game: createjs.Container;
        public spaceman: objects.Spaceman;
        public gameOverLabel: createjs.Text;
        public finalScoreLabel: createjs.Text;
        public highScoreLabel: createjs.Text;
        public tryAgainButton: objects.Button;
        public tryAgain: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Game Over Label
            this.gameOverLabel = new createjs.Text("GAME OVER", "60px Consolas", "red");
            this.gameOverLabel.x = 320 - this.gameOverLabel.getBounds().width * 0.5;
            this.gameOverLabel.y = 40;
            this.game.addChild(this.gameOverLabel);

            //Final Score Label
            this.finalScoreLabel = new createjs.Text("Final Score: " + score.toString(), "40px Consolas", "yellow");
            this.finalScoreLabel.x = 320 - this.finalScoreLabel.getBounds().width * 0.5;
            this.finalScoreLabel.y = 140;
            this.game.addChild(this.finalScoreLabel);

            //High Score Label
            this.highScoreLabel = new createjs.Text("Highest Score: " + highScore.toString(), "40px Consolas", "yellow");
            this.highScoreLabel.x = 320 - this.highScoreLabel.getBounds().width * 0.5;
            this.highScoreLabel.y = 200;
            this.game.addChild(this.highScoreLabel);

            //Try Again Button
            this.tryAgainButton = new objects.Button("tryAgainButton");
            this.tryAgainButton.on("click", this.tryAgainClicked, this);
            this.tryAgainButton.x = 320;
            this.tryAgainButton.y = 320;
            this.game.addChild(this.tryAgainButton);

            this.spaceman = new objects.Spaceman();
            this.spaceman.x = 320 - this.tryAgainButton.getBounds().width * 0.7;
            this.spaceman.y = this.tryAgainButton.y - this.spaceman.getBounds().height * 0.1;
            this.game.addChild(this.spaceman);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public tryAgainClicked() {
            this.tryAgain = true;
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            if (this.tryAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.MENU_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Game Over Class


} // States Module