import {IDictionary, IDictionaryHash} from '../interfaces/index';

export class I18n {
    protected locale: string;
    protected dictionaries: IDictionaryHash;

    constructor(locale?: string, dictionaries?: IDictionaryHash) {
        this.locale = locale;
        this.dictionaries = dictionaries;
    }

    public getDictionary(locale: string): IDictionary {
        return this.dictionaries[locale];
    }

    public getActiveDictionary(): IDictionary {
        return this.getDictionary(this.locale);
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

export const i18n = new I18n();
