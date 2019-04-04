import {Generator, IGeneratorParams} from '../core/Generator';

export interface IDatasetGeneratorParams extends IGeneratorParams {
    data?: any[];
}

export class DatasetGenerator extends Generator {
    protected data: any[];

    constructor(params?: IDatasetGeneratorParams) {
        super(params);
        const {data = []} = params;
        this.data = data;
    }

    public get(): any {
        return this.getRandomFromArray(this.data);
    }

    public setData(data: any[]): this {
        this.data = data;
        return this;
    }
}
