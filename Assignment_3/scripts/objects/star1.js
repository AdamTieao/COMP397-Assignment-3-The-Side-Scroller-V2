var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Star1 = (function (_super) {
        __extends(Star1, _super);
        // CONSTRUCTOR
        function Star1() {
            _super.call(this, assets.getResult("star1"));
            this.dx = 10;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.spawnRangeX = (640 - 3 * this.width) * 0.25;
            this.spawnRangeY = (480 - 3 * this.height) * 0.25;
        }
        // PUBLIC METHODS
        Star1.prototype.update = function () {
            this.dy = Math.random() * 10 - 5;
            this.x -= this.dx;
            //this.y += this.dy;
            // check if island has left the bottom of the screen
            if (this.x <= -this.width) {
                this.reset();
            }
        };
        // Reset position of island to the right
        Star1.prototype.reset = function () {
            this.x = Math.floor(this.width + 640 + this.spawnRangeX * Math.random() + (this.spawnNum - 1) * (this.spawnRangeX + this.width));
            this.y = Math.floor(Math.random() * this.spawnRangeY + (this.spawnNum - 1) * (this.spawnRangeY + this.height));
        };
        return Star1;
    })(createjs.Bitmap);
    objects.Star1 = Star1;
})(objects || (objects = {}));
//# sourceMappingURL=star1.js.map