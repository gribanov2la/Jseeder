import { IDatasetGeneratorParams } from '../interfaces/index';
import Generator from './Generator';
import Pnrg from '../Pnrg';
import I18n from '../I18n';
export default class DatasetGenerator extends Generator {
    protected data: any[];
    constructor(i18n: I18n, pnrg: Pnrg, { data }: IDatasetGeneratorParams);
    generate(): any;
    setData(data: any[]): this;
}
