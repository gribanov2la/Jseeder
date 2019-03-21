import Pnrg from './Pnrg';
import I18n from './I18n';
import StringGenerator from './generators/String';
import UuidGenerator from './generators/Uuid';
import DatasetGenerator from './generators/Dataset';
import { IStringGeneratorParams, IDatasetGeneratorParams } from './interfaces/index';
export default class GeneratorFabric {
    protected i18n: I18n;
    protected pnrg: Pnrg;
    constructor(i18n: I18n, pnrg: Pnrg);
    string(params: IStringGeneratorParams): StringGenerator;
    uuid(): UuidGenerator;
    dataset(params: IDatasetGeneratorParams): DatasetGenerator;
}
