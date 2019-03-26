import Collection from './core/Collection';
import Generator from './core/Generator';
import Structure from './core/Structure';
import Dataset from './generators/Dataset';
import String from './generators/String';
import Uuid from './generators/Uuid';
declare const Jseeder: {
    Collection: typeof Collection;
    Generator: typeof Generator;
    Structure: typeof Structure;
    generators: {
        Dataset: typeof Dataset;
        String: typeof String;
        Uuid: typeof Uuid;
    };
    i18n: import("./core/services/i18n").I18n;
    pnrg: import("./core/services/pnrg").Pnrg;
};
export default Jseeder;
