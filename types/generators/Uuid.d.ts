import Generator from '../core/Generator';
export interface IUuidGeneratorParams {
    size?: number;
    customCharset?: string;
}
export declare class UuidGenerator extends Generator {
    protected readonly mask: string;
    constructor(params?: IUuidGeneratorParams);
    generate(): string;
}
