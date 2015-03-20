module objects {
    // Ocean Class
    export class StarNear extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        width: number;
        height: number;
        dx: number = 1;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("starNear"));


            this.width = this.getBounds().width;
            this.height = this.getBounds().height;


            this.x = 0;

        }

        // PUBLIC METHODS
        public update() {
            this.x -= this.dx;
        }

        // Reset position of star to the right
        public reset() {
            this.x = this.width;
            this.y = -80;
        }

        // Follow the other star
        public follow() {
            this.x = 640 + this.width;
            this.y = -80;
        }
    }

} 