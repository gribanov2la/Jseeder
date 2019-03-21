import Generator from './Generator';
import I18n from '../I18n';
import Pnrg from '../Pnrg';
import { IStringGeneratorParams } from '../interfaces/generator';
export default class StringGenerator extends Generator {
    protected size: number;
    protected customCharset: string;
    constructor(i18n: I18n, pnrg: Pnrg, { size, customCharset }: IStringGeneratorParams);
    generate(): string;
    setSize(size: number): this;
    setCustomCharset(charset: string): this;
    protected getCharset(): string;
}
