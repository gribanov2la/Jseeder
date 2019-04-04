import Generator from '../core/Generator';
export interface IStringGeneratorParams {
    size?: number;
    customCharset?: string;
}
export declare class StringGenerator extends Generator {
    protected size: number;
    protected customCharset: string;
    constructor(params?: IStringGeneratorParams);
    generate(): string;
    setSize(size: number): this;
    setCustomCharset(charset: string): this;
    protected getCharset(): string;
}
