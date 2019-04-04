import {pnrg} from '../core/services/pnrg';

export default (seed: number): void => {
    pnrg.setSeed(seed);
};
