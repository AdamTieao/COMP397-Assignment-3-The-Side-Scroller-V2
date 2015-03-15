module objects {
    // Ocean Class
    export class Space extends createjs.Bitmap {

        width: number;
        height: number;

        // CONSTRUCTOR
        constructor() {
            super(assets.getResult("space"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }

    }
}