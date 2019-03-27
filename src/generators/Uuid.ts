import Generator from '../core/Generator';

export class UuidGenerator extends Generator {
    public static make(): UuidGenerator {
        return new this();
    }

    public static get(): string {
        return this.make().get();
    }

    protected readonly mask: string = '########-####-####-####-###########';

    public generate(): string {
        return this.makeMaskMapper(this.mask)(
            () => this.getRandomFromArray(this.hexNumberCharset.split('')).toLowerCase()
        );
    }
}
