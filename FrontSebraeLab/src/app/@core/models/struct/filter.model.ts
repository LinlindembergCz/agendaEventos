export class FilterModel {
    code: number;
    name: String;

    /**
     *
     */
    constructor(id: number, label: String) {
        this.code = id;
        this.name = label;        
    }        
}