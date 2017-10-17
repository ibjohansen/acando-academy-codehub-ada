class SimpleCalculator {
  constructor() {
    this.add = (x, y) => x + y;
    this.subtract = (x, y) => x - y;
    this.multiply = (x, y) => x * y;
    this.divide = (x, y) => x / y;
  }
}

module.exports = SimpleCalculator;
