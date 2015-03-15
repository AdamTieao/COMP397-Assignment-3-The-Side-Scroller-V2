var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        // CONSTRUCTOR
        function Ocean() {
            _super.call(this, assets.getResult("ocean"));
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 0;
            //this.regX = this.width * 0.5;
            //this.regY = this.height * 0.5;
        }
        // PUBLIC METHODS
        Ocean.prototype.update = function () {
            this.x -= this.dx;
            // check if island has left the bottom of the screen
            //if (this.x <= -(this.width - 640)) {
            //    this.reset();
            //}
        };
        // Reset position of island to the top
        Ocean.prototype.reset = function () {
            this.x = this.width;
            this.y = -80;
        };
        Ocean.prototype.follow = function () {
            this.x = 640 + this.width;
            this.y = -80;
        };
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map