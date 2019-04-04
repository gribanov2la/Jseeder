import {Generator, IGeneratorParams} from '../core/Generator';

export interface IUuidGeneratorParams extends IGeneratorParams {
    size?: number;
    customCharset?: string;
}

export class UuidGenerator extends Generator {
    protected readonly mask: string = '########-####-####-####-###########';

    constructor(params?: IUuidGeneratorParams) {
        super(params);
    }

    public get(): string {
        return this.makeMaskMapper(this.mask)(
            () => this.getRandomFromArray(this.hexNumberCharset.split('')).toLowerCase()
        );
    }
}
