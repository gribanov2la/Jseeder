import {DatasetGenerator, IDatasetGeneratorParams} from '../generators/Dataset';
import {IStringGeneratorParams, StringGenerator} from '../generators/String';
import {UuidGenerator} from '../generators/Uuid';

export default {
    dataset: (params?: IDatasetGeneratorParams): any => DatasetGenerator.get(params),
    string: (params?: IStringGeneratorParams): any => StringGenerator.get(params),
    uuid: (): any => UuidGenerator.get()
};
