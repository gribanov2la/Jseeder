import AbstractSeed from '../AbstractSeed';

export default class StringSeed extends AbstractSeed {
	generateValue() {
		return 'string-' + Math.random().toString(36).substring(7);
	}
}
