var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ocean Class
    var Space = (function (_super) {
        __extends(Space, _super);
        // CONSTRUCTOR
        function Space() {
            _super.call(this, assets.getResult("space"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
        return Space;
    })(createjs.Bitmap);
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map