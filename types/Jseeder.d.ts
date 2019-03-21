import Collection from './core/Collection';
import GeneratorFabric from './core/GeneratorFabric';
import I18n from './core/I18n';
import Pnrg from './core/Pnrg';
import Structure from './core/Structure';
export default class Jseeder {
    static types(): GeneratorFabric;
    static collection(structure: Structure | object): Collection;
    static structure(object: object): Structure;
    static locale(locale: string): typeof Jseeder;
    static seed(seed: number): typeof Jseeder;
    protected i18n: I18n;
    protected pnrg: Pnrg;
    protected generatorFabric: GeneratorFabric;
    constructor(i18n: I18n, pnrg: Pnrg, generatorFabric: GeneratorFabric);
    types(): GeneratorFabric;
    instance(lang?: string): Jseeder;
    collection(structure: Structure): Collection;
    structure(object: object): Structure;
    locale(locale: string): this;
    seed(seed: number): this;
}
