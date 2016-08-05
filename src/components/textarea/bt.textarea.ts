module app.components.bt.textarea {
    angular.module('bootstrap.components')
        .component("btTextarea",
        {
            templateUrl: "../src/components/textarea/bt.textarea.html",
            controller: btModelCtrl,
            bindings: {
                title: "@",
                value: "=",
                req: "@"
            }
        });
}