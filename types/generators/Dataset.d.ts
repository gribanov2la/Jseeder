import { Generator, IGeneratorParams } from '../core/Generator';
export interface IDatasetGeneratorParams extends IGeneratorParams {
    data?: any[];
    weights?: number[];
}
export declare class DatasetGenerator extends Generator {
    protected data: any[];
    protected weights: number[];
    constructor(params?: IDatasetGeneratorParams);
    get(): any;
    setData(data: any[]): this;
    setWeights(weights: number[]): this;
}
