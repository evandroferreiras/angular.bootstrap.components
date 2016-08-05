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
