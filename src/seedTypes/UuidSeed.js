import AbstractSeed from '../AbstractSeed';

export default class UuidSeed extends AbstractSeed {
	generateValue() {
		return 'uuid-' + Math.random().toString(36).substring(7);
	}
}
