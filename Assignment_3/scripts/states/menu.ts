﻿/// <reference path="../constants.ts" />

/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/mete.ts" />
/// <reference path="../objects/spaceman.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/starfar.ts" />
/// <reference path="../objects/starmid.ts" />
/// <reference path="../objects/starnear.ts" />

/// <reference path="../objects/button.ts" />




module states {
    // MENU STATE CLASS
    export class Menu {
        // Game Objects 
        public game: createjs.Container;

        public mailPilotLabel: createjs.Text;
        public playButton: objects.Button;
        public instructionButton: objects.Button;

        public play: boolean = false;
        public instruction: boolean = false;

        public spaceman: objects.Spaceman;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();
            
            //Game Over Label
            this.mailPilotLabel = new createjs.Text("MAIL PILOT", "60px Consolas","red");
            this.mailPilotLabel.x = 320 - this.mailPilotLabel.getBounds().width * 0.5;
            this.mailPilotLabel.y = 40;
            this.game.addChild(this.mailPilotLabel);


            //Play Button
            this.playButton = new objects.Button("playButton");
            this.playButton.x = 320;
            this.playButton.y = 240;
            this.playButton.on("click", this.playClicked, this);
            this.playButton.on("rollover", this.playSelected, this);

            this.game.addChild(this.playButton);

            // Ins Button
            this.instructionButton = new objects.Button("tryAgainButton");
            this.instructionButton.x = 320;
            this.instructionButton.y = 320;
            this.instructionButton.on("click", this.instructionClicked, this);
            this.instructionButton.on("rollover", this.instructionSelected, this);

            this.game.addChild(this.instructionButton);

            this.spaceman = new objects.Spaceman();
            this.spaceman.x = 320 - this.playButton.getBounds().width * 0.7;
            this.spaceman.y = this.playButton.y - this.spaceman.getBounds().height * 0.1;
            this.game.addChild(this.spaceman);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public playClicked() {
            this.play = true;
        }

        public instructionClicked() {
            this.instruction = true;
        }

        public playSelected() {
            this.spaceman.x = 320 - this.playButton.getBounds().width * 0.7;
            this.spaceman.y = this.playButton.y - this.spaceman.getBounds().height * 0.1;
        }

        public instructionSelected() {
            this.spaceman.x = 320 - this.instructionButton.getBounds().width * 0.7;
            this.spaceman.y = this.instructionButton.y - this.spaceman.getBounds().height * 0.1;
        }

        //// PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            if (this.play) {
                this.game.removeAllChildren();
                score = 0;
                lives = 5;
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            if (this.instruction) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.INSTRUCTION_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Menu Class


} // States Module