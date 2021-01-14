"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoFitText = void 0;
var core_1 = require("@nativescript/core");
var AutoFitText = (function (_super) {
    __extends(AutoFitText, _super);
    function AutoFitText() {
        return _super.call(this) || this;
    }
    AutoFitText.prototype.initNativeView = function () {
        this.nativeView.owner = this;
        var label = this.ios;
        label.adjustsFontSizeToFitWidth = true;
        label.textAlignment = 4;
        _super.prototype.initNativeView.call(this);
    };
    AutoFitText.prototype.disposeNativeView = function () {
        this.nativeView.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    return AutoFitText;
}(core_1.Label));
exports.AutoFitText = AutoFitText;
//# sourceMappingURL=auto-fit-text.ios.js.map