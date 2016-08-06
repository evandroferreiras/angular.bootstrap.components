var app;
(function (app) {
    var demo;
    (function (demo) {
        var main = angular.module('demo', ["bootstrap.components"]);
    })(demo = app.demo || (app.demo = {}));
})(app || (app = {}));
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
var app;
(function (app) {
    var demo;
    (function (demo) {
        var model;
        (function (model) {
            var Item = (function () {
                function Item(id, title) {
                    this.id = id;
                    this.title = title;
                }
                return Item;
            }());
            model.Item = Item;
        })(model = demo.model || (demo.model = {}));
    })(demo = app.demo || (app.demo = {}));
})(app || (app = {}));
var app;
(function (app) {
    var components;
    (function (components) {
        angular.module('bootstrap.components', []);
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
var app;
(function (app) {
    var components;
    (function (components) {
        var bt;
        (function (bt) {
            var btModelCtrl = (function () {
                function btModelCtrl() {
                }
                btModelCtrl.prototype.hasError = function () {
                    return (this.req.toString().toLowerCase() === 'true' && !this.value);
                };
                return btModelCtrl;
            }());
            bt.btModelCtrl = btModelCtrl;
            ;
        })(bt = components.bt || (components.bt = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
var app;
(function (app) {
    var components;
    (function (components) {
        var bt;
        (function (bt) {
            var input;
            (function (input) {
                angular.module('bootstrap.components')
                    .component("btInput", {
                    templateUrl: "../src/components/input/bt.input.html",
                    controller: bt.btModelCtrl,
                    bindings: {
                        title: "@",
                        value: "=",
                        req: "@"
                    }
                });
            })(input = bt.input || (bt.input = {}));
        })(bt = components.bt || (components.bt = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
var app;
(function (app) {
    var components;
    (function (components) {
        var bt;
        (function (bt) {
            var textarea;
            (function (textarea) {
                angular.module('bootstrap.components')
                    .component("btTextarea", {
                    templateUrl: "../src/components/textarea/bt.textarea.html",
                    controller: bt.btModelCtrl,
                    bindings: {
                        title: "@",
                        value: "=",
                        req: "@"
                    }
                });
            })(textarea = bt.textarea || (bt.textarea = {}));
        })(bt = components.bt || (components.bt = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
