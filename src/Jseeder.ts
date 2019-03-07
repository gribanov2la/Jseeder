import I18n from './core/I18n';
import GeneratorFabric from './core/GeneratorFabric';
import Structure from './core/Structure';
import Collection from './core/Collection';
import Pnrg from './core/Pnrg';
import dictionaries from './dictionaries/index';

const globalI18n = new I18n('en', dictionaries);
const globalPnrg = new Pnrg();
const globalGeneratorFabric = new GeneratorFabric(globalI18n, globalPnrg);

export default class Jseeder {
    _i18n;
    _pnrg;
    _generatorFabric;

    static get types() {
        return globalGeneratorFabric;
    }

    static collection(structure: any) {
        structure = structure instanceof Structure ? structure : Jseeder.structure(structure);

        return new Collection(structure);
    }

    static structure(object = {}) {
        return new Structure(object);
    }

    static locale(locale) {
        globalI18n.setLocale(locale);
        return this;
    }

    static seed(seed) {
        globalPnrg.setSeed(seed);
        return this;
    }

    constructor(i18n, pnrg, generatorFabric) {
        this._i18n = i18n;
        this._pnrg = pnrg;
        this._generatorFabric = generatorFabric;
    }

    get types() {
        return this._generatorFabric;
    }

    instance(lang = 'en', localDictionaries = dictionaries) {
        const i18n = new I18n(lang, localDictionaries);
        const pnrg = new Pnrg();
        const generatorFabric = new GeneratorFabric(i18n, globalPnrg);

        return new Jseeder(i18n, pnrg, generatorFabric)
    }

    collection(structure: any) {
        structure = structure instanceof Structure ? structure : this.structure(structure);

        return new Collection(structure);
    }

    structure(object = {}) {
        return new Structure(object);
    }

    locale(locale) {
        this._i18n.setLocale(locale);
        return this;
    }

    seed(seed) {
        this._pnrg.setSeed(seed);
        return this;
    }
}
