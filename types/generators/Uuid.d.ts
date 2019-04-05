import { Generator, IGeneratorParams } from '../core/Generator';
export interface IUuidGeneratorParams extends IGeneratorParams {
    size?: number;
    customCharset?: string;
}
export declare class UuidGenerator extends Generator {
    protected readonly mask: string;
    constructor(params?: IUuidGeneratorParams);
    get(): string;
}
