import Generator from '../core/Generator';
import { IStringGeneratorParams } from '../core/interfaces/index';
export default class StringGenerator extends Generator {
    static make(params?: IStringGeneratorParams): StringGenerator;
    static get(params?: IStringGeneratorParams): any;
    protected size: number;
    protected customCharset: string;
    constructor({ size, customCharset }: IStringGeneratorParams);
    generate(): string;
    setSize(size: number): this;
    setCustomCharset(charset: string): this;
    protected getCharset(): string;
}
