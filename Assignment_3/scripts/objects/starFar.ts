﻿module objects {
    // Ocean Class
    export class StarFar extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        width: number;
        height: number;
        dx: number = 0.05;

        // CONSTRUCTOR
        constructor() {
            super(assets.getResult("starFar"));


            this.width = this.getBounds().width;
            this.height = this.getBounds().height;


            this.x = 0;

            //this.regX = this.width * 0.5;
            //this.regY = this.height * 0.5;

        }

        // PUBLIC METHODS
        public update() {
            this.x -= this.dx;

            // check if island has left the bottom of the screen
            //if (this.x <= -(this.width - 640)) {
            //    this.reset();
            //}
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