const expect = require('chai').expect;
let solution = require('../4').solution;

describe('greater than 4 only', () => {
  it('should return a new array', () => {
    const result = solution([1, 2, 3]);
    expect(result).to.deep.equal([]);
  });
  it('should return a new array', () => {
    const result = solution([1, 2, 3, 4, 5]);
    expect(result).to.deep.equal([5]);
  });
  it('should return a new array', () => {
    const result = solution([12, 13, 14, 15, 16, 16]);
    expect(result).to.deep.equal([12, 13, 14, 15, 16, 16]);
  });
  it('should return a new array', () => {
    const result = solution([3, 8, -5, 4, 6, 8, 5, 9, 19]);
    expect(result).to.deep.equal([8, 6, 8, 5, 9, 19]);
  });
});