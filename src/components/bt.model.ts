module app.components.bt {
    export interface IbtModel {
        title: string;
        required : boolean;
        ngModel: string;
        hasPlaceholder : boolean;
        formGroupClass() : string;
    }

    export class btModelCtrl implements IbtModel {

        title: string;
        required: boolean;
        ngModel: string;
        hasPlaceholder : boolean;


        formGroupClass(): string {
            var hasError = (this.required.toString().toLowerCase() === 'true' && !this.ngModel);
            var classes = '';
            if (hasError){
                classes = classes + ' has-error'
            }

            if (!this.hasPlaceholder){
                classes = classes + ' form-group'
            }
            
            return classes;
        }
    };
}