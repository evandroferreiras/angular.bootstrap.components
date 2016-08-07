module app.components.bt {
    export interface IbtModel {
        title: string;
        required : boolean;
        ngModel: string;
        hasPlaceholder : boolean;
        hasError() : boolean;
    }

    export class btModelCtrl implements IbtModel {

        title: string;
        required: boolean;
        ngModel: string;
        hasPlaceholder : boolean;


        hasError(): boolean {

            return (this.required.toString().toLowerCase() === 'true' && !this.ngModel);
        }
    };
}