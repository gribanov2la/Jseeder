import {IDictionary} from './interfaces/index';
import {I18n, i18n} from './services/i18n';
import {Pnrg, pnrg} from './services/pnrg';
import {MaskMapperCallbackType, MaskMapperType} from './types/index';

export interface IGeneratorParams {
    locale?: string;
}

export abstract class Generator {
    protected readonly hexNumberCharset: string = '0123456789ABCDEF';
    protected readonly decNumberCharset: string = '0123456789';

    protected internalLocale: string;
    protected i18n: I18n;
    protected pnrg: Pnrg;

    constructor(params: IGeneratorParams = {}) {
        const {locale = ''} = params;
        this.internalLocale = locale;
        this.i18n = i18n;
        this.pnrg = pnrg;
    }

    public abstract get(): any;

    protected getDictionary(): IDictionary {
        return this.internalLocale === ''
            ? this.i18n.getActiveDictionary()
            : this.i18n.getDictionary(this.internalLocale);
    }

    protected random(): number {
        return this.pnrg.random();
    }

    protected makeMaskMapper(mask: string, replaceableChar: string = '#'): MaskMapperType {
        return (callback: MaskMapperCallbackType) => mask.split('')
            .map((character: string) => character === replaceableChar ? callback(character) : character)
            .join('');
    }

    protected getRandomFromArray<T>(array: T[], weights?: number[]): T {
        const normalizedWeights: number[] = weights && weights.length > 0 ? weights : array.map(() => 1);
        const arrayLength: number = normalizedWeights.reduce((total, weight) => weight + total, 0);
        const weightResultIndex: number = Math.floor(this.random() * arrayLength);
        let weightCache: number = 0;

        for (let i = 0; i < array.length; i++) {
            weightCache += normalizedWeights[i];

            if (weightResultIndex < weightCache) {
                return array[i];
            }
        }
    }
}
