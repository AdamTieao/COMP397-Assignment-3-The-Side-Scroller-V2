var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Coin = (function (_super) {
        __extends(Coin, _super);
        // CONSTRUCTOR
        function Coin() {
            _super.call(this, assetLoader.getResult("coin"));
            this.dx = 5;
            this.sound = "yay";
            this.name = "coin";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        // PUBLIC METHODS
        Coin.prototype.update = function () {
            this.x -= this.dx;
            //this.y += this.dy;
            // check if island has left the bottom of the screen
            if (this.x <= -this.width) {
                this.reset();
            }
        };
        // Reset position of island to the right
        Coin.prototype.reset = function () {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 480);
            this.visible = true;
        };
        return Coin;
    })(createjs.Bitmap);
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map