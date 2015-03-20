module objects {
    // PLANE CLASS
    export class Spaceman extends createjs.Bitmap {

        public width: number;
        public height: number;
        public _dx: number = 5;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("spaceman"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.y = 430;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            
        }
        

        // PUBLIC METHODS
        public update() {

            this.y = stage.mouseY;
            // Option to choose whether to allow the spaceman moving left and right
            //this.x = stage.mouseX;    

        }

    }

} 