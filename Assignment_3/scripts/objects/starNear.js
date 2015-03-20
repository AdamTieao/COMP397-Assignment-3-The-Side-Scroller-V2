var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ocean Class
    var StarNear = (function (_super) {
        __extends(StarNear, _super);
        // CONSTRUCTOR
        function StarNear() {
            _super.call(this, assetLoader.getResult("starNear"));
            this.dx = 1;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 0;
        }
        // PUBLIC METHODS
        StarNear.prototype.update = function () {
            this.x -= this.dx;
        };
        // Reset position of star to the right
        StarNear.prototype.reset = function () {
            this.x = this.width;
            this.y = -80;
        };
        // Follow the other star
        StarNear.prototype.follow = function () {
            this.x = 640 + this.width;
            this.y = -80;
        };
        return StarNear;
    })(createjs.Bitmap);
    objects.StarNear = StarNear;
})(objects || (objects = {}));
//# sourceMappingURL=starnear.js.map