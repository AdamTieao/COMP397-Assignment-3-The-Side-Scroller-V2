module objects {
    // ISLAND CLASS
    export class Mete extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        width: number;
        height: number;
        _dx: number;
        _dy: number;
        _dr: number;
        spawnNum: number;
        spawnRangeX: number;
        spawnRangeY: number;
        sound: string;
        name: string;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("mete"));
            this.sound = "explosion";
            this.name = "mete";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;


            this.reset();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        }

        // PUBLIC METHODS
        public update() {
            
            this.x -= this._dx;
            this.y += this._dy;
            // check if the meteorites have left the left side of the screen
            if (this.x <= -this.width) {
                this.reset();
            }

            this.rotation += this._dr;  // Make the meteorites rotating randomly
            
        }

        // Reset position of meteorite to the right and reset the speed of moving and rotating
        public reset() {
            this._dx = Math.random() * 5 + 5;   // Moving left with a speed of 5 - 10
            this._dy = Math.random() * 4 - 2;   // Moving up or down with a speed of 0 - 2
            this._dr = Math.random() * 4 - 2;   // Rotating left or right with a speed of 0 - 2
            this.x = 640 + this.width;
            this.y = Math.random() * 480;
        }
    }

} 