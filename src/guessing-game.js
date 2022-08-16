class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {
        this.mid = Math.ceil((Math.ceil(this.min) + Math.ceil(this.max)) / 2);
        return this.mid;

    }

    lower() {
        this.max = this.mid;


    }

    greater() {
        this.min = this.mid;
    }
}

module.exports = GuessingGame;
