import StringGenerator from './generators/String';
import UuidGenerator from './generators/Uuid';
import DatasetGenerator from './generators/Dataset';

export default class GeneratorFabric {
    _i18n;
    _pnrg;

    constructor(i18n, pnrg) {
        this._i18n = i18n;
        this._pnrg = pnrg;
    }

    string(params = {}) {
        return new StringGenerator(this._i18n, this._pnrg, params);
    }

    uuid(params = {}) {
        return new UuidGenerator(this._i18n, this._pnrg, params);
    }

    dataset(params = {}) {
        return new DatasetGenerator(this._i18n, this._pnrg, params);
    }
}
