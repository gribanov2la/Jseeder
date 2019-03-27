import Generator from '../core/Generator';
export interface IStringGeneratorParams {
    size?: number;
    customCharset?: string;
}
export declare class StringGenerator extends Generator {
    static make(params?: IStringGeneratorParams): StringGenerator;
    static get(params?: IStringGeneratorParams): string;
    protected size: number;
    protected customCharset: string;
    constructor({ size, customCharset }: IStringGeneratorParams);
    generate(): string;
    setSize(size: number): this;
    setCustomCharset(charset: string): this;
    protected getCharset(): string;
}
