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
