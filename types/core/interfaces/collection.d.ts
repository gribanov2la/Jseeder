export interface ICollection {
    setObject(object: object): this;
    setSize(value: number): this;
    setSourceArray(array: any[]): this;
    process(): any[];
}
export declare function instanceOfICollection(object: any): boolean;
