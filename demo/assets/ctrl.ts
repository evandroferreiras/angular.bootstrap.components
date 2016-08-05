module app.demo.ctrl{
    interface ICtrl {
        titleWindow : string;
        item : app.demo.model.IItem
    }

    export class Ctrl implements ICtrl {
        titleWindow : string;
        item : app.demo.model.IItem  

        constructor() {
            this.titleWindow = "";
            
        }      
    }

    angular
        .module("demo")
        .controller("Ctrl", Ctrl)    
}