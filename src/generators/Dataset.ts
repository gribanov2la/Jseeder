import Generator from '../core/Generator';

export interface IDatasetGeneratorParams {
    data?: any[];
}

export class DatasetGenerator extends Generator {
    public static make(params?: IDatasetGeneratorParams): DatasetGenerator {
        return new this(params);
    }

    public static get(params?: IDatasetGeneratorParams): any {
        return DatasetGenerator.make(params).get();
    }

    protected data: any[];

    constructor({data = []}: IDatasetGeneratorParams) {
        super();
        this.data = data;
    }

    public generate(): any {
        return this.getRandomFromArray(this.data);
    }

    public setData(data: any[]): this {
        this.data = data;
        return this;
    }
}
