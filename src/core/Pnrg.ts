export default class Pnrg {
    _seed;

    constructor() {
        this._seed = Math.floor((Math.random() * 0xF4240) + 1);
    }

    random() {
        return Math.abs(Math.sin(++this._seed * (this._seed + 0xFF))); // very stupid algorithm
    }

    setSeed(seed) {
        this._seed = seed;
        return this;
    }
}
