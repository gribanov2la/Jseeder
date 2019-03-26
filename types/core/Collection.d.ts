export default class Collection {
    static make(object: object): Collection;
    protected structure: object;
    protected sourceArray: any[];
    protected size: number;
    constructor(object: object);
    setObject(object: object): this;
    setSize(value: number): this;
    setSourceArray(array: any[]): this;
    process(): any[];
    protected getArrayForFill(): any[];
    protected normalizeSourceArrayByCount(array: any[], count: number): any[];
}
