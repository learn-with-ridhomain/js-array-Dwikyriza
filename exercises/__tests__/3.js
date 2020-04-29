const expect = require('chai').expect;
let solution = require('../3').solution;

describe('everything but prime is 0', () => {
  it('should return the mutated array', () => {
    const result = solution([1, 2, 3]);
    expect(result).to.deep.equal([1, 2, 3]);
  });
  it('should return the mutated array', () => {
    const result = solution([1, 2, 3, 4, 5]);
    expect(result).to.deep.equal([1, 2, 3, 0, 5]);
  });
  it('should return the mutated array', () => {
    const result = solution([12, 13, 14, 15, 16, 16]);
    expect(result).to.deep.equal([0, 13, 0, 0, 0, 0]);
  });
  it('should return the mutated array', () => {
    const result = solution([3, 8, 4, 6, 8, 5, 9, 19]);
    expect(result).to.deep.equal([3, 0, 4, 0, 0, 5, 0, 19]);
  });
});