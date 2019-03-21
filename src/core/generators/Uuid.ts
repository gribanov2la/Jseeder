import Generator from './Generator';

export default class StringGenerator extends Generator {
    protected readonly mask: string = '########-####-####-####-###########';

    public generate(): string {
        return this.makeMaskMapper(this.mask)(
            () => this.getRandomFromArray(this.hexNumberCharset.split('')).toLowerCase()
        );
    }
}
