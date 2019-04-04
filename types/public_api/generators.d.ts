import { DatasetGenerator, IDatasetGeneratorParams } from '../generators/Dataset';
import { IStringGeneratorParams, StringGenerator } from '../generators/String';
import { IUuidGeneratorParams } from '../generators/Uuid';
declare const _default: {
    dataset: (params?: IDatasetGeneratorParams) => DatasetGenerator;
    string: (params?: IStringGeneratorParams) => StringGenerator;
    uuid: (params?: IUuidGeneratorParams) => any;
};
export default _default;
