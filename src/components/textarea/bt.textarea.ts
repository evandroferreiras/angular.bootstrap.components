module app.components.bt.textarea {
    angular.module('bootstrap.components')
        .component("btTextarea",
        {
            template: `<div  ng-class="$ctrl.formGroupClass()" >
                            <label class="control-label" ng-hide="$ctrl.hasPlaceholder">{{$ctrl.title}}</label>
                            <textarea ng-model=$ctrl.ngModel ng-required={{$ctrl.required}} class="form-control" placeholder="{{$ctrl.hasPlaceholder ? $ctrl.title : ''}}"></textarea>
                        </div>`,
            controller: btModelCtrl,
            bindings: {
                title: "@",
                ngModel: "=",
                required: "@",
                hasPlaceholder : "@"                
            }
        });
}