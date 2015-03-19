module objects {
    // ISLAND CLASS
    export class Mete extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        width: number;
        height: number;
        dx: number;
        dy: number;
        spawnNum: number;
        spawnRangeX: number;
        spawnRangeY: number;

        // CONSTRUCTOR
        constructor() {
            super(assets.getResult("mete"));


            this.width = this.getBounds().width;
            this.height = this.getBounds().height;


            this.reset();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        }

        // PUBLIC METHODS
        public update() {
            
            this.x -= this.dx;
            this.y += this.dy;
            // check if island has left the bottom of the screen
            if (this.x <= -this.width) {
                this.reset();
            }
        }

        // Reset position of island to the right
        public reset() {
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * 4 - 2);
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 480);
        }

    }

} 