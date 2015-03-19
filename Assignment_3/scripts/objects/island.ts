module objects {
    // ISLAND CLASS
    export class Island extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        width: number;
        height: number;
        dx: number = 1;
        dy: number;
        spawnNum: number;
        spawnRangeX: number;
        spawnRangeY: number;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("island"));


            this.width = this.getBounds().width;
            this.height = this.getBounds().height;


            this.reset();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.spawnRangeX = (640 - 3 * this.width) * 0.25;
            this.spawnRangeY = (480 - 3 * this.height) * 0.25;
        }

        // PUBLIC METHODS
        public update() {
            this.dy = Math.random() * 10 - 5;
            this.x -= this.dx;
            //this.y += this.dy;
            // check if island has left the bottom of the screen
            if (this.x <= -this.width) {
                this.reset();
            }
        }

        // Reset position of island to the right
        public reset() {
            this.x = Math.floor(this.width + 640 + this.spawnRangeX * Math.random()
                    + (this.spawnNum - 1) * (this.spawnRangeX + this.width));
            this.y = Math.floor(Math.random() * this.spawnRangeY
                    + (this.spawnNum - 1) * (this.spawnRangeY + this.height));
        }

    }

} 