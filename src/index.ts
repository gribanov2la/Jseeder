import Collection from './core/Collection';
import Generator from './core/Generator';
import {i18n} from './core/services/i18n';
import {pnrg} from './core/services/pnrg';
import Structure from './core/Structure';
import Dataset from './generators/Dataset';
import String from './generators/String';
import Uuid from './generators/Uuid';

const Jseeder = {
    Collection,
    Generator,
    Structure,
    generators: {
        Dataset,
        String,
        Uuid
    },
    i18n,
    pnrg
};

export default Jseeder;
