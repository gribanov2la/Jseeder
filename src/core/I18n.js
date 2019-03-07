export default class I18n {
	constructor(locale, dictionaries) {
		this._locale = locale;
		this._dictionaries = dictionaries;
	}
	
	get activeDictionary() {
		return this._dictionaries[this._locale];
	}
	
	setLocale(locale) {
		this._locale = locale;
		return this;
	}
	
	setDictionaries(dictionaries) {
		this._dictionaries = dictionaries;
		return this;
	}
}

