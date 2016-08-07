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
                btModelCtrl.prototype.formGroupClass = function () {
                    var hasError = (this.required.toString().toLowerCase() === 'true' && !this.ngModel);
                    var classes = '';
                    if (hasError) {
                        classes = classes + ' has-error';
                    }
                    if (!this.hasPlaceholder) {
                        classes = classes + ' form-group';
                    }
                    return classes;
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
                    template: "<div  ng-class=\"$ctrl.formGroupClass()\"> \n                            <label class=\"control-label\" ng-hide=\"$ctrl.hasPlaceholder\">{{$ctrl.title}}</label>\n                            <input type=\"text\" ng-model=$ctrl.ngModel ng-required={{$ctrl.required}} class=\"form-control\" placeholder=\"{{$ctrl.hasPlaceholder ? $ctrl.title : ''}}\" />\n                        </div>",
                    controller: bt.btModelCtrl,
                    bindings: {
                        title: "@",
                        ngModel: "=",
                        required: "@",
                        hasPlaceholder: "@"
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
                    template: "<div  ng-class=\"$ctrl.formGroupClass()\" >\n                            <label class=\"control-label\" ng-hide=\"$ctrl.hasPlaceholder\">{{$ctrl.title}}</label>\n                            <textarea ng-model=$ctrl.ngModel ng-required={{$ctrl.required}} class=\"form-control\" placeholder=\"{{$ctrl.hasPlaceholder ? $ctrl.title : ''}}\"></textarea>\n                        </div>",
                    controller: bt.btModelCtrl,
                    bindings: {
                        title: "@",
                        ngModel: "=",
                        required: "@",
                        hasPlaceholder: "@"
                    }
                });
            })(textarea = bt.textarea || (bt.textarea = {}));
        })(bt = components.bt || (components.bt = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
