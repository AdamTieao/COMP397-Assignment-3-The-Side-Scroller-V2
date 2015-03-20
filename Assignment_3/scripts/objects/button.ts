module objects {
    // BUTTON CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Button extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        width: number;
        height: number;
        dx: number = 5;
        dy: number;
        spawnNum: number;
        spawnRangeX: number;
        spawnRangeY: number;
        sound: string;
        name: string;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(buttonName: string) {
            super(assetLoader.getResult(buttonName));   // Set the button image

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            
            this.setButtonListeners();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        }

        // How the buttons react
        public setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
            this.on('mousedown', this.onButtonDown);
        }

        public onButtonOver() { // When mouseover
            this.alpha = 0.8;
        }

        public onButtonOut() {  // When mouseout
            this.alpha = 1;
        }

        public onButtonDown() { // When mousedown
            this.alpha = 0.3;
        }
    }
} 