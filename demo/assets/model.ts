module app.demo.model{
    export interface IItem {
        id :number;
        title : string;        
    }

    export class Item implements IItem{
                constructor(public id: number,
            public title: string) {
        }
    }
}