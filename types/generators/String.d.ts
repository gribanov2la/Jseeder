import { Generator, IGeneratorParams } from '../core/Generator';
export interface IStringGeneratorParams extends IGeneratorParams {
    size?: number;
    customCharset?: string;
}
export declare class StringGenerator extends Generator {
    protected size: number;
    protected customCharset: string;
    constructor(params?: IStringGeneratorParams);
    get(): string;
    setSize(size: number): this;
    setCustomCharset(charset: string): this;
    protected getCharset(): string;
}
