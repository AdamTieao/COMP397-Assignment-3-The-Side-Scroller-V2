module objects {
    // Ocean Class
    export class StarMid extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        width: number;
        height: number;
        dx: number = 0.3;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("starMid"));


            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = 0;

        }

        // PUBLIC METHODS
        public update() {
            this.x -= this.dx;
        }

        // Reset position of island to the top
        public reset() {
            this.x = this.width;
            this.y = -80;
        }

        public follow() {
            this.x = 640 + this.width;
            this.y = -80;
        }
    }

} 