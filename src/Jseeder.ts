import Collection from './core/Collection';
import GeneratorFabric from './core/GeneratorFabric';
import I18n from './core/I18n';
import Pnrg from './core/Pnrg';
import Structure from './core/Structure';
import dictionaries from './dictionaries/index';

const globalI18n = new I18n('en', dictionaries);
const globalPnrg = new Pnrg();
const globalGeneratorFabric = new GeneratorFabric(globalI18n, globalPnrg);

export default class Jseeder {
    public static types(): GeneratorFabric {
        return globalGeneratorFabric;
    }

    public static collection(structure: Structure | object): Collection {
        structure = structure instanceof Structure ? structure : Jseeder.structure(structure);
        return new Collection(structure);
    }

    public static structure(object: object): Structure {
        return new Structure(object);
    }

    public static locale(locale: string): typeof Jseeder {
        globalI18n.setLocale(locale);
        return Jseeder;
    }

    public static seed(seed: number): typeof Jseeder {
        globalPnrg.setSeed(seed);
        return Jseeder;
    }

    protected i18n: I18n;
    protected pnrg: Pnrg;
    protected generatorFabric: GeneratorFabric;

    constructor(i18n: I18n, pnrg: Pnrg, generatorFabric: GeneratorFabric) {
        this.i18n = i18n;
        this.pnrg = pnrg;
        this.generatorFabric = generatorFabric;
    }

    public types(): GeneratorFabric {
        return this.generatorFabric;
    }

    public instance(lang = 'en'): Jseeder {
        const i18n = new I18n(lang, dictionaries);
        const pnrg = new Pnrg();
        const generatorFabric = new GeneratorFabric(i18n, globalPnrg);
        return new Jseeder(i18n, pnrg, generatorFabric);
    }

    public collection(structure: Structure): Collection {
        return Jseeder.collection(structure);
    }

    public structure(object: object): Structure {
        return Jseeder.structure(object);
    }

    public locale(locale: string): this {
        this.i18n.setLocale(locale);
        return this;
    }

    public seed(seed: number): this {
        this.pnrg.setSeed(seed);
        return this;
    }
}
