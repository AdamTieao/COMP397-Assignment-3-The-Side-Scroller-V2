var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Mete = (function (_super) {
        __extends(Mete, _super);
        // CONSTRUCTOR
        function Mete() {
            _super.call(this, assetLoader.getResult("mete"));
            this.sound = "explosion";
            this.name = "mete";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        // PUBLIC METHODS
        Mete.prototype.update = function () {
            this.x -= this._dx;
            this.y += this._dy;
            // check if island has left the bottom of the screen
            if (this.x <= -this.width) {
                this.reset();
            }
            this.rotation += this._dr;
        };
        // Reset position of island to the right
        Mete.prototype.reset = function () {
            this._dx = Math.random() * 5 + 5;
            this._dy = Math.random() * 4 - 2;
            this._dr = Math.random() * 4 - 2;
            this.x = 640 + this.width;
            this.y = Math.random() * 480;
        };
        return Mete;
    })(createjs.Bitmap);
    objects.Mete = Mete;
})(objects || (objects = {}));
//# sourceMappingURL=mete.js.map