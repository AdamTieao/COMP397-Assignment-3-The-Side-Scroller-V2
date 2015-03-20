var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Red = (function (_super) {
        __extends(Red, _super);
        // CONSTRUCTOR
        function Red() {
            _super.call(this, assetLoader.getResult("red"));
        }
        return Red;
    })(createjs.Bitmap);
    objects.Red = Red;
})(objects || (objects = {}));
//# sourceMappingURL=red.js.map