import Generator from './Generator';
export default class StringGenerator extends Generator {
    protected readonly mask: string;
    generate(): string;
}
