var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var KEYCODE_LEFT = 37, KEYCODE_RIGHT = 39;
var objects;
(function (objects) {
    // PLANE CLASS
    var Spaceman = (function (_super) {
        __extends(Spaceman, _super);
        // CONSTRUCTOR
        function Spaceman() {
            _super.call(this, assets.getResult("spaceman"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.y = 430;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
        // PUBLIC METHODS
        Spaceman.prototype.update = function () {
            this.y = stage.mouseY;
            //this.x = stage.mouseX;
            function keyPressed(event) {
                switch (event.keyCode) {
                    case KEYCODE_LEFT:
                        this.x -= 5;
                        break;
                    case KEYCODE_RIGHT:
                        this.x += 5;
                        break;
                }
            }
        };
        return Spaceman;
    })(createjs.Bitmap);
    objects.Spaceman = Spaceman;
})(objects || (objects = {}));
//# sourceMappingURL=spaceman.js.map