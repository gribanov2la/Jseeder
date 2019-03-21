export default class Collection {
    protected structure: any;
    protected sourceArray: any[];
    protected size: number;
    constructor(structure: any);
    setStructure(structure: any): this;
    setSize(value: number): this;
    setSourceArray(array: any[]): this;
    process(): any[];
    protected getArrayForFill(): any[];
    protected normalizeSourceArrayByCount(array: any[], count: number): any[];
}
