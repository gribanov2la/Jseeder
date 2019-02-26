import SeedFabric from './SeedFabric'
import SeedProcessor from './SeedProcessor'

export default class Seeder {
	static seed(count, structure) {
		const seedProcessor = new SeedProcessor(count, structure);
		return seedProcessor.process();
	}
	
	static makeSubSeed(count, structure) {
		return new SeedProcessor(count, structure);
	}
	
	static get types() {
		return SeedFabric;
	}
}
