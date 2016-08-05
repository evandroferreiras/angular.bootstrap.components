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
