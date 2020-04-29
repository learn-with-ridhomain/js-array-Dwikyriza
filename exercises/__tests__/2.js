const expect = require('chai').expect;
let solution = require('../2').solution;

describe('find the greatest one', () => {
  it('should return the greatest number', () => {
    const result = solution([1, 2, 3]);
    expect(result).to.equal(3);
  });
  it('should return the greatest number', () => {
    const result = solution([1, 2, 3, 4, 5]);
    expect(result).to.equal(5);
  });
  it('should return the greatest number', () => {
    const result = solution([10, 2, 4, 6, 4, 5]);
    expect(result).to.equal(10);
  });
  it('should return the greatest number', () => {
    const result = solution([2, 4, 20, 20, 10, 13]);
    expect(result).to.equal(20);
  });
});