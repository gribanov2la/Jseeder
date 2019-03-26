export interface ICollection {
    setObject(object: object): this;

    setSize(value: number): this;

    setSourceArray(array: any[]): this;

    process(): any[];
}

export function instanceOfICollection(object: any) {
    return [
        'setObject',
        'setSize',
        'setSourceArray',
        'process'
    ].every(methodName => methodName in object);
}
