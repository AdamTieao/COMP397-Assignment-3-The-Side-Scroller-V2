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
            // check if island has left the bottom of the screen
            if (this.x <= -this.width) {
                this.reset();
            }

            this.rotation += this._dr;
            
        }

        // Reset position of island to the right
        public reset() {
            this._dx = Math.random() * 5 + 5;
            this._dy = Math.random() * 4 - 2;
            this._dr = Math.random() * 4 - 2;
            this.x = 640 + this.width;
            this.y = Math.random() * 480;
        }
    }

} 