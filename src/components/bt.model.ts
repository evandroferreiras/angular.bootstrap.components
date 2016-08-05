module app.components.bt {
    export interface IbtModel {
        title: string;
        req : boolean;
        value: string;
        hasError() : boolean;
    }

    export class btModelCtrl implements IbtModel {

        title: string;
        req: boolean;
        value: string;

        hasError(): boolean {

            return (this.req.toString().toLowerCase() === 'true' && !this.value);
        }
    };
}