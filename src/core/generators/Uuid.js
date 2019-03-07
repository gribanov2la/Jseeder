import AbstractGenerator from '../AbstractGenerator';

export default class StringGenerator extends AbstractGenerator {
	get _uuidMask() {
		return '########-####-####-####-###########';
	};
	
	constructor(i18n, pnrg) {
		super(i18n, pnrg);
	}
	
	generate() {
		return this._mapMask(this._uuidMask)(() => this._getRandomFromArray(this._hexCharset.split('')).toLowerCase());
	}
}
