import {Generator, IGeneratorParams} from '../core/Generator';

export interface IDatasetGeneratorParams extends IGeneratorParams {
    data?: any[];
    weights?: number[];
}

export class DatasetGenerator extends Generator {
    protected data: any[];
    protected weights: number[];

    constructor(params?: IDatasetGeneratorParams) {
        super(params);
        const {data = [], weights = []} = params;
        this.data = data;
        this.weights = weights;
    }

    public get(): any {
        return this.getRandomFromArray(this.data, this.weights);
    }

    public setData(data: any[]): this {
        this.data = data;
        return this;
    }

    public setWeights(weights: number[]): this {
        this.weights = weights;
        return this;
    }
}
