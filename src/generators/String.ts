import {Generator, IGeneratorParams} from '../core/Generator';

export interface IStringGeneratorParams extends IGeneratorParams {
    size?: number;
    customCharset?: string;
}

export class StringGenerator extends Generator {
    protected size: number;
    protected customCharset: string;

    constructor(params?: IStringGeneratorParams) {
        super(params);
        const {size = 8, customCharset} = params;
        this.size = size;
        this.customCharset = customCharset;
    }

    public get(): string {
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
