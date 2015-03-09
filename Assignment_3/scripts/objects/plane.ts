var KEYCODE_LEFT: number = 37,
    KEYCODE_RIGHT: number = 39;
module objects {
    // PLANE CLASS
    export class Plane extends createjs.Bitmap {

        // CONSTRUCTOR
        constructor() {
            super(assets.getResult("plane"));

            this.x = 30;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

        }

        

        // PUBLIC METHODS
        public update() {

            this.y = stage.mouseY;
            //this.x = stage.mouseX;

            function keyPressed(event) {
                switch (event.keyCode) {
                    case KEYCODE_LEFT:
                        this.x -= 5;
                        break;
                    case KEYCODE_RIGHT:
                        this.x += 5;
                        break;
                }
            }            
        }

    }

} 