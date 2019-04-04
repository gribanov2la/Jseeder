import {DatasetGenerator, IDatasetGeneratorParams} from '../generators/Dataset';
import {IStringGeneratorParams, StringGenerator} from '../generators/String';
import {IUuidGeneratorParams, UuidGenerator} from '../generators/Uuid';

export default {
    dataset: (params?: IDatasetGeneratorParams): DatasetGenerator => new DatasetGenerator(params),
    string: (params?: IStringGeneratorParams): StringGenerator => new StringGenerator(params),
    uuid: (params?: IUuidGeneratorParams): any => new UuidGenerator(params)
};
