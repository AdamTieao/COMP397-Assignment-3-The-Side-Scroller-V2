var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ocean Class
    var StarMid = (function (_super) {
        __extends(StarMid, _super);
        // CONSTRUCTOR
        function StarMid() {
            _super.call(this, assetLoader.getResult("starMid"));
            this.dx = 0.3;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 0;
        }
        // PUBLIC METHODS
        StarMid.prototype.update = function () {
            this.x -= this.dx;
        };
        // Reset position of star to the right
        StarMid.prototype.reset = function () {
            this.x = this.width;
            this.y = -80;
        };
        // Follow the other star
        StarMid.prototype.follow = function () {
            this.x = 640 + this.width;
            this.y = -80;
        };
        return StarMid;
    })(createjs.Bitmap);
    objects.StarMid = StarMid;
})(objects || (objects = {}));
//# sourceMappingURL=starmid.js.map