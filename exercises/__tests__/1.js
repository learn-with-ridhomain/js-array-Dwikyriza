const expect = require('chai').expect;
let solution = require('../1').solution;

describe('the sum of numbers', () => {
  it('should return the sum of the numbers', () => {
    const result = solution([1, 2, 3]);
    expect(result).to.equal(6);
  });
  it('should return the sum of the numbers', () => {
    const result = solution([1, 2, 3, 4, 5]);
    expect(result).to.equal(15);
  });
  it('should return the sum of the numbers', () => {
    const result = solution([10, 2, -4, 6, 4, 5]);
    expect(result).to.equal(23);
  });
  it('should return the sum of the numbers', () => {
    const result = solution([2, 4, 20, 20, 10, 13]);
    expect(result).to.equal(69);
  });
});