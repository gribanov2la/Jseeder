import {IDictionary, IDictionaryHash} from './interfaces/index';

export default class I18n {
    protected locale: string;
    protected dictionaries: IDictionaryHash;

    constructor(locale, dictionaries: IDictionaryHash) {
        this.locale = locale;
        this.dictionaries = dictionaries;
    }

    public getActiveDictionary(): IDictionary {
        return this.dictionaries[this.locale];
    }

    public setLocale(locale: string) {
        this.locale = locale;
        return this;
    }

    public setDictionaries(dictionaries: IDictionaryHash) {
        this.dictionaries = dictionaries;
        return this;
    }
}
