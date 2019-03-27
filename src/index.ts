import Collection from './core/Collection';
import {i18n} from './core/services/i18n';
import {pnrg as random} from './core/services/pnrg';
import Structure from './core/Structure';
import dictionaries from './dictionaries/index';
import * as Generators from './public_api/Generators';
import generators from './public_api/generatorsFunctions';

i18n.setDictionaries(dictionaries);

export {
    Collection,
    Generators,
    Structure,
    generators,
    i18n,
    random
};
