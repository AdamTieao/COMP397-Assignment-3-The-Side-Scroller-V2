/// <reference path="../constants.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    // GAME OVER STATE CLASS
    var Instruction = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Instruction() {
            this.tryAgain = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Game Over Label
            this.instruction1 = new createjs.Text("Try to get more coins.", "25px Consolas", "yellow");
            this.instruction1.x = 320 - this.instruction1.getBounds().width * 0.5;
            this.instruction1.y = 70;
            this.game.addChild(this.instruction1);
            //Final Score Label
            this.instruction2 = new createjs.Text("Stay away from meteorites.", "25px Consolas", "yellow");
            this.instruction2.x = 320 - this.instruction2.getBounds().width * 0.5;
            this.instruction2.y = 110;
            this.game.addChild(this.instruction2);
            //High Score Label
            this.instruction3 = new createjs.Text("You have 5 lives", "25px Consolas", "yellow");
            this.instruction3.x = 320 - this.instruction3.getBounds().width * 0.5;
            this.instruction3.y = 150;
            this.game.addChild(this.instruction3);
            //High Score Label
            this.instruction4 = new createjs.Text("Let's see who can get the highest score!", "25px Consolas", "yellow");
            this.instruction4.x = 320 - this.instruction4.getBounds().width * 0.5;
            this.instruction4.y = 190;
            this.game.addChild(this.instruction4);
            //Try Again Button
            this.menuButton = new objects.Button("tryAgainButton");
            this.menuButton.on("click", this.menuClicked, this);
            this.menuButton.on("rollover", this.menuSelected, this);
            this.menuButton.x = 320;
            this.menuButton.y = 320;
            this.game.addChild(this.menuButton);
            this.spaceman = new objects.Spaceman();
            this.spaceman.x = 320 - this.menuButton.getBounds().width * 0.7;
            this.spaceman.y = this.menuButton.y - this.spaceman.getBounds().height * 0.1;
            this.game.addChild(this.spaceman);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Instruction.prototype.menuClicked = function () {
            createjs.Sound.play("click", { loop: 1 });
            this.tryAgain = true;
        };
        Instruction.prototype.menuSelected = function () {
            createjs.Sound.play("select", { loop: 1 });
            this.spaceman.x = 320 - this.menuButton.getBounds().width * 0.7;
            this.spaceman.y = this.menuButton.y - this.spaceman.getBounds().height * 0.1;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Instruction.prototype.update = function () {
            if (this.tryAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.MENU_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Instruction;
    })();
    states.Instruction = Instruction; // Game Over Class
})(states || (states = {})); // States Module
//# sourceMappingURL=instruction.js.map