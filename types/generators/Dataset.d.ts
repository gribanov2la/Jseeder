import Generator from '../core/Generator';
export interface IDatasetGeneratorParams {
    data?: any[];
}
export declare class DatasetGenerator extends Generator {
    protected data: any[];
    constructor(params?: IDatasetGeneratorParams);
    generate(): any;
    setData(data: any[]): this;
}
