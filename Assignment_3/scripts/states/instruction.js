/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    // GAME OVER STATE CLASS
    var Instruction = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Instruction() {
            this.menu = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Instruction 1
            this.instruction1 = new createjs.Text("Try to get more coins.", "25px Consolas", "yellow");
            this.instruction1.x = 320 - this.instruction1.getBounds().width * 0.5;
            this.instruction1.y = 70;
            this.game.addChild(this.instruction1);
            // Instruction 2
            this.instruction2 = new createjs.Text("Stay away from meteorites.", "25px Consolas", "yellow");
            this.instruction2.x = 320 - this.instruction2.getBounds().width * 0.5;
            this.instruction2.y = 110;
            this.game.addChild(this.instruction2);
            // Instruction 3
            this.instruction3 = new createjs.Text("You have 5 lives", "25px Consolas", "yellow");
            this.instruction3.x = 320 - this.instruction3.getBounds().width * 0.5;
            this.instruction3.y = 150;
            this.game.addChild(this.instruction3);
            // Instruction 4
            this.instruction4 = new createjs.Text("Let's see who can get the highest score!", "25px Consolas", "yellow");
            this.instruction4.x = 320 - this.instruction4.getBounds().width * 0.5;
            this.instruction4.y = 190;
            this.game.addChild(this.instruction4);
            // Menu Button
            this.menuButton = new objects.Button("menuButton");
            this.menuButton.on("click", this.menuClicked, this);
            this.menuButton.on("rollover", this.menuSelected, this);
            this.menuButton.x = 320;
            this.menuButton.y = 320;
            this.game.addChild(this.menuButton);
            // Spaceman position
            this.spaceman = new objects.Spaceman();
            this.spaceman.x = 320 - this.menuButton.width * 0.7;
            this.spaceman.y = this.menuButton.y - this.spaceman.height * 0.1;
            this.game.addChild(this.spaceman);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // MenuButton clicked function
        Instruction.prototype.menuClicked = function () {
            createjs.Sound.play("click", { loop: 1 });
            this.menu = true;
        };
        // MenuButton mouseover function
        Instruction.prototype.menuSelected = function () {
            createjs.Sound.play("select", { loop: 1 });
            this.spaceman.x = 320 - this.menuButton.width * 0.7;
            this.spaceman.y = this.menuButton.y - this.spaceman.height * 0.1;
        };
        Instruction.prototype.update = function () {
            // Check if the state is changed
            if (this.menu) {
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