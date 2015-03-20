var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // PLANE CLASS
    var Spaceman = (function (_super) {
        __extends(Spaceman, _super);
        // CONSTRUCTOR
        function Spaceman() {
            _super.call(this, assetLoader.getResult("spaceman"));
            this._dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.y = 430;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
        // PUBLIC METHODS
        Spaceman.prototype.update = function () {
            this.y = stage.mouseY;
            // Option to choose whether to allow the spaceman moving left and right
            //this.x = stage.mouseX;    
        };
        return Spaceman;
    })(createjs.Bitmap);
    objects.Spaceman = Spaceman;
})(objects || (objects = {}));
//# sourceMappingURL=spaceman.js.map