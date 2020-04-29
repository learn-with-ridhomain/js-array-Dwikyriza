const expect = require('chai').expect;
let solution = require('../5').solution;

describe('filtering the smaller ones', () => {
  it('should return the filtered array', () => {
    const result = solution([1, 2, 3], 4);
    expect(result).to.deep.equal([]);
  });
  it('should return the filtered array', () => {
    const result = solution([1, 2, 3, 4, 5], 3);
    expect(result).to.deep.equal([3, 4, 5]);
  });
  it('should return the filtered array', () => {
    const result = solution([12, 13, 14, 15, 16, 16], 10);
    expect(result).to.deep.equal([12, 13, 14, 15, 16, 16]);
  });
  it('should return the filtered array', () => {
    const result = solution([3, 8, -5, 4, 6, 8, 5, 9, 19], 5);
    expect(result).to.deep.equal([8, 6, 8, 9, 19]);
  });
});