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
