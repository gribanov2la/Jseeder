import { IDictionary, IDictionaryHash } from './interfaces/index';
export default class I18n {
    protected locale: string;
    protected dictionaries: IDictionaryHash;
    constructor(locale: any, dictionaries: IDictionaryHash);
    getActiveDictionary(): IDictionary;
    setLocale(locale: string): this;
    setDictionaries(dictionaries: IDictionaryHash): this;
}
