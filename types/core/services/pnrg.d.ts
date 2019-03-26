export declare class Pnrg {
    protected seed: number;
    constructor();
    random(): number;
    setSeed(seed: number): this;
}
export declare const pnrg: Pnrg;
