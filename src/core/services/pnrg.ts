export class Pnrg {
    protected seed: number;

    constructor() {
        this.seed = Math.floor((Math.random() * 0xF4240) + 1);
    }

    public random(): number {
        return Math.abs(Math.sin(++this.seed * (this.seed + 0xFF))); // very stupid algorithm
    }

    public setSeed(seed: number): this {
        this.seed = seed;
        return this;
    }
}

export const pnrg = new Pnrg();
