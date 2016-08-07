module app.components.bt.textarea {
    angular.module('bootstrap.components')
        .component("btTextarea",
        {
            template: `<div class="form-group" ng-class="$ctrl.hasError() ? 'has-error' : ''" >
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