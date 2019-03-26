import Generator from '../core/Generator';
import { IDatasetGeneratorParams } from '../core/interfaces/index';
export default class DatasetGenerator extends Generator {
    static make(params?: IDatasetGeneratorParams): DatasetGenerator;
    static get(params?: IDatasetGeneratorParams): any;
    protected data: any[];
    constructor({ data }: IDatasetGeneratorParams);
    generate(): any;
    setData(data: any[]): this;
}
