var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ocean Class
    var StarFar = (function (_super) {
        __extends(StarFar, _super);
        // CONSTRUCTOR
        function StarFar() {
            _super.call(this, assets.getResult("starFar"));
            this.dx = 0.05;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 0;
            //this.regX = this.width * 0.5;
            //this.regY = this.height * 0.5;
        }
        // PUBLIC METHODS
        StarFar.prototype.update = function () {
            this.x -= this.dx;
            // check if island has left the bottom of the screen
            //if (this.x <= -(this.width - 640)) {
            //    this.reset();
            //}
        };
        // Reset position of island to the top
        StarFar.prototype.reset = function () {
            this.x = this.width;
            this.y = -80;
        };
        StarFar.prototype.follow = function () {
            this.x = 640 + this.width;
            this.y = -80;
        };
        return StarFar;
    })(createjs.Bitmap);
    objects.StarFar = StarFar;
})(objects || (objects = {}));
//# sourceMappingURL=starfar.js.map