module objects {

    export class Coin extends createjs.Bitmap {
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

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("coin"));   // Set the coin image
            this.sound = "coinSound";               // Set the sound
            this.name = "coin";                     // Set the collision name

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;


            this.reset();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        }

        // PUBLIC METHODS
        public update() {

            this.x -= this.dx;

            // check if the coin has left the left side of the screen
            if (this.x <= -this.width) {
                this.reset();
            }
        }

        // Reset position of coin to the right
        public reset() {
            this.x = 640 + this.width;
            this.y = Math.random() * 480;
            this.visible = true;
        }

    }

} 