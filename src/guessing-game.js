class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minVal = min;
    this.maxVal = max;
  }

  guess() {
    return  Math.round((this.minVal + this.maxVal)/2);
  }

  lower() {
    this.maxVal = this.guess();
  }

  greater() {
    this.minVal = this.guess();
  }
}

module.exports = GuessingGame;
