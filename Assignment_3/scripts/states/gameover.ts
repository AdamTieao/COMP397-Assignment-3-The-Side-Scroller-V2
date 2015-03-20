/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />


module states {
    // GAME OVER STATE CLASS
    export class GameOver {
        // Game Objects 
        public game: createjs.Container;
        public spaceman: objects.Spaceman;
        public gameOverLabel: createjs.Text;
        public finalScoreLabel: createjs.Text;
        public highScoreLabel: createjs.Text;
        public tryAgainButton: objects.Button;
        public menuButton: objects.Button;
        public tryAgain: boolean = false;
        public menu: boolean = false;

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
            this.finalScoreLabel = new createjs.Text("Final Score: " + score.toString(), "40px Consolas", "orange");
            this.finalScoreLabel.x = 320 - this.finalScoreLabel.getBounds().width * 0.5;
            this.finalScoreLabel.y = 140;
            this.game.addChild(this.finalScoreLabel);

            //High Score Label
            this.highScoreLabel = new createjs.Text("Highest Score: " + highScore.toString(), "40px Consolas", "orange");
            this.highScoreLabel.x = 320 - this.highScoreLabel.getBounds().width * 0.5;
            this.highScoreLabel.y = 200;
            this.game.addChild(this.highScoreLabel);

            //Try Again Button
            this.tryAgainButton = new objects.Button("tryAgainButton");
            this.tryAgainButton.on("click", this.tryAgainClicked, this);
            this.tryAgainButton.on("rollover", this.tryAgainSelected, this);
            this.tryAgainButton.x = 320 ;
            this.tryAgainButton.y = 300;
            this.game.addChild(this.tryAgainButton);

            //menu Button
            this.menuButton = new objects.Button("menuButton");
            this.menuButton.on("click", this.menuClicked, this);
            this.menuButton.on("rollover", this.menuSelected, this);
            this.menuButton.x = 320;
            this.menuButton.y = 380;
            this.game.addChild(this.menuButton);

            this.spaceman = new objects.Spaceman();
            this.spaceman.x = 320 - this.tryAgainButton.width * 0.7;
            this.spaceman.y = this.tryAgainButton.y - this.spaceman.height * 0.1;
            this.game.addChild(this.spaceman);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public tryAgainClicked() {
            createjs.Sound.play("click", { loop: 1 });
            this.tryAgain = true;
        }

        public menuClicked() {
            createjs.Sound.play("click", { loop: 1 });
            this.menu = true;
        }

        public tryAgainSelected() {
            createjs.Sound.play("select", { loop: 1 });
            this.spaceman.x = 320 - this.tryAgainButton.width * 0.7;
            this.spaceman.y = this.tryAgainButton.y - this.spaceman.height * 0.1;
        }

        public menuSelected() {
            createjs.Sound.play("select", { loop: 1 });
            this.spaceman.x = 320 - this.menuButton.width * 0.7;
            this.spaceman.y = this.menuButton.y - this.spaceman.height * 0.1;
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            if (this.tryAgain) {
                this.game.removeAllChildren();
                score = 0;
                lives = 5;
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }

            if (this.menu) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.MENU_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Game Over Class


} // States Module