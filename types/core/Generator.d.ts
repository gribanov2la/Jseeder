import { IDictionary } from './interfaces/index';
import { I18n } from './services/i18n';
import { Pnrg } from './services/pnrg';
import { MaskMapperType } from './types/index';
export interface IGeneratorParams {
    locale?: string;
}
export declare abstract class Generator {
    protected readonly hexNumberCharset: string;
    protected readonly decNumberCharset: string;
    protected internalLocale: string;
    protected i18n: I18n;
    protected pnrg: Pnrg;
    constructor(params?: IGeneratorParams);
    abstract get(): any;
    protected getDictionary(): IDictionary;
    protected random(): number;
    protected makeMaskMapper(mask: string, replaceableChar?: string): MaskMapperType;
    protected getRandomFromArray<T>(array: T[], weights?: number[]): T;
}
