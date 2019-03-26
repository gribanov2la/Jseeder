import Generator from '../core/Generator';
import {IDatasetGeneratorParams} from '../core/interfaces/index';

export default class DatasetGenerator extends Generator {
    public static make(params?: IDatasetGeneratorParams) {
        return new this(params);
    }

    public static get(params?: IDatasetGeneratorParams) {
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
