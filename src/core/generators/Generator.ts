import {IDictionary} from '../interfaces/index';
import {TypeMaskMapper} from '../types/index';
import Pnrg from '../Pnrg';
import I18n from '../I18n';

export default abstract class Generator {
    protected readonly hexNumberCharset: string = '0123456789ABCDEF';
    protected readonly decNumberCharset: string = '0123456789';

    protected i18n: I18n;
    protected pnrg: Pnrg;

    constructor(i18n: I18n, pnrg: Pnrg) {
        this.i18n = i18n;
        this.pnrg = pnrg;
    }

    public abstract generate(): any;

    protected getDictionary(): IDictionary {
        return this.i18n.getActiveDictionary();
    }

    protected random(): number {
        return this.pnrg.random();
    }

    protected makeMaskMapper(mask: string, replaceableChar: string = '#'): TypeMaskMapper {
        return callback => mask.split('')
            .map(character => character === replaceableChar ? callback(character) : character)
            .join('');
    }

    protected getRandomFromArray<T>(array: T[]): T {
        return array[Math.floor(this.random() * array.length)];
    }
}
