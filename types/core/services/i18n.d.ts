import { IDictionary, IDictionaryHash } from '../interfaces/index';
export declare class I18n {
    protected locale: string;
    protected dictionaries: IDictionaryHash;
    constructor(locale?: string, dictionaries?: IDictionaryHash);
    getDictionary(locale: string): IDictionary;
    getActiveDictionary(): IDictionary;
    setLocale(locale: string): this;
    setDictionaries(dictionaries: IDictionaryHash): this;
}
export declare const i18n: I18n;
