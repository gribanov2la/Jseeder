import I18n from './core/I18n';
import GeneratorFabric from './core/GeneratorFabric';
import Structure from './core/Structure';
import Collection from './core/Collection';
import Pnrg from './core/Pnrg';
import dictionaries from './dictionaries/index';

const i18n = new I18n('en', dictionaries);
const pnrg = new Pnrg();
const generatorFabric = new GeneratorFabric(i18n, pnrg);

export default class Jseeder {
	static get types() {
		return generatorFabric;
	}

	static collection(structure: any) {
		structure = structure instanceof Structure ? structure : Jseeder.structure(structure);

		return new Collection(structure);
	}

	static structure(object = {}) {
		return new Structure(object);
	}

	static locale(locale) {
		i18n.setLocale(locale);
		return this;
	}

	static seed(seed) {
		pnrg.setSeed(seed);
		return this;
	}
}
