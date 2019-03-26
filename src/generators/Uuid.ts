import Generator from '../core/Generator';

export default class StringGenerator extends Generator {
    public static make() {
        return new this();
    }

    public static get() {
        return this.make().get();
    }

    protected readonly mask: string = '########-####-####-####-###########';

    public generate(): string {
        return this.makeMaskMapper(this.mask)(
            () => this.getRandomFromArray(this.hexNumberCharset.split('')).toLowerCase()
        );
    }
}
