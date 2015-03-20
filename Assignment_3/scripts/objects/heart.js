var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Heart = (function (_super) {
        __extends(Heart, _super);
        // CONSTRUCTOR
        function Heart() {
            _super.call(this, assetLoader.getResult("heart"));
        }
        return Heart;
    })(createjs.Bitmap);
    objects.Heart = Heart;
})(objects || (objects = {}));
//# sourceMappingURL=heart.js.map