import Generator from '../core/Generator';
export declare class UuidGenerator extends Generator {
    static make(): UuidGenerator;
    static get(): string;
    protected readonly mask: string;
    generate(): string;
}
