import {i18n} from './core/services/i18n';
import dictionaries from './dictionaries/index';
import collection from './public_api/collection';
import generators from './public_api/generators';
import setLocale from './public_api/setLocale';
import setSeed from './public_api/setSeed';

i18n.setDictionaries(dictionaries);

export {
    collection,
    generators,
    setLocale,
    setSeed
};
