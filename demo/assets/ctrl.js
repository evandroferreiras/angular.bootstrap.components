var app;
(function (app) {
    var demo;
    (function (demo) {
        var ctrl;
        (function (ctrl) {
            var Ctrl = (function () {
                function Ctrl() {
                    this.titleWindow = "";
                }
                return Ctrl;
            }());
            ctrl.Ctrl = Ctrl;
            angular
                .module("demo")
                .controller("Ctrl", Ctrl);
        })(ctrl = demo.ctrl || (demo.ctrl = {}));
    })(demo = app.demo || (app.demo = {}));
})(app || (app = {}));
