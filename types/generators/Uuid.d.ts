import Generator from '../core/Generator';
export default class StringGenerator extends Generator {
    static make(): StringGenerator;
    static get(): any;
    protected readonly mask: string;
    generate(): string;
}
