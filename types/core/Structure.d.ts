export default class Structure {
    protected object: object;
    constructor(object?: object);
    setObject(value: any): this;
    process(sourceObject?: object): object;
    protected processObject(object: object): object;
    protected processProperty(value: any): any;
}
