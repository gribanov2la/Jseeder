import Generator from '../core/Generator';
export interface IDatasetGeneratorParams {
    data?: any[];
}
export declare class DatasetGenerator extends Generator {
    static make(params?: IDatasetGeneratorParams): DatasetGenerator;
    static get(params?: IDatasetGeneratorParams): any;
    protected data: any[];
    constructor({ data }: IDatasetGeneratorParams);
    generate(): any;
    setData(data: any[]): this;
}
