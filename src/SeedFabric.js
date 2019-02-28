import StringSeed from './seedTypes/StringSeed';
import UuidSeed from './seedTypes/UuidSeed';
import RangeSeed from './seedTypes/RangeSeed';

export default class SeedFabric {
	static string(params = {}) {
		return new StringSeed(params);
	}
	
	static uuid(params = {}) {
		return new UuidSeed(params);
	}
	
	static range(params = {}) {
		return new RangeSeed(params);
	}
}
