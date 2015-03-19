/// <reference path="../constants.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/mete.ts" />
/// <reference path="../objects/spaceman.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/starfar.ts" />
/// <reference path="../objects/starmid.ts" />
/// <reference path="../objects/starnear.ts" />
/// <reference path="../objects/button.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.play = false;
            this.instruction = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Game Over Label
            this.mailPilotLabel = new createjs.Text("MAIL PILOT", "60px Consolas", "red");
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
        Menu.prototype.playClicked = function () {
            this.play = true;
        };
        Menu.prototype.instructionClicked = function () {
            this.instruction = true;
        };
        Menu.prototype.playSelected = function () {
            this.spaceman.x = 320 - this.playButton.getBounds().width * 0.7;
            this.spaceman.y = this.playButton.y - this.spaceman.getBounds().height * 0.1;
        };
        Menu.prototype.instructionSelected = function () {
            this.spaceman.x = 320 - this.instructionButton.getBounds().width * 0.7;
            this.spaceman.y = this.instructionButton.y - this.spaceman.getBounds().height * 0.1;
        };
        //// PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.update = function () {
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
        }; // Update Method
        return Menu;
    })();
    states.Menu = Menu; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu.js.map