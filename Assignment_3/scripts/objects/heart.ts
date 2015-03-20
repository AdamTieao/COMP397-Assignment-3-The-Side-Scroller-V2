module objects {

    export class Heart extends createjs.Bitmap {

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("heart"));  // Set the heart image
        }

    }

}  