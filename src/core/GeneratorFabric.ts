import Pnrg from './Pnrg';
import I18n from './I18n';
import StringGenerator from './generators/String';
import UuidGenerator from './generators/Uuid';
import DatasetGenerator from './generators/Dataset';
import {
    IStringGeneratorParams,
    IDatasetGeneratorParams
} from './interfaces/index';

export default class GeneratorFabric {
    protected i18n: I18n;
    protected pnrg: Pnrg;

    constructor(i18n: I18n, pnrg: Pnrg) {
        this.i18n = i18n;
        this.pnrg = pnrg;
    }

    public string(params: IStringGeneratorParams): StringGenerator {
        return new StringGenerator(this.i18n, this.pnrg, params);
    }

    public uuid(): UuidGenerator {
        return new UuidGenerator(this.i18n, this.pnrg);
    }

    public dataset(params: IDatasetGeneratorParams): DatasetGenerator {
        return new DatasetGenerator(this.i18n, this.pnrg, params);
    }
}
