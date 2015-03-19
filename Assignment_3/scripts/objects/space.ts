module objects {
    // Ocean Class
    export class Space extends createjs.Bitmap {

        width: number;
        height: number;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("space"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }

    }
}