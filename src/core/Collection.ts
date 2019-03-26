import Structure from './Structure';

export default class Collection {
    public static make(object: object) {
        return new this(object);
    }

    protected structure: object;
    protected sourceArray: any[];
    protected size: number;

    constructor(object: object) {
        this.structure = new Structure(object);
    }

    public setObject(object: object): this {
        this.structure = object;
        return this;
    }

    public setSize(value: number): this {
        this.size = value;
        return this;
    }

    public setSourceArray(array: any[]): this {
        this.sourceArray = array;
        return this;
    }

    public process(): any[] {
        return this.getArrayForFill().map(sourceObject => {
            return new Structure(this.structure).process(sourceObject);
        });
    }

    protected getArrayForFill(): any[] {
        let sourceArray: any[];

        if (this.sourceArray != null && this.size != null) {
            sourceArray = this.normalizeSourceArrayByCount(this.sourceArray, this.size);
        } else if (this.sourceArray != null) {
            sourceArray = [...this.sourceArray];
        } else {
            sourceArray = (new Array(this.size || 0)).fill({});
        }

        return sourceArray;
    }

    protected normalizeSourceArrayByCount(array: any[], count: number): any[] {
        return count > array.length ?
            [...array, new Array(count - array.length).fill({})]
            : array.filter((item, index) => index < count);
    }
}
