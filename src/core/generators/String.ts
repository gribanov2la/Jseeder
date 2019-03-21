import Generator from './Generator';
import I18n from '../I18n';
import Pnrg from '../Pnrg';
import {IStringGeneratorParams} from '../interfaces/generator';

export default class StringGenerator extends Generator {
    protected size: number;
    protected customCharset: string;

    constructor(i18n: I18n, pnrg: Pnrg, {size = 8, customCharset}: IStringGeneratorParams) {
        super(i18n, pnrg);
        this.size = size;
        this.customCharset = customCharset;
    }

    public generate(): string {
        const charset: string = this.getCharset();
        let value: string = '';

        for (let i = 0; i < this.size; i++) {
            value += this.getRandomFromArray(charset.split(''));
        }

        return value;
    }

    public setSize(size: number): this {
        this.size = size;
        return this;
    }

    public setCustomCharset(charset: string): this {
        this.customCharset = charset;
        return this;
    }

    protected getCharset(): string {
        return this.customCharset || (this.getDictionary().alphabet + this.decNumberCharset);
    }
}
