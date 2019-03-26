import {IDictionary} from './interfaces/index';
import {I18n, i18n} from './services/i18n';
import {Pnrg, pnrg} from './services/pnrg';
import {MaskMapperType} from './types/index';

export default abstract class Generator {
    protected readonly hexNumberCharset: string = '0123456789ABCDEF';
    protected readonly decNumberCharset: string = '0123456789';

    protected i18n: I18n;
    protected pnrg: Pnrg;

    constructor() {
        this.i18n = i18n;
        this.pnrg = pnrg;
    }

    public abstract generate(): any;

    public get() {
        return this.generate();
    }

    protected getDictionary(): IDictionary {
        return this.i18n.getActiveDictionary();
    }

    protected random(): number {
        return this.pnrg.random();
    }

    protected makeMaskMapper(mask: string, replaceableChar: string = '#'): MaskMapperType {
        return callback => mask.split('')
            .map(character => character === replaceableChar ? callback(character) : character)
            .join('');
    }

    protected getRandomFromArray<T>(array: T[]): T {
        return array[Math.floor(this.random() * array.length)];
    }
}
