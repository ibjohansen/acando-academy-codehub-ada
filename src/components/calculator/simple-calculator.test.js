const Mocha = require('mocha');
const {expect} = require('chai');
const SimpleCalculator = require('./simple-calculator.js');

const {describe, it} = Mocha;

const simpleCalculator = new SimpleCalculator();
describe('SimpleCalculator', () => {
  describe('#add', () => {
    it('should return 10 when adding 4 + 6', () => {
      expect(simpleCalculator.add(4, 6)).to.equal(10);
    });
  });
  describe('#subtract', () => {
    it('should return 5 when doing 10 - 5', () => {
      expect(simpleCalculator.subtract(10, 5)).to.equal(5);
    });
    it('should return (negative) -3 when doing 5 - 8', () => {
      expect(simpleCalculator.subtract(5, 8)).to.equal(-3);
    });
  });
  describe('#multiply', () => {
    it('should return 21 when multiplying 7 with 3', () => {
      expect(simpleCalculator.multiply(7, 3)).to.equal(21);
    });
    it('should return positive 9 when multiplying the two negative numbers -3', () => {
      expect(simpleCalculator.multiply(-3, -3)).to.equal(9);
    });
    it('should return the negative number -15 when multiplying 5 with -3', () => {
      expect(simpleCalculator.multiply(5, -3)).to.equal(-15);
    });
  });
  describe('#divide', () => {
    it('should return 3 when dividing 9 by 3', () => {
      expect(simpleCalculator.divide(9, 3)).to.equal(3);
    });
    it('should return the negative number -3 when dividing -9 with 3', () => {
      expect(simpleCalculator.divide(-9, 3)).to.equal(-3);
    });
    it('should return Infinity when dividing a number with 0', () => {
      expect(simpleCalculator.divide(9, 0)).to.equal(Infinity);
    });
  });
});
