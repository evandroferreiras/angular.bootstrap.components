module app.components.bt.input {

    angular.module('bootstrap.components')
        .component("btInput",
        {
            template: `<div  ng-class="$ctrl.formGroupClass()"> 
                            <label class="control-label" ng-hide="$ctrl.hasPlaceholder">{{$ctrl.title}}</label>
                            <input type="text" ng-model=$ctrl.ngModel ng-required={{$ctrl.required}} class="form-control" placeholder="{{$ctrl.hasPlaceholder ? $ctrl.title : ''}}" />
                        </div>`,
            controller: btModelCtrl,
            bindings: {
                title: "@",
                ngModel: "=",
                required: "@",
                hasPlaceholder :"@"
            }
        });
}