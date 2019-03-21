import { IDictionary } from '../interfaces/index';
import { TypeMaskMapper } from '../types/index';
import Pnrg from '../Pnrg';
import I18n from '../I18n';
export default abstract class Generator {
    protected readonly hexNumberCharset: string;
    protected readonly decNumberCharset: string;
    protected i18n: I18n;
    protected pnrg: Pnrg;
    constructor(i18n: I18n, pnrg: Pnrg);
    abstract generate(): any;
    protected getDictionary(): IDictionary;
    protected random(): number;
    protected makeMaskMapper(mask: string, replaceableChar?: string): TypeMaskMapper;
    protected getRandomFromArray<T>(array: T[]): T;
}
