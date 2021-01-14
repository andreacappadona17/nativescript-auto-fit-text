"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoFitText = void 0;
var core_1 = require("@nativescript/core");
var AutoFitText = (function (_super) {
    __extends(AutoFitText, _super);
    function AutoFitText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoFitText.prototype.createNativeView = function () {
        var textField = _super.prototype.createNativeView.call(this);
        textField.setMaxLines(1);
        textField.setSingleLine();
        textField.setMaxHeight(200);
        textField.setTextSize(200);
        textField.setMinHeight(40);
        textField.setTextAlignment(android.widget.TextView.TEXT_ALIGNMENT_CENTER);
        me.grantland.widget.AutofitHelper.create(textField);
        return textField;
    };
    AutoFitText.prototype.initNativeView = function () {
        this.nativeView.owner = this;
        _super.prototype.initNativeView.call(this);
    };
    AutoFitText.prototype.disposeNativeView = function () {
        this.nativeView.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    return AutoFitText;
}(core_1.Label));
exports.AutoFitText = AutoFitText;
//# sourceMappingURL=auto-fit-text.android.js.map