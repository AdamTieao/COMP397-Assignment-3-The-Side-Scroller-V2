var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // BUTTON CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Button = (function (_super) {
        __extends(Button, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Button(buttonName) {
            _super.call(this, assetLoader.getResult(buttonName));
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.setButtonListeners();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        // How the buttons react
        Button.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
            this.on('mousedown', this.onButtonDown);
        };
        Button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };
        Button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        Button.prototype.onButtonDown = function () {
            this.alpha = 0.3;
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map