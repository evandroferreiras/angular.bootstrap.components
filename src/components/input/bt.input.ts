module app.components.bt.input {

    angular.module('bootstrap.components')
        .component("btInput",
        {
            templateUrl: "../src/components/input/bt.input.html",
            controller: btModelCtrl,
            bindings: {
                title: "@",
                value: "=",
                req: "@"
            }
        });
}